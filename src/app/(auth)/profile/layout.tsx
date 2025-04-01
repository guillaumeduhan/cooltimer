'use client';
import { useHelpers } from '@/hooks/useHelpers';
import { Link, ViewTransitions } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const PROFILE_OPTIONS = [
  {
    title: "General",
    route: "/profile"
  },
  {
    title: "Invoices",
    route: "/profile/invoices"
  },
  {
    title: "Preferences",
    route: "/profile/settings"
  },
];

export default function ProfileLayout({ children }: any) {
  const { selected, setSelected } = useHelpers();
  const pathname = usePathname();

  useEffect(() => setSelected(PROFILE_OPTIONS[0]), []);

  return <main>
    <div className="max-w-[650px] mx-auto">
      <div className="grid gap-8">
        <div className="flex items-center gap-3">
          {PROFILE_OPTIONS.map((item: any, key: number) => <Link href={item.route} key={key} className={`item ${pathname === item.route ? 'selected' : ''}`}>
            {item.title}
          </Link>)}
        </div>
        <div className="">
          <ViewTransitions>
            {children}
          </ViewTransitions>
        </div>
      </div>
    </div>
  </main>;
}