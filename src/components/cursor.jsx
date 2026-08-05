"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

const QUERY = "(pointer: fine) and (prefers-reduced-motion: no-preference)";

function subscribe(callback) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function useFinePointer() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
}

export function Cursor() {
  const enabled = useFinePointer();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };
    const over = (e) => {
      setHovering(Boolean(e.target.closest("[data-cursor-hover]")));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <m.div
        animate={{
          width: hovering ? 56 : 20,
          height: hovering ? 56 : 20,
          x: hovering ? -18 : 0,
          y: hovering ? -18 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="rounded-full bg-white"
      />
    </m.div>
  );
}
