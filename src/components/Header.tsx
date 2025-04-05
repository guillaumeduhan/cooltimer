'use client';
import useAppContext from "@/app/context";
import Link from "next/link";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  const { user } = useAppContext();
  const announcement = {
    title: "Welcome to Cooltimer!",
    description: "Your new favorite way to stay focused, get things done, and make time work *for* you. Whether you're working, studying, or just need a break—Cooltimer keeps you on track, effortlessly.",
    author: "Best, Guillaume"
  }

  return <header className="flex items-center gap-8 justify-between p-4 z-100">
    <div className="flex items-center gap-4">
      <Link href={"/"}>
        <div className="relative overflow-hidden flex items-center justify-center rounded-full min-w-12 min-h-12 cursor-pointer hover:scale-110 transition duration-300">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-fuchsia-400 to-emerald-500 animate-wiggle z-0" />
          <div className="relative z-10 rounded-full overflow-hidden">
            <Logo />
          </div>
        </div>
        {!user && <span className="font-[500] text-black dark:text-white">cooltimer</span>}
      </Link>
      <span className="text-[32px] text-neutral-700 font-[100]">/</span>
      <User />
    </div>
    <div className="flex items-center justify-between gap-4">
      <Link href="/roadmap" className="text-sm font-[500]">Roadmap</Link>
      <DarkMode />
    </div>
  </header>;
}
export default Header;