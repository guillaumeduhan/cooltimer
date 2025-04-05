import { AppWrapper } from '@/app/context';
import { TimerProvider } from '@/components/Timer/context';
import type { Metadata } from "next";
import { Toaster } from 'sonner';
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cooltimer.app"),
  title: {
    default: "Cooltimer.app | Free Smart Tracking App",
    template: "%s | Free Smart Tracking App"
  },
  description: "Track your time effortlessly with cooltimer.app. The Free Smart Tracking App solution that helps you manage projects, boost productivity, and achieve better work-life balance.",
  applicationName: "cooltimer.app",
  authors: [{ name: "Cooltimer.app Team", url: "https://www.cooltimer.app" }],
  generator: "Next.js",
  keywords: [
    "time tracking",
    "project management",
    "time management",
    "productivity tool",
    "work hours tracker",
    "time sheet",
    "project time tracking",
    "employee time tracking",
    "freelance time tracking",
    "time management app",
    "work time tracker",
    "business time tracking",
  ],
  referrer: "origin",
  creator: "Guillaume Duhan",
  publisher: "cooltimer.app",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.cooltimer.app",
  },
  openGraph: {
    type: "website",
    url: "https://www.cooltimer.app",
    title: "Cooltimer.app | Free Smart Tracking App",
    description: "Streamline your time tracking with cooltimer.app. The intelligent solution for project management and productivity tracking.",
    siteName: "cooltimer.app",
    images: [{
      url: "https://www.cooltimer.app/twitter-image.jpg"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@cooltimerapp",
    creator: "@cooltimerapp",
    images: "https://www.cooltimer.app/twitter-image.jpg"
  },
  formatDetection: {
    telephone: false
  },
  category: "Productivity",
  classification: "Business",
  other: {
    abstract: "Free Smart Tracking App Solution",
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
