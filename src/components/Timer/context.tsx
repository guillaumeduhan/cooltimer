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

interface TimerContentObject {
  grow?: boolean;
  h: number;
  m: string;
  ms: string;
  s: string;
}

export interface TimerRecord {
  id: string;
  user_id?: string;
  tags?: string[];
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

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  const elapsedTimeRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [records, setRecords] = useState<TimerRecord[]>([]);

  // Timer
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
      created_at: new Date()
    };

    const localStorageRecords = JSON.parse(localStorage.getItem(STORAGE_KEYS) || '[]');
    localStorageRecords.push(record);
    setRecords((prev) => [record, ...prev]);
    localStorage.setItem(STORAGE_KEYS, JSON.stringify(localStorageRecords));

    setTime(0);
    elapsedTimeRef.current = 0;
  }, [time, newTag]);

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

  const getTimeFormat = ({ h, m, s, ms, grow }: TimerContentObject): any => (
    <div className={`relative flex items-end ${grow ? 'min-h-[24px] text-[80px]' : 'text-[32px]'}`}>
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
      localStorage.setItem(STORAGE_KEYS, JSON.stringify(updatedRecords));
      return updatedRecords;
    });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEYS);
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
        start,
        setRecords,
        reset,
        save,
        pause,
        formatTime,
        getTimeFormat,
        deleteById
      }}
    >
      {children}
    </TimerContext.Provider >
  );
};
