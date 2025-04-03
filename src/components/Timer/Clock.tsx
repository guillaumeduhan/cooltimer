"use client";
import { Button } from "../ui/button";
import { useTimer } from "./context";

const Clock = ({ children }: any) => {
  const { time, isRunning, start, pause, save, reset, formatTime } = useTimer();

  return <div className="flex items-center justify-center gap-8 flex-col w-full grow py-12 px-2 lg:p-0 lg:min-h-[calc(100vh-64px)]">
    <div className="grid items-center gap-4 w-full text-center">
      <div
        className={`${isRunning ? 'bg-gradient-to-tr from-red-400 via-red-500 to-red-600 ' : 'bg-gradient-to-br from-woodsmoke-300 to-woodsmoke-600'} 
          flex items-center justify-center max-w-40 max-h-40 w-full h-full rounded-full cursor-pointer hover:scale-105 duration-300 transition mx-auto`}
        onClick={isRunning ? pause : start}
      >
        <div className="min-w-40 min-h-40 relative flex items-center justify-center group">
          {isRunning && <div className="z-10 absolute rounded-full w-32 h-32 bg-red-500 ping" />}
          <div className="z-50">
            {!isRunning ? (
              // Play Icon
              <svg className="group-hover:scale-110 transition duration-300 text-white" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="group-hover:scale-85 transition duration-300 text-white" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto">
        {formatTime(time, true)}
      </div>
      <div className={`relative w-full h-1 max-w-[500px] w-full bg-gradient-to-r mx-auto from-woodsmoke-200 to-woodsmoke-300 dark:from-woodsmoke-900 dark:to-woodsmoke-900/20 overflow-hidden`}>
        {isRunning ? <div className="w-full bg-gradient-to-r from-transparent dark:via-red-800 dark:via-red-600 dark:to-red-200 h-1 via-red-100 via-red-300 to-red-500 slide-right"></div> : ''}
      </div>
    </div>
    <div className="group grid gap-4">
      <div className="flex gap-2 items-center">
        <Button variant="outline" disabled={isRunning} onClick={() => save()}>Save</Button>
        <Button variant="outline" disabled={isRunning} onClick={() => reset()}>Reset</Button>
      </div>
      <div className="h-6 flex items-center justify-center">
        {children}
      </div>
    </div>
  </div>
};

export default Clock;