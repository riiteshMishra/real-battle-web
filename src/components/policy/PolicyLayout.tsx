import type { ReactNode } from "react";
import Footer from "@/src/components/layout/Footer";
import PolicySidebar from "./PolicySidebar";
import PolicyMobileNavigation from "./PolicyMobileNavigation";
import BackToTop from "./BackToTop";
import ReadingProgress from "./ReadingProgress";

interface PolicyTocItem {
  id: string;
  title: string;
}

interface PolicyLayoutProps {
  hero: ReactNode;
  tocItems: readonly PolicyTocItem[];
  tocTitle?: string;
  children: ReactNode;
}

export default function PolicyLayout({
  hero,
  tocItems,
  tocTitle = "On this page",
  children,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {hero}

      <ReadingProgress />

      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <PolicySidebar items={tocItems} title={tocTitle} />
            </div>
          </aside>

          <main id="main-content" className="min-w-0">
            <PolicyMobileNavigation items={tocItems} title={tocTitle} />
            {children}
          </main>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </div>
  );
}