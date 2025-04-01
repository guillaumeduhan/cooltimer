'use client';
import supabase from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface UserMetadata {
  [key: string]: any;
}

interface AppContextType {
  user: User | undefined;
  loading: boolean;
  setLoading: (l: boolean) => void;
  setUser: (user: User | undefined) => void;
  saveUser: (params: { metadata: UserMetadata }) => Promise<any>;
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

  const saveUser = async ({ metadata }: { metadata: UserMetadata }): Promise<any> => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.updateUser({
        data: metadata
      });

      if (error) throw error;

      if (data?.user) {
        setUser(data.user);
        toast.success('Profile saved successfully!');
        return data;
      }
    } catch (error) {
      toast.error('Sorry, something wrong happened. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSessionAndUser = async () => {
      setLoading(true);
      try {
        // First, check if a session exists
        const { data: sessionData } = await supabase.auth.getSession();
        if (!sessionData?.session) {
          console.warn("No active session found");
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