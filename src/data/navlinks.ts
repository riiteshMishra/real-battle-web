import { CircleHelp, LucideIcon, Mail, Sparkle } from "lucide-react";
import { Home, Trophy } from "lucide-react";

// INTERFACE
export interface NavLink {
  id: number;
  text: string;
  path: string;
  icon: LucideIcon;
  isProtected?: boolean;
  badge?: string;
  roles?: ("admin" | "user")[];
}

// NAVLINKS
export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/#home",
    icon: Home,
  },
  {
    id: 2,
    title: "Features",
    href: "/#features",
    icon: Sparkle,
  },
  {
    id: 3,
    title: "How It Works",
    href: "/#how-it-works",
    icon: Trophy,
  },
  {
    id: 4,
    title: "FAQ",
    href: "/#faq",
    icon: CircleHelp,
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact-us",
    icon: Mail,
  },
];
