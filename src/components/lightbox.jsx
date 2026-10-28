"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { useMounted } from "@/lib/use-mounted";

// Hidden on phones, where swiping is the natural way to move between images
const navButtonClass =
  "absolute top-1/2 z-10 hidden h-12 w-12 sm:flex -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition-colors hover:border-white/40 hover:bg-black/70";

// Full-screen image viewer. `index` is the open image, or null when closed.
export function Lightbox({ images, index, onClose, onChange }) {
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);
  const closeRef = useRef(null);
  const open = index !== null;
  const count = images.length;

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      onChange((index + dir + count) % count);
    },
    [index, count, onChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, onClose]);

  // Lock page scroll and move focus into the dialog while it's open
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = "";
      previous?.focus?.();
    };
  }, [open]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const mounted = useMounted();
  const image = open ? images[index] : null;

  if (!mounted) return null;

  // Portal to <body> so transformed ancestors (scroll reveals) can't trap
  // the fixed overlay inside their own box
  return createPortal(
    <AnimatePresence>
      {open && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-100 flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex items-center justify-between px-4 py-4 text-sm text-white/70 sm:px-6">
            <span className="font-mono">
              {index + 1} / {count}
            </span>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close viewer"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <m.div
                key={image.src}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 px-4 pb-4 sm:px-20"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  quality={90}
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </m.div>
            </AnimatePresence>

            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className={`${navButtonClass} left-3 sm:left-6`}
                >
                  <CaretLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className={`${navButtonClass} right-3 sm:right-6`}
                >
                  <CaretRight size={20} />
                </button>
              </>
            )}
          </div>

          <div className="px-6 pb-6 text-center text-sm text-white/70">
            <p>{image.alt}</p>
            {count > 1 && (
              <p className="mt-1 text-xs text-white/40 sm:hidden">Swipe to browse</p>
            )}
          </div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
