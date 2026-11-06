"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-60 h-1 bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-brand transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}