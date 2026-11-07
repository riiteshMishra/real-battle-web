import {
  FiAward,
  FiDownload,
  FiHelpCircle,
  FiHome,
  FiInfo,
  FiMail,
  FiPlay,
  FiShield,
} from "react-icons/fi";
import { GiTrophyCup } from "react-icons/gi";

import type { MobileNavLink, NavMeta } from "./mobile-nav.types";

export const mobileNavLinks: MobileNavLink[] = [
  { label: "Tournaments", href: "/tournaments" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Rewards", href: "/#rewards" },
  { label: "Fair Play", href: "/#fair-play" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
  { label: "Download App", href: "/download" },
];

export const mobileNavMeta: Readonly<Record<string, NavMeta>> = {
  "/": { icon: FiHome },
  "/tournaments": { icon: GiTrophyCup, description: "Solo, squad & 4v4" },
  "/faq": { icon: FiHelpCircle, description: "Quick answers" },
  "/#how-it-works": { icon: FiPlay, description: "From registration to result" },
  "/#rewards": { icon: FiAward, description: "Prize pools & payouts" },
  "/#fair-play": { icon: FiShield, description: "Rules & enforcement" },
  "/about": { icon: FiInfo, description: "Who we are" },
  "/contact-us": { icon: FiMail, description: "Support & disputes" },
  "/download": { icon: FiDownload, description: "Get the Android app" },
};

export const primaryTabs = ["/", "/tournaments", "/faq"] as const;

export const moreRoutes = ["/about", "/contact-us", "/download"] as const;