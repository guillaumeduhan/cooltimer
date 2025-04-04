// "use client";
// import { useAppContext } from '@/app/context';
// import ButtonComponent from "@/components/ButtonComponent";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle
// } from "@/components/ui/dialog";
// import { Input } from '@/components/ui/input';
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { useHelpers } from '@/hooks/useHelpers';
// import supabase from '@/lib/supabase';
// import { AuthResponse } from '@supabase/supabase-js';
// import { useRouter } from "next/navigation";
// import { FC, SetStateAction, useEffect, useState } from 'react';
// import { useLocalStorage } from 'react-use';
// import { Button } from './ui/button';


// export function validateEmail(email: string): boolean {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(String(email).toLowerCase());
// }

// interface OTPProps {
//   email: string;
//   resendCode: () => Promise<void>;
//   setOpen: (t: boolean) => SetStateAction<boolean>;
//   autoValidate?: boolean;
// }

// export const OTP: FC<OTPProps> = ({ email, resendCode, setOpen }) => {
//   const [value, setValue, remove] = useLocalStorage<string>('token');
//   const [token, setToken] = useState<string>("");
//   const { loading, setLoading, error, setError } = useHelpers();
//   const router = useRouter();
//   const { user, setUser } = useAppContext();

//   const verifyCode = async (): Promise<void> => {
//     try {
//       setLoading(true);

//       const { data, error }: AuthResponse = await supabase
//         .auth
//         .verifyOtp({
//           email,
//           token,
//           type: 'email'
//         });

//       if (error) {
//         setError('Sorry an error occurred. Please try again later.');
//         return;
//       }

//       if (data.session && data.user) {
//         setValue(data.session.access_token);
//         setUser(data.user);
//         setOpen(false);
//       }
//     } catch (error) {
//       setError("An unexpected error occurred. Please try again.");
//       console.error('Verification error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setLoading(false);
//   }, [setLoading]);

//   return (
//     <div className="grid gap-4">
//       <header className="text-center">
//         <div className="flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
//             <mask id="lineMdEmailCheckTwotone0">
//               <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
//                 <path
//                   strokeDasharray="64"
//                   strokeDashoffset="64"
//                   d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
//                 >
//                   <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
//                 </path>
//                 <path
//                   strokeDasharray="24"
//                   strokeDashoffset="24"
//                   d="M3 6.5l9 5.5l9 -5.5"
//                 >
//                   <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0" />
//                 </path>
//                 <path fill="#fff" fillOpacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z">
//                   <animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3" />
//                 </path>
//                 <path fill="#000" fillOpacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z">
//                   <set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1" />
//                 </path>
//                 <path strokeDasharray="10" strokeDashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75">
//                   <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0" />
//                 </path>
//               </g>
//             </mask>
//             <rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailCheckTwotone0)" />
//           </svg>
//         </div>
//         <p className="text-woodsmoke-500">
//           We have sent a one-time use code to your email {email}.
//         </p>
//       </header>
//       <div className="mx-auto">
//         <InputOTP maxLength={6} onChange={(value: string) => setToken(value)}>
//           <InputOTPGroup>
//             <InputOTPSlot index={0} />
//             <InputOTPSlot index={1} />
//             <InputOTPSlot index={2} />
//           </InputOTPGroup>
//           <InputOTPSeparator />
//           <InputOTPGroup>
//             <InputOTPSlot index={3} />
//             <InputOTPSlot index={4} />
//             <InputOTPSlot index={5} />
//           </InputOTPGroup>
//         </InputOTP>
//       </div>
//       {error && <div className="bg-red-500/10 text-center text-sm text-red-500">{error}</div>}
//       <footer className="grid items-center gap-2">
//         <ButtonComponent
//           onClick={verifyCode}
//           loading={loading}
//           disabled={token.length < 6}
//           className="gradient--allo--bg"
//           label="Verify"
//         />
//         <ButtonComponent
//           label="Resend code"
//           loading={loading}
//           onClick={resendCode}
//         />
//       </footer>
//     </div>
//   );
// };

// interface UserState {
//   email: string;
// }

// const LoginState = ({ setOpen }: {
//   setOpen: (t: boolean) => SetStateAction<boolean>;
// }) => {
//   const { loading, setLoading, error, setError } = useHelpers();
//   const [otp, setOtp] = useState<boolean>(false);
//   const [user, setUser] = useState<UserState>({
//     email: '',
//   });

//   const signIn = async (): Promise<void> => {
//     try {
//       const { email } = user;

//       if (!validateEmail(email)) {
//         setError('Please enter a valid email.');
//         return;
//       }
//       setLoading(true);

//       const { error }: AuthResponse = await supabase
//         .auth
//         .signInWithOtp({
//           email
//         });

//       if (error) {
//         setError(error.message);
//       } else {
//         setOtp(true);
//       }
//     } catch (error) {
//       console.error('Sign in error:', error);
//       setError('An unexpected error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="grid gap-8 dark:border-woodsmoke-600 rounded-xl mx-auto max-w-[400px] w-full px-2">
//       <div className="rounded-xl py-6 shadow-lg">
//         {otp ? (
//           <OTP
//             {...{
//               email: user.email,
//               resendCode: signIn,
//               setOpen
//             }}
//           />
//         ) : (
//           <div className="grid gap-2">
//             <div>
//               <p className="text-base text-woodsmoke-400 text-center">
//                 If you are not yet registered, an account will be created for you.
//               </p>
//             </div>
//             <div className="grid gap-6">
//               <div className="grid w-full gap-4">
//                 <div className="grid gap-1">
//                   <Input
//                     type="text"
//                     className="text-center"
//                     id="email"
//                     value={user.email}
//                     onChange={(e) => setUser({ ...user, email: e.target.value })}
//                     placeholder="Enter email"
//                   />
//                 </div>
//               </div>
//               {error && <div className="bg-red-500/10 px-2 py-1 rounded text-center text-sm text-red-500">{error}</div>}
//               <ButtonComponent
//                 label="Login"
//                 loading={loading}
//                 onClick={signIn}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Login = () => {
//   const [open, setOpen]: any = useState(false);

//   return <div>
//     <Button variant="outline" onClick={() => setOpen(!open)}>Login or Signup</Button>
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="sm:max-w-[400px]">
//         <DialogHeader>
//           <DialogTitle className="text-center">Welcome</DialogTitle>
//         </DialogHeader>
//         <LoginState {...{ setOpen }} />
//       </DialogContent>
//     </Dialog>
//   </div>
// };

// export default Login;
