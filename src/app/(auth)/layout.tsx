import { AppWrapper } from '@/app/context';
import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppWrapper>
    <ViewTransitions>
      {children}
    </ViewTransitions>
  </AppWrapper>;
}