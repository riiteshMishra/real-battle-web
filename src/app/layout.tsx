import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Roboto,
  Geist,
  Stack_Sans_Headline,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/navbar/Navbar";
import { Toaster } from "sonner";
import RootProviders from "../providers/Index";
import { cn } from "@/lib/utils";
import MobileBottomNav from "../components/common/navbar/MobileBottomNav";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const headline = Stack_Sans_Headline({
  variable: "--font-headline",
  subsets: ["latin"],
  adjustFontFallback: false,
});

// META - DATA
export const metadata: Metadata = {
  metadataBase: new URL("https://realbattle.in"),

  title: {
    default: "Real Battle — Compete, Play & Win",
    template: "%s | Real Battle",
  },

  description:
    "Join Real Battle tournaments, compete with players, play your favorite games, and win exciting rewards.",

  keywords: [
    "Real Battle",
    "gaming tournaments",
    "online gaming tournaments",
    "esports tournaments",
    "Free Fire tournaments",
    "gaming competition",
    "win rewards",
  ],

  applicationName: "Real Battle",

  authors: [
    {
      name: "Real Battle",
    },
  ],

  creator: "Real Battle",
  publisher: "Real Battle",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Real Battle — Compete, Play & Win",
    description:
      "Join tournaments, compete with players and win exciting rewards with Real Battle.",
    siteName: "Real Battle",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Battle — Compete, Play & Win",
    description:
      "Join tournaments, compete and win exciting rewards with Real Battle.",
  },
};

// ROOT - LAYOUT
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        roboto.variable,
        headline.variable,
        bricolage.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <Toaster position="top-right" />
        <RootProviders>
          <Navbar />
          {children}
          <MobileBottomNav />
        </RootProviders>
      </body>
    </html>
  );
}
