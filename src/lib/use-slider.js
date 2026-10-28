"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Horizontal scroll-snap slider state: tracks whether the track is at
// either end and scrolls by one item (item width + gap) per step.
export function useSlider(gap = 24) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const slide = (dir) => {
    const el = trackRef.current;
    const item = el?.firstElementChild;
    if (!item) return;
    el.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: "smooth" });
  };

  return {
    trackRef,
    updateEdges,
    slide,
    atStart,
    atEnd,
  };
}
