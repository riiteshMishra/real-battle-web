import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "success" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-fill text-brand-foreground hover:bg-brand-hover focus-visible:outline-brand",
  secondary:
    "border border-border bg-card text-foreground hover:border-dim hover:bg-elevated",
  success:
    "bg-success-fill text-success-foreground hover:bg-success-deep focus-visible:outline-success",
  ghost: "text-foreground hover:text-brand",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-[13px]",
  lg: "h-13 px-7 text-sm",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

/** The single call-to-action link used across the site. */
export default function ButtonLink({
  children,
  variant = "primary",
  size = "lg",
  className,
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300",
        "hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
      {icon}
    </Link>
  );
}
