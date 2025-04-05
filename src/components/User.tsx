'use client';
import useAppContext from "@/app/context";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useHelpers } from "@/hooks/useHelpers";
import Link from 'next/link';
import { useTimer } from "./Timer/context";

import { useEffect } from 'react';

const User = () => {
  const { user } = useAppContext();
  const { isRunning } = useTimer();
  const { trimString } = useHelpers();

  useEffect(() => {
    user
  }, [user])

  if (!user) return <div>No user found.</div>

  return <div>
    <Link href={`/profile`} className="group font-[400] hover:bg-wooksmoke-200 flex items-center gap-[12px]">
      <div className="relative">
        {isRunning && <div className="size-4 bg-red-500 rounded-full absolute bottom-0 right-0 z-50"></div>}
        <Avatar className={`border-2 min-w-16s min-h-16s ${isRunning ? 'border-red-500' : 'border-woodsmoke-100 dark:border-woodsmoke-800'} size-10 opacity-80 group-hover:opacity-100`}>
          <AvatarFallback className='capitalize cursor-pointer bg-woodsmoke-100 dark:bg-woodsmoke-800 dark:text-white text-black text-sm'>
            <div>
              {trimString(user.display_name ? user?.display_name[0] : user.email ? user.email[0] : 'A')}
            </div>
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="hidden lg:grid gap-0 text-black dark:text-woodsmoke-300 dark:group-hover:text-white" style={{
        lineHeight: 1.32
      }}>
        <p className="text-[16px] font-[500] mb-0">{user.display_name ? user?.display_name : user.email}</p>
        {user.position && <p className="text-[14px] text-woodsmoke-500">{trimString(user.position)}</p>}
      </div>
    </Link>
  </div>
}
export default User;