"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const buttonClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/60 backdrop-blur transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-35";

export function SliderButtons({ slide, atStart, atEnd, label, className = "" }) {
  // Everything fits on screen, so there is nothing to slide
  if (atStart && atEnd) return null;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        aria-label={`Previous ${label}`}
        onClick={() => slide(-1)}
        disabled={atStart}
        className={buttonClass}
      >
        <CaretLeft size={18} />
      </button>
      <button
        type="button"
        aria-label={`Next ${label}`}
        onClick={() => slide(1)}
        disabled={atEnd}
        className={buttonClass}
      >
        <CaretRight size={18} />
      </button>
    </div>
  );
}
