"use client";
import useAppContext from '@/app/context';
import Clock from "./Clock";
import List from "./List";

const Timer = () => {
  const { open, setOpen } = useAppContext();

  return <div className={`grid lg:flex`}>
    <Clock {...{ open, setOpen }} />
    <div className={`relative overflow-hidden dark:border-woodsmoke-900 transition-all duration-700 ease-in-out max-h-screen overflow-y-auto ${open ? "lg:w-[800px] lg:border-l lg:border-t lg:rounded-tl-xl" : "w-0"
      }`}>
      <List {...{ open, setOpen }} />
    </div>
  </div>
};

export default Timer;