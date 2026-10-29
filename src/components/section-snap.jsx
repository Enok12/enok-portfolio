"use client";

import { useEffect } from "react";

// One wheel/trackpad gesture moves exactly one section on the home page.
// CSS snapping (globals.css) handles keyboard, scrollbar and links, but on
// its own a small wheel scroll snaps back to the section it started from.
// Only runs on laptop-sized screens, where every section fits the screen.
const DESKTOP = "(min-width: 1024px)";
// Trackpads send many tiny deltas per swipe; wait for this much intent
const THRESHOLD = 40;
// A gesture is over once wheel events stop for this long (absorbs the
// trailing momentum events trackpads keep sending after a swipe)
const QUIET_MS = 180;

export function SectionSnap() {
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP);
    let accumulated = 0;
    let locked = false;
    let quietTimer;

    // Scroll positions to stop at: each section's top, then the page end
    // (so the footer stays reachable)
    const stops = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const tops = [...document.querySelectorAll(".section-screen")].map((s) =>
        Math.min(s.getBoundingClientRect().top + window.scrollY, max)
      );
      return [...new Set([...tops, max])].sort((a, b) => a - b);
    };

    const onWheel = (e) => {
      if (!desktop.matches || e.ctrlKey) return; // ctrl+wheel is zoom
      if (document.documentElement.style.overflow === "hidden") return; // lightbox open
      // Leave sideways scrolling to the horizontal sliders
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();
      clearTimeout(quietTimer);
      quietTimer = setTimeout(() => {
        locked = false;
        accumulated = 0;
      }, QUIET_MS);
      if (locked) return;

      accumulated += e.deltaY;
      if (Math.abs(accumulated) < THRESHOLD) return;

      const dir = Math.sign(accumulated);
      const y = window.scrollY;
      const all = stops();
      const target =
        dir > 0
          ? all.find((s) => s > y + 2)
          : [...all].reverse().find((s) => s < y - 2);
      locked = true;
      accumulated = 0;
      if (target !== undefined) window.scrollTo({ top: target, behavior: "smooth" });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      clearTimeout(quietTimer);
    };
  }, []);

  return null;
}
