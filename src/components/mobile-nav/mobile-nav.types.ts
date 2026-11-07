import type { ComponentType } from "react";

export interface MobileNavLink {
  label: string;
  href: string;
}

export interface NavMeta {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  description?: string;
}