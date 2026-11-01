import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
}

/** Shared page gutter. One rule set, used by every section. */
export default function Container({
  className,
  children,
}: PropsWithChildren<ContainerProps>) {
  return <div className={cn("container-page", className)}>{children}</div>;
}
