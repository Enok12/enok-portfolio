"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Horizontal scroll-snap slider state: tracks whether the track is at
// either end, scrolls one item per step, and lets mouse users drag the
// track like a touch swipe.
export function useSlider() {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const glideRef = useRef(0);
  const suppressClickRef = useRef(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);

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

  // Scroll positions where each item starts. Measured per item, because
  // items can differ in width (e.g. phone shots next to desktop shots).
  const stops = () => {
    const el = trackRef.current;
    const items = [...(el?.children ?? [])];
    if (!items.length) return [];
    const max = el.scrollWidth - el.clientWidth;
    const first = items[0].offsetLeft;
    return items.map((item) => Math.min(item.offsetLeft - first, max));
  };

  const nearestStop = (left) =>
    stops().reduce((best, s) => (Math.abs(s - left) < Math.abs(best - left) ? s : best), 0);

  const slide = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const all = [...new Set(stops())];
    const current = all.indexOf(nearestStop(el.scrollLeft));
    const target = all[Math.max(0, Math.min(all.length - 1, current + dir))];
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  // Eased glide to `target`, then hand control back to CSS snapping
  const glideTo = (el, target) => {
    cancelAnimationFrame(glideRef.current);
    const from = el.scrollLeft;
    const distance = target - from;
    const duration = Math.min(650, 300 + Math.abs(distance) * 0.4);
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      el.scrollLeft = from + distance * (1 - Math.pow(1 - t, 3)); // easeOutCubic
      if (t < 1) {
        glideRef.current = requestAnimationFrame(step);
      } else {
        el.style.scrollSnapType = "";
        el.style.scrollBehavior = "";
        setDragging(false);
      }
    };
    glideRef.current = requestAnimationFrame(step);
  };

  // Touch already swipes natively, so dragging is only wired for mice.
  // Inline styles (which beat the snap/smooth classes) pause snapping while
  // the track follows the cursor; release glides on with the drag's momentum.
  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    cancelAnimationFrame(glideRef.current);
    dragRef.current = {
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false,
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
    };

    const onMove = (ev) => {
      const drag = dragRef.current;
      const dx = ev.clientX - drag.startX;
      if (!drag.moved && Math.abs(dx) < 6) return;
      if (!drag.moved) {
        drag.moved = true;
        el.style.scrollSnapType = "none";
        el.style.scrollBehavior = "auto";
        setDragging(true);
      }
      el.scrollLeft = drag.startLeft - dx;

      // Smoothed pointer velocity in px/ms, for the fling on release
      const now = performance.now();
      const dt = Math.max(1, now - drag.lastT);
      drag.velocity = 0.8 * ((ev.clientX - drag.lastX) / dt) + 0.2 * drag.velocity;
      drag.lastX = ev.clientX;
      drag.lastT = now;
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      const drag = dragRef.current;
      dragRef.current = null;
      if (!drag?.moved) return;

      // The click that ends a drag shouldn't open a card or image
      suppressClickRef.current = true;
      setTimeout(() => (suppressClickRef.current = false), 0);

      // A paused drag settles where it is; a flick carries on
      const stale = performance.now() - drag.lastT > 80;
      const projected = el.scrollLeft - (stale ? 0 : drag.velocity * 220);
      glideTo(el, nearestStop(projected));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const dragHandlers = {
    onPointerDown,
    onClickCapture: (e) => {
      if (suppressClickRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    // Stop the browser's native image/link drag ghost from hijacking the drag
    onDragStart: (e) => e.preventDefault(),
  };

  const trackClassName = `snap-mandatory scroll-smooth ${
    dragging ? "cursor-grabbing select-none" : "cursor-grab"
  }`;

  return {
    trackRef,
    updateEdges,
    slide,
    atStart,
    atEnd,
    dragHandlers,
    trackClassName,
  };
}
