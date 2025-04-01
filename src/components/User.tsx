'use client';
import useAppContext from "@/app/context";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useHelpers } from "@/hooks/useHelpers";
import { Link } from 'next-view-transitions';
import { useTimer } from "./Timer/context";

// const User: React.FC = () => {
//   const router = useRouter();
//   const [open, setOpen] = useState<boolean>(false);

//   const { user } = useAppContext();
//   const { trimString } = useHelpers();

//   if (user) return (
//     <div className="group font-[400] hover:bg-wooksmoke-200 flex items-center gap-2 transition duration-300">
//       <Link href={`/profile`} >
//         <Avatar className="size-8 opacity-80 group-hover:opacity-100 transition duration-300">
//           <AvatarFallback className='capitalize cursor-pointer bg-woodsmoke-100 dark:bg-woodsmoke-800 dark:text-white text-black text-sm'>
//             {trimString(user.user_metadata.display_name ? user.user_metadata?.display_name[0] : user.email ? user.email[0] : 'A')}
//           </AvatarFallback>
//         </Avatar>
//         <div className="grid text-black dark:text-woodsmoke-300 dark:group-hover:text-white transition duration-300">
//           <p className="text-[14px] font-[500]">{user.user_metadata.display_name ? user.user_metadata?.display_name : user.email}</p>
//           {user.user_metadata.position && <p className="text-xs text-woodsmoke-500">{trimString(user.user_metadata.position)}</p>}
//         </div>
//       </Link>
//     </div >
//   );

//   return (
//     <div className="flex justify-center items-center">
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <ButtonComponent label="Login" onClick={() => setOpen(true)} />
//         </DialogTrigger>
//         <DialogContent>
//           <Login />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default User;


const User = () => {
  const { user } = useAppContext();
  const { isRunning } = useTimer();
  const { trimString } = useHelpers();
  if (!user) return <div>No user found.</div>
  return <div>
    <div className="group font-[400] hover:bg-wooksmoke-200 flex items-center gap-2">
      <Link href={`/profile`} >
        <div className="relative">
          {isRunning && <div className="size-3 bg-red-500 rounded-full absolute bottom-0 right-0 z-50"></div>}
          <Avatar className={`border-2 ${isRunning ? 'border-red-500' : 'border-woodsmoke-100 dark:border-woodsmoke-800'} size-10 opacity-80 group-hover:opacity-100`}>
            <AvatarFallback className='capitalize cursor-pointer bg-woodsmoke-100 dark:bg-woodsmoke-800 dark:text-white text-black text-sm'>
              <div>
                {trimString(user.user_metadata.display_name ? user.user_metadata?.display_name[0] : user.email ? user.email[0] : 'A')}
              </div>
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="grid text-black dark:text-woodsmoke-300 dark:group-hover:text-white">
          <p className="text-[14px] font-[500]">{user.user_metadata.display_name ? user.user_metadata?.display_name : user.email}</p>
          {user.user_metadata.position && <p className="text-xs text-woodsmoke-500">{trimString(user.user_metadata.position)}</p>}
        </div>
      </Link>
    </div >
  </div>
}
export default User;