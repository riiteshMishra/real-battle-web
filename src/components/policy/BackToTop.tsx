"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 480);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <ArrowUp aria-hidden="true" className="size-5" />
    </button>
  );
}