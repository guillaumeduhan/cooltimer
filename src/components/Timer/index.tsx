"use client";
import { useState } from 'react';
import Clock from "./Clock";
import List from "./List";

const Timer = () => {
  const [open, setOpen] = useState<boolean>(false);

  return <div className={`grid lg:flex`}>
    <Clock>
      <div onClick={() => setOpen(!open)} className="flex text-sm items-center gap-2 cursor-pointer opacity-25 hover:opacity-100 transition duration-300">
        <span>{open ? 'Hide list' : 'Show List'}</span>
        <svg className={`${open ? '-rotate-90 lg:rotate-180' : 'rotate-90 lg:rotate-0'} transition-all duration-700`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z" /></svg>
      </div>
    </Clock>
    <div className={`relative overflow-hidden dark:border-woodsmoke-900 transition-all duration-700 ease-in-out max-h-[900px] overflow-y-auto ${open ? "lg:w-[800px] lg:border-l lg:border-t lg:border-b lg:rounded-l-xl" : "w-0"
      }`}>
      <List {...{ open }} />
    </div>
  </div>
};

export default Timer;