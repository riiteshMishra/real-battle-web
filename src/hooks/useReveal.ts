"use client";

import { useEffect, useRef } from "react";

/**
 * One-shot scroll reveal, backed by a single shared IntersectionObserver.
 *
 * A module-level observer avoids attaching one observer (and scroll/resize
 * listeners) per Reveal instance, which was the main source of main-thread
 * work on the homepage. Reduced-motion users get the visible state immediately.
 */
type RevealCallback = () => void;

const callbacks = new Map<Element, RevealCallback>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const cb = callbacks.get(entry.target);
        if (cb) cb();
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  return sharedObserver;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return;
    }

    const observer = getObserver();
    if (!observer) return;

    const reveal = () => {
      node.classList.add("is-visible");
      observer.unobserve(node);
      callbacks.delete(node);
    };

    callbacks.set(node, reveal);

    // Reveal immediately if already in view.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      reveal();
      return;
    }

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      callbacks.delete(node);
    };
  }, []);

  return ref;
}