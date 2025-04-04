'use client';
import { useAppContext } from '@/app/context';
import ButtonComponent from '@/components/ButtonComponent';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { useHelpers } from '@/hooks/useHelpers';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function ProfilePage() {
  const { user, setUser, saveUser, logout, clearLocalStorage } = useAppContext();
  const { loading, setLoading } = useHelpers();
  const [data, setData] = useState<any>({
    position: "",
    display_name: "",
    email: ""
  });
  const [confirm, setConfirm] = useState<string>('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSaveUser = async () => {
    try {
      setLoading(true)
      await saveUser(data);
    } catch (error) {
      toast.error("Sorry, an error occured.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setData({
      position: "",
      display_name: ""
    })
  }, [])

  useEffect(() => {
    if (user) {
      setData(user)
    }
  }, [user]);

  if (!user) return <div>Loading...</div>

  return <div className="grid gap-6 mb-12">
    <Card className="card">
      <CardHeader>
        <CardTitle>Display name</CardTitle>
        <CardDescription>Please enter your full name, or a display name you are comfortable with.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1 group transition duration-300">
        <Input {...{
          type: "text",
          name: "display_name",
          value: data?.display_name || '',
          onChange: handleChange
        }} />
        <div className="h-1">
          <p className="hidden transition duration-300 cursor-pointer group-hover:flex text-xs text-woodsmoke-900 mb-0">{user.id}</p>
        </div>
      </CardContent>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          label: "Save",
          onClick: () => onSaveUser(),
          setUser
        }} />
      </CardFooter>
    </Card>
    <Card className="card">
      <CardHeader>
        <CardTitle>E-mail</CardTitle>
        <CardDescription>Save your email for later.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1 group transition duration-300">
        <Input {...{
          type: "email",
          name: "email",
          value: data?.email || '',
          onChange: handleChange
        }} />
      </CardContent>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          label: "Save",
          onClick: () => onSaveUser(),
          setUser
        }} />
      </CardFooter>
    </Card>
    <Card className="card">
      <CardHeader>
        <CardTitle>Position</CardTitle>
        <CardDescription>It will be displayed under your displayed name.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input {...{
          type: "text",
          name: "position",
          value: data?.position || '',
          onChange: handleChange
        }} />
      </CardContent>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          label: "Save",
          onClick: () => onSaveUser(),
          setUser
        }} />
      </CardFooter>
    </Card>
    <Card className="border-yellow-400 bg-yellow-50 dark:border-yellow-500 dark:bg-yellow-950/50">
      <CardHeader>
        <CardTitle>Clear Data</CardTitle>
        <CardDescription>This will permanently erase all cached data, including your temporary user. This action cannot be undone.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-[600] text-black dark:text-white mb-2">Type here "Confirm" to unlock action</p>
        <Input {...{
          placeholder: "Confirm",
          type: "text",
          onChange: (e: any) => setConfirm(e.target.value)
        }} />
      </CardContent>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          disabled: confirm !== 'Confirm',
          className: "bg-yellow-400 dark:bg-yellow-500",
          label: "Clear now",
          onClick: () => clearLocalStorage()
        }} />
      </CardFooter>
    </Card>
    {/* <Card className="card">
      <CardHeader>
        <CardTitle>Logout</CardTitle>
        <CardDescription>If you want to logout.</CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          label: "Log me out",
          onClick: () => logout(),
          setUser
        }} />
      </CardFooter>
    </Card> */}
  </div>
}