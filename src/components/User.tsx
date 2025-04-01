'use client';
import { useAppContext } from '@/app/context';
import ButtonComponent from '@/components/ButtonComponent';
import Login from '@/components/Login';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useHelpers } from '@/hooks/useHelpers';
import { Link } from 'next-view-transitions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const User: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const { user } = useAppContext();
  const { trimString } = useHelpers();

  if (user) return (
    <div className="group font-[400] hover:bg-wooksmoke-200 flex items-center gap-2 transition duration-300">
      <Link href={`/profile`} >
        <Avatar className="size-8 opacity-80 group-hover:opacity-100 transition duration-300">
          <AvatarFallback className='capitalize cursor-pointer bg-woodsmoke-100 dark:bg-woodsmoke-800 dark:text-white text-black text-sm'>
            {trimString(user.user_metadata.display_name ? user.user_metadata?.display_name[0] : user.email ? user.email[0] : 'A')}
          </AvatarFallback>
        </Avatar>
        <div className="grid text-black dark:text-woodsmoke-300 dark:group-hover:text-white transition duration-300">
          <p className="text-[14px] font-[500]">{user.user_metadata.display_name ? user.user_metadata?.display_name : user.email}</p>
          {user.user_metadata.position && <p className="text-xs text-woodsmoke-500">{trimString(user.user_metadata.position)}</p>}
        </div>
      </Link>
    </div >
  );

  return (
    <div className="flex justify-center items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <ButtonComponent label="Login" onClick={() => setOpen(true)} />
        </DialogTrigger>
        <DialogContent>
          <Login />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default User;
