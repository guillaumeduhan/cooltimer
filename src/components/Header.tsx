// 'use client';
// import useAppContext from "@/app/context";
// import Link from "next/link";
// import DarkMode from "./DarkMode";
// import Logo from "./Logo";
// import User from "./User";
// import TelegramLink from "./Social/Telegram";
// import Image from "next/image";

// const Header = () => {
//   const { user } = useAppContext();
//   const announcement = {
//     title: "Welcome to Cooltimer!",
//     description: "Your new favorite way to stay focused, get things done, and make time work *for* you. Whether you're working, studying, or just need a break—Cooltimer keeps you on track, effortlessly.",
//     author: "Best, Guillaume"
//   }

//   return <header className="group flex transition duration-300 items-center gap-8 justify-between p-4 z-100">
//     <div className="flex items-center gap-4">
//       <Link href={"/"}>
//         <Logo />
//         {!user && <span className="font-[500] text-black dark:text-white">cooltimer</span>}
//       </Link>
//       <span className="text-[32px] text-neutral-700 font-[100]">/</span>
//       <User />
//     </div>
//     <div className="hidden opacity-0 group-hover:opacity-100 lg:flex items-center justify-between gap-4 text-sm text-woodsmoke-600">
//       {/* <Link className="dark:hover:text-white" href="/roadmap">Roadmap</Link> */}
//       <Link className="dark:hover:text-white" href="https://codeg.link/peerlist-timer" target="_blank">
//         <Image src="/peerlist.svg" alt="Peerlist" width={128} height={128} />
//       </Link>
//       {/* <DarkMode /> */}
//     </div>
//   </header>;
// }
// export default Header;

'use client';

import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return <header className=" transition duration-300 w-full fixed relative flex items-center justify-between p-4">
    <Logo />
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