'use client';

import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return <header className="cursor-pointer transition duration-300 w-full relative flex items-center justify-between p-4">
    <Link
      target="_blank"
      href="/"
    >
      <Logo />
    </Link>
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