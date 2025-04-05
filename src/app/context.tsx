'use client';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import supabase from '@/lib/supabase';
import { STORAGE_KEYS } from '@/shared/constants';
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

interface AppContextType {
  user: any;
  open: boolean;
  loading: boolean;
  clearLocalStorage: () => void;
  setLoading: (l: boolean) => void;
  setOpen: (o: boolean) => void;
  setUser: (user: any) => void;
  saveUser: (data: any) => Promise<any>;
  logout: () => Promise<boolean>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppWrapperProps {
  children: ReactNode;
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppWrapper');
  }
  return context;
};

export function AppWrapper({ children }: AppWrapperProps) {
  const [user, setUser] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(true);

  const router = useRouter();

  const logout = async (): Promise<boolean> => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      router.push('/');
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const saveUser = async (data: any) => {
    if (!user) return;
    try {
      const updated = { ...user, ...data }
      setUser(updated);
      localStorage.setItem('user', JSON.stringify(updated));

      toast.success('Profile saved successfully!');
    } catch (error) {
      toast.error('Sorry, something wrong happened. Please try again.');
      throw error;
    }
  };

  const createTempUser = async () => {
    try {
      setLoading(true);
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        return setUser(JSON.parse(storedUser));
      }
      const id = uuidv4();

      function generateRandomName() {
        const adjectives = [
          "quick", "lazy", "sleepy", "noisy", "hungry", "brave", "shy", "clever", "silly", "graceful",
          "curious", "gentle", "happy", "sad", "angry", "proud", "bright", "dark", "silent", "fancy",
          "cool", "calm", "bold", "friendly", "loyal", "eager", "zany", "witty", "sharp", "quiet",
          "tough", "kind", "nervous", "funny", "crazy", "jolly", "grumpy", "sneaky", "bouncy", "chilly",
          "fierce", "soft", "wild", "tiny", "giant", "nimble", "swift", "clumsy", "dizzy", "mighty"
        ];

        const nouns = [
          "tiger", "lion", "bear", "fox", "eagle", "shark", "dragon", "panther", "wolf", "leopard",
          "owl", "koala", "zebra", "moose", "falcon", "whale", "octopus", "penguin", "crab", "phoenix",
          "rabbit", "giraffe", "monkey", "donkey", "swan", "buffalo", "beetle", "rhino", "lobster", "antelope",
          "camel", "duck", "lizard", "panda", "squid", "bat", "yak", "boar", "sloth", "iguana",
          "seahorse", "crow", "goat", "chimp", "cobra", "flamingo", "porcupine", "puma", "toad", "hyena"
        ];

        const randomItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

        return `${randomItem(adjectives)}-${randomItem(adjectives)}-${randomItem(nouns)}`;
      };

      const newUser = {
        id,
        display_name: generateRandomName()
      };

      const res = await fetch('https://ipapi.co/json/');
      const analytics = await res.json();

      await fetch('/api/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newUser,
          ...analytics,
        }),
      });

      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem(STORAGE_KEYS);
    createTempUser();
    toast.success("Data successfully cleared!");
    router.push('/');
  };

  useEffect(() => {
    const fetchSessionAndUser = async () => {
      setLoading(true);
      try {
        // First, check if a session exists
        const { data: sessionData } = await supabase.auth.getSession();

        if (!sessionData?.session) {
          createTempUser();
          setLoading(false);
          return;
        }

        // If a session exists, fetch the user
        const { data: userData, error } = await supabase.auth.getUser();
        if (error) throw error;
        if (userData?.user) {
          setUser(userData.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionAndUser();
  }, []);

  const value: AppContextType = {
    user,
    open,
    loading,
    clearLocalStorage,
    setOpen,
    setUser,
    setLoading,
    saveUser,
    logout
  };

  if (loading) return <div className="h-screen w-full flex items-center justify-center">
    <Loading />
  </div>

  return (
    <AppContext.Provider value={value}>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        {children}
      </main>
    </AppContext.Provider>
  );
};

export default useAppContext;