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

export default function ProfilePage() {
  const { user, setUser, saveUser, logout } = useAppContext();
  const { loading, setLoading } = useHelpers();
  const [data, setData] = useState<any>({
    position: "",
    username: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setData({
      display_name: "",
      username: ""
    })
  }, [])

  useEffect(() => {
    if (user) {
      const { user_metadata } = user;
      setData(user_metadata)
    }
  }, [user]);

  if (!user) return <div>Loading...</div>

  return <div className="grid gap-6">
    <Card className="card">
      <CardHeader>
        <CardTitle>Display name</CardTitle>
        <CardDescription>Please enter your full name, or a display name you are comfortable with.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input {...{
          type: "text",
          name: "display_name",
          value: data?.display_name || '',
          onChange: handleChange
        }} />
      </CardContent>
      <CardFooter>
        <ButtonComponent {...{
          loading,
          label: "Save",
          onClick: () => saveUser({ metadata: data }),
          setUser
        }} />
      </CardFooter>
    </Card>
    <Card className="card">
      <CardHeader>
        <CardTitle>Position</CardTitle>
        <CardDescription>Please enter a position you are comfortable with.</CardDescription>
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
          onClick: () => saveUser({ metadata: data }),
          setUser
        }} />
      </CardFooter>
    </Card>
    <Card className="card">
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
    </Card>
  </div>
}