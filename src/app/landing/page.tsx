'use client';

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return <main className="relative">
    <div className="absolute rounded-full top-0 w-full mx-auto h-[100px] bg-gradient-to-r from-sky-600 via-emerald-500 to-fuchsia-600 rotate-[3deg] blur-[80px] opacity-100 z-10 fade-in" />
    <div className="relative flex flex-col gap-4 lg:gap-8 items-center justify-center py-8 lg:py-24 z-50">
      <h1 className="calfont text-[54px] lg:text-[100px] text-center move-up-750" style={{
        lineHeight: '1.1',
        display: 'inline-block',
      }}>
        <div className="flex justify-start items-center gap-2">
          <span>Time</span>
          <div className="mx-auto">
            <div className="relative overflow-hidden flex items-center justify-center rounded-full min-w-[64px] min-h-[64px] lg:min-w-[110px] lg:min-h-[110px] cursor-pointer hover:scale-120 transition duration-300">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-fuchsia-500 to-emerald-400 animate-wiggle z-0" />
              <div className="hidden lg:block relative z-10 rounded-full overflow-hidden">
                <Logo {...{
                  width: 100,
                  height: 100
                }} />
              </div>
              <div className="block lg:hidden relative z-10 rounded-full overflow-hidden">
                <Logo {...{
                  width: 54,
                  height: 54
                }} />
              </div>
            </div>
          </div>
          <span>Tracking</span>
        </div>
        <span>Made Beautiful</span>
      </h1>
      <p className="text-[20px] text-woodsmoke-400 move-up-500">The smart, minimalist time tracker for makers.</p>
        <Link href="/">
          <div className="relative move-up-1000 flex items-center gap-2 p-[2px] rounded-[8px] overflow-hidden group w-[200px] h-[40px]">
            <div className="spin absolute -left-[75px] -top-[75px] size-[400px] bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-900 to-emerald-500 z-0" />
            <div className="w-full h-full text-center mx-auto flex items-center justify-center gap-2 bg-woodsmoke-950 rounded-[6px] z-50">
              <span className="relative z-10">Get Started for free</span>
            </div>
          </div>
        </Link>
      <p className="text-sm text-woodsmoke-400 fade-in">
        <span className="text-white font-[500]">835</span> track their time with Timer.cool
      </p>
    </div>
  </main>;
}
export default LandingPage