'use client';
import { useAppContext } from '@/app/context';
import ButtonComponent from '@/components/ButtonComponent';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const { user, saveUser } = useAppContext();
  const [data, setData] = useState<any>({
    email_notifications: false
  });

  useEffect(() => {
    if (user) {
      setData(user)
    }
  }, [user]);

  return <div className="grid gap-6">
    <Card className="card">
      <CardHeader>
        <header className="flex items-center justify-between">
          <div className="grid gap-1">
            <CardTitle>Email notifications</CardTitle>
            <CardDescription>Turn this on if you want to receive e-mail notifications.</CardDescription>
          </div>
          <Switch
            checked={data?.email_notifications}
            name="email_notifications"
            id="email_notifications"
            onCheckedChange={(b: boolean) => saveUser({
              email_notifications: b
            })}
          />
        </header>
      </CardHeader>
    </Card>
    <Card className="card border-red-300 dark:border-red-900 bg-red-100 dark:bg-red-950/20">
      <CardHeader>
        <CardTitle>Danger zone</CardTitle>
        <CardDescription>Permanently remove your profile and data from the platform. This action is not reversible.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete my profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete my profile</DialogTitle>
              <DialogDescription>
                Please confirm that you want to delete your profile.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <ButtonComponent onClick={() => { }} label="Delete" />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  </div>
}