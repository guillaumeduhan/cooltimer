'use client';
import Logo from '@/components/Logo';
import supabase from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

interface UserMetadata {
  [key: string]: any;
}

interface AppContextType {
  user: User | undefined;
  loading: boolean;
  setLoading: (l: boolean) => void;
  setUser: (user: User | undefined) => void;
  saveUser: (params: { user_metadata: UserMetadata }) => Promise<any>;
  logout: () => Promise<boolean>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

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

  const saveUser = async ({ user_metadata }: { user_metadata: UserMetadata }): Promise<any> => {
    try {
      setLoading(true);
      setUser((prev: any) => ({ ...prev, user_metadata }));

      // const { data, error } = await supabase.auth.updateUser({
      //   data: user_metadata
      // });

      // if (error) throw error;

      // if (data?.user) {
      //   setUser(data.user);
      //   toast.success('Profile saved successfully!');
      //   return data;
      // }
    } catch (error) {
      toast.error('Sorry, something wrong happened. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createTempUser = () => {
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
      app_metadata: {},
      user_metadata: {
        display_name: generateRandomName()
      },
      aud: id,
      created_at: new Date().toISOString()
    }

    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  }

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
    loading,
    setUser,
    setLoading,
    saveUser,
    logout
  };

  if (loading) return <div className="h-screen w-full bg-">
    <Logo />
  </div>

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppWrapper');
  }
  return context;
};

export default useAppContext;