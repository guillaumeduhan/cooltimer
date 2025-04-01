"use client";
import { STORAGE_KEYS } from "@/shared/constants";
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from 'react';

interface TimerContentObject {
  grow?: boolean;
  h: number;
  m: string;
  ms: string;
  s: string;
}

interface TimerRecord {
  id: string;
  tags?: string[];
  time: number;
  timestamp: Date;
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

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = Date.now() - elapsedTimeRef.current;

      intervalRef.current = window.setInterval(() => {
        setTime((Date.now() - (startTimeRef.current || Date.now())) / 1000);
      }, 10);
    }
  }, [isRunning]);

  const pause = useCallback(() => {
    if (isRunning && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
      elapsedTimeRef.current = Date.now() - (startTimeRef.current || Date.now());
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    pause();
    setTime(0);
    elapsedTimeRef.current = 0;
  }, [pause]);

  const save = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);

    const record: TimerRecord = {
      id: Date.now().toString(),
      time: time,
      timestamp: new Date(),
    };

    const records = JSON.parse(localStorage.getItem(STORAGE_KEYS) || '[]');
    records.push(record);
    localStorage.setItem(STORAGE_KEYS, JSON.stringify(records));

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

  return (
    <TimerContext.Provider
      value={{
        time,
        isRunning,
        start,
        reset,
        save,
        pause,
        formatTime,
        getTimeFormat
      }}
    >
      {children}
    </TimerContext.Provider >
  );
};
