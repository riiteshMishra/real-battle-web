import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "@/src/styles/globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import Navbar from "@/src/components/layout/Navbar";
import QueryProvider from "@/src/providers/QueryProvider";
import { siteConfig } from "@/src/config/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Real Battle — India's Competitive Free Fire Arena",
    template: "%s | Real Battle",
  },

  description: siteConfig.description,

  keywords: [
    "Real Battle",
    "Free Fire tournaments",
    "Free Fire MAX tournaments",
    "Indian esports",
    "solo tournament",
    "squad tournament",
    "clash squad",
    "gaming tournaments India",
    "esports arena",
  ],

  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "gaming",

  alternates: {
    canonical: "/",
  },

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
    url: "/",
    siteName: siteConfig.name,
    title: "Real Battle — Game Khelo. Battle Jeeto.",
    description:
      "India's competitive gaming arena for Free Fire. Join solo, squad and Clash Squad tournaments, get room details in the app, and track verified results.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Battle — Game Khelo. Battle Jeeto.",
    description:
      "Competitive Free Fire tournaments for Indian players. Solo, squad and Clash Squad battles in one arena.",
  },

  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      logo: `${siteConfig.url}/icon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={cn("h-full", spaceGrotesk.variable, dmSans.variable)}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <a
          href="#main-content"
          className="bg-brand-fill text-brand-foreground fixed top-3 left-3 z-200 -translate-y-24 rounded-lg px-4 py-2 text-sm font-semibold transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>

        <Toaster position="top-right" theme="dark" richColors />

        <QueryProvider>
          <Navbar />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
