'use client';
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

const DarkMode = () => {
  const [dark, setDark] = useState(false);
  const [value, setValue] = useLocalStorage('dark-mode', false);

  useEffect(() => {
    if (value) setDark(value)
  }, [value]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (dark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
    setValue(dark)
  }, [dark])

  return <div className="cursor-pointer" onClick={() => setDark(!dark)}>
    {dark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
  </div>;
}
export default DarkMode;
