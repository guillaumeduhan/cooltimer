'use client';
import useAppContext from "@/app/context";
import { Link } from "next-view-transitions";
import DarkMode from "./DarkMode";
import Login from "./Login";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  const { user } = useAppContext();
  return <header className="flex items-center gap-8 justify-between p-4 z-100 min-h-16 max-h-16">
    <div className="flex items-center gap-4">
      <Link href={user ? '/timer' : '/'}>
        <Logo />
        {!user && <span className="font-[500] text-black dark:text-white">cooltimer</span>}
      </Link>
      {user && <span className="text-[32px] text-neutral-700 font-[100]">/</span>}
      {user && <User />}
    </div>
    <div className="flex items-center justify-between gap-4">
      {!user && <div className="flex items-center justify-between gap-4">
        <Login />
      </div>}
      <DarkMode />
    </div>
  </header>;
}
export default Header