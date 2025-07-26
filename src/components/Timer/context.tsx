"use client";
import { SITE_TITLE, STORAGE_KEYS } from "@/shared/constants";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { shareTimerOnX } from '@/components/Timer/Share/shareUtils';

interface TimerContentObject {
  grow?: boolean;
  h: number;
  m: string;
  ms: string;
  s: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  created_at: Date;
  user_id?: string;
}

export interface TimerRecord {
  id: string;
  user_id?: string;
  user_name?: string;
  tags?: Tag[];
  time: number;
  created_at: Date;
}

const TimerContext = createContext<any | undefined>(undefined);

export const useTimer = (): any => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within TimerProvider');
  }
  return context;
};

// ✅ Utility: Download JSON file
const downloadTimersAsJSON = (records: TimerRecord[]) => {
  const dataStr = JSON.stringify(records, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "timers.json";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [tags, setTags] = useState<Tag[]>([]);
  const [currentTags, setCurrentTags] = useState<Tag[]>([]);

  const elapsedTimeRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [records, setRecords] = useState<TimerRecord[]>([]);

  // Generate fake records for testing
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && records.length === 0) {
      const generateFakeRecords = () => {
        const fakeRecords: TimerRecord[] = [];
        const possibleTags: Tag[] = [
          { id: '1', name: 'Work', color: '#FF5733', created_at: new Date() },
          { id: '2', name: 'Study', color: '#33FF57', created_at: new Date() },
          { id: '3', name: 'Exercise', color: '#3357FF', created_at: new Date() },
          { id: '4', name: 'Reading', color: '#F033FF', created_at: new Date() },
        ];

        for (let i = 0; i < 100; i++) {
          const randomTime = Math.floor(Math.random() * 7200);
          const randomDate = new Date();
          randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30));
          
          const record: TimerRecord = {
            id: uuidv4(),
            time: randomTime,
            created_at: randomDate,
            tags: Math.random() > 0.3 ? [possibleTags[Math.floor(Math.random() * possibleTags.length)]] : undefined
          };
          
          fakeRecords.push(record);
        }

        return fakeRecords;
      };

      const fakeRecords = generateFakeRecords();
      setRecords(fakeRecords);
      localStorage.setItem(STORAGE_KEYS.RECORDS, JSON.stringify(fakeRecords));
    }
  }, [records.length]);

  useEffect(() => {
    const savedTags = localStorage.getItem(STORAGE_KEYS.TAGS);
    if (savedTags) {
      const parsedTags = JSON.parse(savedTags).map((t: any) => ({ ...t, created_at: new Date(t.created_at) }));
      setTags(parsedTags);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TAGS, JSON.stringify(tags));
  }, [tags]);

  const createTag = useCallback((name: string, color: string, user_id?: string) => {
    const newTag: Tag = {
      id: uuidv4(),
      name,
      color,
      created_at: new Date(),
      user_id
    };
    setTags(prev => [...prev, newTag]);
    return newTag;
  }, []);

  const updateTag = useCallback((id: string, updates: Partial<Tag>) => {
    setTags(prev => prev.map(tag => 
      tag.id === id ? { ...tag, ...updates } : tag
    ));
  }, []);

  const deleteTag = useCallback((id: string) => {
    setTags(prev => prev.filter(tag => tag.id !== id));
    setRecords(prev => prev.map(record => ({
      ...record,
      tags: record.tags?.filter(tag => tag.id !== id)
    })));
  }, []);

  const addTagToCurrentTimer = useCallback((tag: Tag) => {
    setCurrentTags(prev => [...prev, tag]);
  }, []);

  const removeTagFromCurrentTimer = useCallback((tagId: string) => {
    setCurrentTags(prev => prev.filter(tag => tag.id !== tagId));
  }, []);

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      document.title = "Recording...";
      startTimeRef.current = Date.now() - elapsedTimeRef.current;

      intervalRef.current = window.setInterval(() => {
        setTime((Date.now() - (startTimeRef.current || Date.now())) / 1000);
      }, 10);
    }
  }, [isRunning]);

  const pause = useCallback(() => {
    if (isRunning && intervalRef.current !== null) {
      document.title = "Stopped ✋";
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
      elapsedTimeRef.current = Date.now() - (startTimeRef.current || Date.now());
    }
  }, [isRunning]);

  const toggleTimer = useCallback(() => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }, [isRunning, pause, start]);

  const reset = useCallback(() => {
    pause();
    setTime(0);
    document.title = SITE_TITLE;
    elapsedTimeRef.current = 0;
  }, [pause]);

  const save = useCallback(() => {
    if (time === 0) {
      return;
    }
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);

    const record: TimerRecord = {
      id: uuidv4(),
      time: time,
      created_at: new Date(),
      tags: currentTags
    };

    const localStorageRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECORDS) || '[]');
    localStorageRecords.push(record);
    setRecords((prev) => [record, ...prev]);
    localStorage.setItem(STORAGE_KEYS.RECORDS, JSON.stringify(localStorageRecords));

    setTime(0);
    setCurrentTags([]);
    elapsedTimeRef.current = 0;
  }, [time, currentTags]);

  const formatTime = useCallback(
    (seconds: number, grow: boolean): any => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60).toString().padStart(h > 0 ? 2 : 1, '0');
      const s = Math.floor(seconds % 60).toString().padStart(2, '0');
      const ms = Math.floor((seconds * 100) % 100).toString().padStart(2, '0');

      return getTimeFormat({ h, m, s, ms, grow });
    },
    []
  );

  const share = async() => {
    const record: TimerRecord = {
      id: uuidv4(),
      time,
      created_at: new Date()
    };
    await shareTimerOnX(record);
  };

  const getTimeFormat = ({ h, m, s, ms, grow }: TimerContentObject): any => (
    <div className={`relative flex items-end ${grow ? 'min-h-[24px] text-[90px]' : 'text-[28px]'}`}>
      <div className="flex items-center">
        {h > 0 && (
          <div className="flex items-center">
            <div>{h}</div>
            <div>:</div>
          </div>
        )}
        <div>{m}</div>
        <div>:</div>
        <div>{s}</div>
        <div>,</div>
      </div>
      <div className={`${grow ? 'text-[32px] bottom-6' : ''} min-w-[42px] text-left text-woodsmoke-500 relative`}>
        <span>{ms}</span>
      </div>
    </div>
  );

  const deleteById = useCallback((id: string) => {
    setRecords((prevRecords) => {
      const updatedRecords = prevRecords.filter(record => record.id !== id);
      localStorage.setItem(STORAGE_KEYS.RECORDS, JSON.stringify(updatedRecords));
      return updatedRecords;
    });
  }, []);

  const downloadAllTimers = useCallback(() => {
    downloadTimersAsJSON(records);
  }, [records]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.RECORDS);
    if (saved) {
      const parsedRecords = JSON.parse(saved).map((r: any) => ({ ...r, timestamp: new Date(r.timestamp) }));
      setRecords(parsedRecords);
    }
  }, []);

  return (
    <TimerContext.Provider
      value={{
        time,
        isRunning,
        records,
        tags,
        currentTags,
        start,
        setRecords,
        reset,
        save,
        pause,
        share,
        formatTime,
        getTimeFormat,
        deleteById,
        toggleTimer,
        createTag,
        updateTag,
        deleteTag,
        addTagToCurrentTimer,
        removeTagFromCurrentTimer,
        downloadAllTimers // ✅ Added here
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
