'use client';

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return <main className="relative">
    <div className="absolute rounded-full top-0 w-full mx-auto h-[100px] bg-gradient-to-r from-sky-600 via-emerald-500 to-fuchsia-600 rotate-[3deg] blur-[80px] opacity-100 z-10" />
    <header className="relative flex flex-col gap-8 items-center justify-center py-4 lg:py-12 z-50">
      <h1 className="calfont text-[54px] lg:text-[76px] text-center" style={{
        lineHeight: '1.1',
        display: 'inline-block',
      }}>
        <div className="flex justify-start items-center gap-2">
          <span>Time</span>
          <div className="mx-auto">
            <div className="relative overflow-hidden flex items-center justify-center rounded-full min-w-[72px] min-h-[72px] cursor-pointer hover:scale-120 transition duration-300">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-fuchsia-500 to-emerald-400 animate-wiggle z-0" />
              <div className="relative z-10 rounded-full overflow-hidden">
                <Logo {...{
                  width: 64,
                  height: 64
                }} />
              </div>
            </div>
          </div>
          <span>Tracking</span>
        </div>
        <span>Made Beautiful</span>
      </h1>
      <p className="text-[16px] lg:text-[20px] text-woodsmoke-400">The smart, minimalist time tracker for makers.</p>
      <Button variant="outline" className="bg-woodsmoke-900 text-white">Get Started for free</Button>
      <p className="text-sm text-woodsmoke-400">
        <span className="text-white font-bold">353</span> track their time with Timer.cool
      </p>
    </header>
  </main>;
}
export default LandingPage