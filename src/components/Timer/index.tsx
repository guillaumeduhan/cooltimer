"use client";
import Header from "../Header";
import Clock from "./Clock";
import List from "./List";

const Timer = () => {
  return <div className={`relative grid move-up-500 overflow-hidden`}>
    <Header />
    <Clock />
    <div className="container max-w-[600px] mx-auto">
      <List />
    </div>
  </div>
};

export default Timer;