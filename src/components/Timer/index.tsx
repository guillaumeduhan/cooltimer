"use client";
import Clock from "./Clock";
import { TimerProvider } from "./context";

const Timer = () => {
  return <TimerProvider>
    <Clock />
  </TimerProvider>
};

export default Timer;