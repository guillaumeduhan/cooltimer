'use client';

import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return <header className="cursor-pointer transition duration-300 gap-4 w-full fixed relative flex items-center justify-between p-4">
    <Link
      target="_blank"
      href="/"
    >
      <Logo />
    </Link>
    <div className="grow flex items-center">
      <Link
        target="_blank"
        href="/live"
        className="pb-[1px] border-b-2 border-woodsmoke-800 font-[600]"
      >
        Live clock
        <span className="bg-pink-600 text-white px-2 rounded-full text-[12px]">NEW!</span>
      </Link>
    </div>
    <Link
      target="_blank"
      href="https://www.guillaume.ceo"
      className="pb-[1px] border-b-2 border-woodsmoke-800 font-[600]"
    >
      Guillaume.ceo
    </Link>
  </header>;
}
export default Header