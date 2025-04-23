"use client";
import useAppContext from '@/app/context';
import Clock from "./Clock";
import List from "./List";

const Timer = () => {
  const { open, setOpen } = useAppContext();

  return <div className={`grid lg:flex`}>
    <Clock {...{ open, setOpen }} />
    <div className={`relative overflow-hidden dark:border-woodsmoke-900 transition-all duration-500 ease-in-out h-full max-h-[calc(100vh-74px)] overflow-y-auto ${open ? "opacity-100 lg:w-[800px] lg:border-l lg:border-t lg:rounded-tl-xl" : "opacity-0 lg:w-0"
      }`}>
      <List {...{ open, setOpen }} />
      <div className="absolute bottom-0 sticky w-full h-24 z-50 bg-gradient-to-t dark:from-black dark:to-transparent"></div>
    </div>
  </div>
};

export default Timer;