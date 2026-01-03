"use client";

import Header from "../Header";
import Clock from "./Clock";
import List from "./List";

const Timer = () => {

  return (
    <div className="grid gap-4">
      <div className="move-up-500 overflow-hidden min-h-screen flex flex-col items-center justify-center p-16">
        <Clock />
      </div>
      <div className="container mx-auto max-w-[600px]">
        <List />
      </div>
    </div>
  );
};

export default Timer;
