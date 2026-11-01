import type { LucideIcon } from "lucide-react";

export interface OverviewItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface OverviewProps {
  title: string;
  description: string;
  items: readonly OverviewItem[];
}
