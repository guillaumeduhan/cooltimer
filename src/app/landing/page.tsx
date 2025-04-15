'use client';

import Logo from "@/components/Logo";
import Link from "next/link";
import clock from "../../../public/clock.png";
import list from "../../../public/list.png";
import progress from "../../../public/progress.png";
import Image from "next/image";
import profile from "../../../public/me.jpg";

const LandingPage = () => {
  const items = [
    {
      title: "01. Track your time",
      description: "Simple, intuitive, and easy to use.",
      url: clock
    },
    {
      title: "02. Add Tags",
      description: "Categorize your timers with tags.",
      url: list
    },
    {
      title: "03. View Analytics (soon)",
      description: "See your time spent on each tag.",
      url: progress
    }
  ]
  return <main className="relative pb-12 grid lg:gap-12">
    <div className="absolute rounded-full top-0 w-full mx-auto h-[100px] bg-gradient-to-r from-sky-600 via-emerald-500 to-fuchsia-600 rotate-[3deg] blur-[80px] opacity-100 z-10 fade-in" />
    <div className="relative flex flex-col gap-4 lg:gap-8 items-center justify-center py-8 lg:pt-24 z-50">
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
      <footer>
        <p className="text-sm text-woodsmoke-400 fade-in">
          <span className="text-white font-[500]">835</span> track their time with Timer.cool — Last timer started 12 mins ago
        </p>
      </footer>
    </div>
    <section className="relative fade-in mx-2">
      <div className="grid lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {items.map((item, index) => (
          <div key={index} className="bg-woodsmoke-950 flex flex-col rounded-lg border-2 border-woodsmoke-800">
            <header className="flex flex-col gap-1 items-start justify-center border-b border-woodsmoke-800 px-6 py-2 min-h-[100px]">
              <h2 className="calfont text-lg">{item.title}</h2>
              <p className="text-sm text-woodsmoke-400">{item.description}</p>
            </header>
            <div className="flex items-center justify-center p-6 grow">
              <Image src={item.url} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
    <footer className="relative container fade-in mx-auto text-center grid gap-4 py-12">
      <div className="max-w-[300px] grid gap-2 mx-auto">
        <Image src={profile} alt="Guillaume Duhan" className="rounded-full size-[86px] mx-auto" />
        <p className="text-center text-woodsmoke-400 fade-in">My mission is to get over <span className="text-white font-[500]">1 Million</span> people around the world to use Timer.cool.</p>
        <div className="text-sm">
          <p className="fade-in">Guillaume Duhan</p>
          <p className="text-sm text-center text-woodsmoke-400 fade-in">Chief Timer Officer</p>
        </div>
      </div>
      <Link href="https://timer.cool/telegram" target="_blank">
          <div className="mx-auto relative move-up-1000 flex items-center gap-2 p-[2px] rounded-[8px] overflow-hidden group w-[200px] h-[40px]">
            <div className="spin absolute -left-[75px] -top-[75px] size-[400px] bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-900 to-cyan-500 z-0" />
            <div className="w-full h-full text-center mx-auto flex items-center justify-center gap-2 bg-woodsmoke-950 rounded-[6px] z-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#2AABEE"/><stop offset="100%" stopColor="#229ED9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"/><path fill="#FFF" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"/></svg>
              <span className="relative z-10">Telegram Channel</span>
            </div>
          </div>
        </Link>
    </footer>
  </main>;
}
export default LandingPage