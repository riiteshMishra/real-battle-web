import {
  BookOpen,
  Heart,
  LucideIcon,
  CircleHelp,
  Mail,
  Headphones,
  Shield,
  Cookie,
} from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaFileContract,
  FaExclamationTriangle,
} from "react-icons/fa";

import { IconType } from "react-icons";
import { TbTournament } from "react-icons/tb";
import { MdFeaturedPlayList, MdHowToVote } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: number;
  text: string;
  href: string;
  icon?: LucideIcon | IconType;
}

// FOOTER DATA
export const footerData: FooterSection[] = [
  {
    title: "Product",
    links: [
      {
        id: 1,
        text: "Features",
        href: "#features",
        icon: MdFeaturedPlayList,
      },
      {
        id: 2,
        text: "Pricing",
        href: "/pricing",
        icon: GiPriceTag,
      },
      {
        id: 3,
        text: "How It Works",
        href: "/how-it-works",
        icon: MdHowToVote,
      },
      {
        id: 4,
        text: "Leaderboard",
        href: "/leaderboard",
        icon: TbTournament,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        id: 5,
        text: "Documentation",
        href: "/docs",
        icon: BookOpen,
      },
      {
        id: 6,
        text: "FAQ",
        href: "/faq",
        icon: CircleHelp,
      },
      {
        id: 7,
        text: "Contact Us",
        href: "/contact-us",
        icon: Mail,
      },
      {
        id: 8,
        text: "Support Tickets",
        href: "/support",
        icon: Headphones,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        id: 9,
        text: "Privacy Policy",
        href: "/privacy-policy",
        icon: Shield,
      },
      {
        id: 10,
        text: "Terms of Service",
        href: "/terms",
        icon: FaFileContract,
      },
      {
        id: 11,
        text: "Cookie Policy",
        href: "/cookies",
        icon: Cookie,
      },
      {
        id: 12,
        text: "Disclaimer",
        href: "/disclaimer",
        icon: FaExclamationTriangle,
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        id: 13,
        text: "GitHub",
        href: "https://github.com/riiteshMishra",
        icon: FaGithub,
      },
      {
        id: 14,
        text: "Twitter",
        href: "https://twitter.com",
        icon: FaTwitter,
      },
      {
        id: 15,
        text: "LinkedIn",
        href: "https://linkedin.com",
        icon: FaLinkedin,
      },
      {
        id: 16,
        text: "Discord",
        href: "https://discord.com",
        icon: FaDiscord,
      },
    ],
  },
];

export const footerBottom = {
  copyright: "© 2026 Real Battle. All rights reserved.",
  madeWith: "Made with",
  madeWithIcon: Heart,
  by: "",
};
