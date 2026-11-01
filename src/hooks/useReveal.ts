"use client";

import { useEffect, useRef } from "react";

/**
 * One-shot scroll reveal.
 *
 * IntersectionObserver does the heavy lifting, but browser throttling and
 * occluded windows can delay its first callback. A cheap rect check on mount
 * and a passive scroll fallback guarantee content is never left invisible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return;
    }

    let frame = 0;

    const reveal = () => {
      node.classList.add("is-visible");
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const isInView = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (isInView()) reveal();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) reveal();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    if (isInView()) {
      reveal();
      return;
    }

    observer.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
