"use client";
import { useEffect } from 'react';
import Suggestions from "../Suggestions";
import { Button } from "../ui/button";
import { useTimer } from "./context";

const Clock = ({ children }: any) => {
  const { time, share, isRunning, start, pause, save, reset, formatTime, toggleTimer } = useTimer();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'Space':
          event.preventDefault();
          toggleTimer();
          break;
        case 'KeyS':
          if (!isRunning) {
            event.preventDefault();
            save();
          }
          break;
        case 'KeyT':
          if (!isRunning) {
            event.preventDefault();
            reset();
          }
          break;
        case 'KeyP':
          event.preventDefault();
          toggleTimer();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleTimer, save, isRunning, reset]);

  return <div className="clock-container flex items-center justify-center gap-6 flex-col pb-24 pt-16">
    <div className="grid items-center w-full text-center">
      <div
        className={`${isRunning ? 'bg-gradient-to-tr from-red-400 via-red-500 to-red-600 ' : 'bg-gradient-to-br from-woodsmoke-300 to-woodsmoke-950'} 
          flex items-center justify-center max-w-48 max-h-48 w-full h-full rounded-full cursor-pointer hover:scale-105 duration-300 transition mx-auto`}
        onClick={isRunning ? pause : start}
      >
        <div className="min-w-48 min-h-48 relative flex items-center justify-center group">
          {isRunning && <div className="z-10 absolute rounded-full w-32 h-32 bg-red-500 ping" />}
          <div className="z-50">
            {!isRunning ? (
              // Play Icon
              <svg className="group-hover:scale-110 transition duration-300 text-white" xmlns="http://www.w3.org/2000/svg" width="164" height="164" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="group-hover:scale-110 transition duration-300 text-white" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 320 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48z" /></svg>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto">
        {formatTime(time, true)}
      </div>
      <div className={`relative h-2 max-w-[500px] w-full bg-gradient-to-r mx-auto from-woodsmoke-200 to-woodsmoke-300 dark:from-woodsmoke-900 dark:to-woodsmoke-900/20 overflow-hidden`}>
        {isRunning ? <div className="w-full bg-gradient-to-r from-transparent dark:via-red-800 dark:via-red-600 dark:to-red-200 h-full via-red-100 via-red-300 to-red-500 slide-right"></div> : ''}
      </div>
    </div>
    <div>
      <div className="group flex items-center gap-2">
        <Button variant="outline" disabled={isRunning} onClick={async () => {
          await save();
        }}>Save</Button>
        <Button variant="outline" disabled={isRunning} onClick={() => reset()}>Reset</Button>
      </div>
    </div>
    <Suggestions />
    {/* <Share record={{ id: uuidv4(), time, created_at: new Date() }} /> */}
  </div>
};

export default Clock;