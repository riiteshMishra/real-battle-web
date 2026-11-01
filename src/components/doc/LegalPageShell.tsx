import type { ReactNode } from "react";
import Footer from "@/src/components/layout/Footer";

interface LegalPageShellProps {
  hero: ReactNode;
  children: ReactNode;
}

/** Shared shell for the five legal/document routes. */
export default function LegalPageShell({ hero, children }: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      {hero}

      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">{children}</main>

      <Footer />
    </div>
  );
}
