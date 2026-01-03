'use client';

import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return <header className="cursor-pointer transition duration-300 w-full relative flex items-center justify-center gap-2 p-4">
    <Link
      className="grayscale hover:grayscale-0 transition duration-300"
      target="_blank"
      href="/"
    >
      <Logo />
    </Link>
    Made by
    <Link
      target="_blank"
      href="https://www.guillaume.ceo"
      className="border-b-2 font-[600]"
    >
      Guillaume.ceo
    </Link>
  </header>;
}
export default Header