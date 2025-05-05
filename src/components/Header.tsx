'use client';
import useAppContext from "@/app/context";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import User from "./User";
import TelegramLink from "./Social/Telegram";
import Image from "next/image";

const Header = () => {
  const { user } = useAppContext();
  const announcement = {
    title: "Welcome to Cooltimer!",
    description: "Your new favorite way to stay focused, get things done, and make time work *for* you. Whether you're working, studying, or just need a break—Cooltimer keeps you on track, effortlessly.",
    author: "Best, Guillaume"
  }

  return <header className="group flex items-center gap-8 justify-between p-4 z-100">
    <div className="flex items-center gap-4">
      <Link href={"/"}>
        <Logo />
        {/* <div className="relative overflow-hidden flex items-center justify-center rounded-full min-w-12 min-h-12 cursor-pointer hover:scale-110 transition duration-300">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-fuchsia-500 to-emerald-400 animate-wiggle z-0" />
          <div className="relative z-10 rounded-full overflow-hidden bg-woodsmoke-950 p-[6px]">
          </div>
        </div> */}
        {!user && <span className="font-[500] text-black dark:text-white">cooltimer</span>}
      </Link>
      <span className="text-[32px] text-neutral-700 font-[100]">/</span>
      <User />
    </div>
    <div className="hidden lg:flex items-center justify-between gap-4 text-sm text-woodsmoke-600">
      <Link className="dark:hover:text-white" href="/landing">What is Timer.cool?</Link>
      <Link className="dark:hover:text-white" href="/roadmap">Roadmap</Link>
      <Link className="dark:hover:text-white" href="https://codeg.link/peerlist-timer" target="_blank">
        <Image src="/peerlist.svg" alt="Peerlist" width={128} height={128} />
      </Link>
      {/* <Link className="dark:hover:text-white" target="_blank" href="https://codeg.link/feedback">Feedback</Link> */}
      <DarkMode />
    </div>
  </header>;
}
export default Header;