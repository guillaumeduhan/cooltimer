import { AppWrapper } from '@/app/context';
import Header from "@/components/Header";
import { TimerProvider } from '@/components/Timer/context';
import type { Metadata } from "next";
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cooltimer.app"),
  title: {
    default: "Cooltimer.app | Smart Time Tracking",
    template: "%s | Smart Time Tracking"
  },
  description: "Track your time effortlessly with cooltimer.app. The smart time tracking solution that helps you manage projects, boost productivity, and achieve better work-life balance.",
  applicationName: "cooltimer.app",
  authors: [{ name: "cooltimer.app Team", url: "https://www.cooltimer.app" }],
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
  icons: [
    { rel: "icon", url: "https://www.cooltimer.app/favicon.ico" },
    { rel: "apple-touch-icon", url: "https://www.cooltimer.app/apple-touch-icon.png" }
  ],
  manifest: "https://www.cooltimer.app/manifest.json",
  openGraph: {
    type: "website",
    url: "https://www.cooltimer.app",
    title: "cooltimer.app | Smart Time Tracking",
    description: "Streamline your time tracking with cooltimer.app. The intelligent solution for project management and productivity tracking.",
    siteName: "cooltimer.app",
    images: [{
      url: "https://www.cooltimer.app/og-image.jpg"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@cooltimerapp",
    creator: "@cooltimerapp",
    images: "https://www.cooltimer.app/twitter-image.jpg"
  },
  facebook: {
    appId: "12345678" // Assuming you have an actual App ID.
  },
  verification: {
    google: "1234567890", // Example token, replace with your actual token.
    yandex: "1234567890" // Example token, replace with your actual token.
  },
  appleWebApp: {
    capable: true,
    title: "cooltimer.app",
    statusBarStyle: "black-translucent"
  },
  formatDetection: {
    telephone: false
  },
  category: "Productivity",
  classification: "Business",
  other: {
    abstract: "Smart Time Tracking Solution",
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
  return <AppWrapper>
    <TimerProvider>
      <ViewTransitions>
        <html lang="en">
          <head>
            <script defer data-domain="cooltimer" src="https://plausible.io/js/script.js"></script>
          </head>
          <body className="min-h-screen">
            <Header />
            <main style={{ minHeight: 'calc(100vh - 80px)' }}>
              {children}
            </main>
            <Toaster richColors position="top-right" />
          </body>
        </html>
      </ViewTransitions>
    </TimerProvider>
  </AppWrapper>
}
