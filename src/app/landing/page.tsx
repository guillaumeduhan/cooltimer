'use client';

import Logo from "@/components/Logo";
import Link from "next/link";
import clock from "../../../public/clock.png";
import list from "../../../public/list.png";
import progress from "../../../public/progress.png";
import Image from "next/image";
import profile from "../../../public/me.jpg";
import TelegramLink from "@/components/Social/Telegram";

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
            <Logo {...{
              size: 96,
              src: "./logo.png"
            }} />
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
          <span className="text-white font-[500]">1002</span> track their time with Timer.cool — Last timer started 12 mins ago
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
      <TelegramLink />
    </footer>
  </main>;
}
export default LandingPage