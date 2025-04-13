import { AppWrapper } from '@/app/context';
import { TimerProvider } from '@/components/Timer/context';
import type { Metadata } from "next";
import { Toaster } from 'sonner';
import "./globals.scss";
import "../../public/fonts/stylesheet.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cooltimer.app"),
  title: {
    default: "Timer.cool | Time Tracking, Made Beautiful",
    template: "%s | Timer.cool"
  },
  description: "Track your work, organize by tags, and get smart analytics. Stay focused with a simple timer that shows where your time really goes.",
  applicationName: "timer.cool",
  authors: [{ name: "Timer.cool Team", url: "https://www.cooltimer.app" }],
  generator: "Next.js",
  keywords: [
    "time tracking",
    "project management",
    "time management",
    "productivity tool",
    "work hours tracker",
    "time sheet",
    "project time tracking",
    "freelance time tracking",
    "employee time tracking",
    "smart time analytics",
    "simple time tracker",
    "tag-based tracking"
  ],
  referrer: "origin",
  creator: "Guillaume Duhan",
  publisher: "timer.cool",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.cooltimer.app",
  },
  openGraph: {
    type: "website",
    url: "https://www.cooltimer.app",
    title: "Timer.cool | Time Tracking, Made Beautiful",
    description: "Track your work, organize by tags, and get smart analytics. Stay focused with a simple timer that shows where your time really goes.",
    siteName: "timer.cool",
    images: [{
      url: "https://www.cooltimer.app/twitter-image.jpg"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@cooltimerapp",
    creator: "@cooltimerapp",
    title: "Timer.cool | Time Tracking, Made Beautiful",
    description: "Track your work, organize by tags, and get smart analytics. Stay focused with a simple timer that shows where your time really goes.",
    images: "https://www.cooltimer.app/twitter-image.jpg"
  },
  formatDetection: {
    telephone: false
  },
  category: "Productivity",
  classification: "Business",
  other: {
    abstract: "Time Tracking, Made Beautiful",
    archives: ["https://www.cooltimer.app/archives"],
    assets: ["https://www.cooltimer.app/"],
    bookmarks: ["https://www.cooltimer.app/"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className="dark">
    <head>
      <script defer data-domain="cooltimer.app" src="https://plausible.io/js/script.js"></script>
    </head>
    <body className="min-h-screen">
      <TimerProvider>
        <AppWrapper>
          {children}
          <Toaster richColors position="top-right" />
        </AppWrapper>
      </TimerProvider>
    </body>
  </html>
}
