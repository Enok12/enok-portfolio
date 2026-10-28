"use client";

import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import { Lightbox } from "./lightbox";
import { SliderButtons } from "./slider-buttons";
import { useSlider } from "@/lib/use-slider";

export function CaseStudyGallery({ images }) {
  const { trackRef, updateEdges, slide, atStart, atEnd, dragHandlers, trackClassName } =
    useSlider();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={updateEdges}
        {...dragHandlers}
        className={`no-scrollbar flex snap-x gap-5 overflow-x-auto ${trackClassName}`}
      >
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Enlarge screenshot: ${image.alt}`}
            className={`group glass-panel relative h-64 shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-2xl md:h-80 ${
              image.mobile ? "aspect-9/19" : image.wide ? "aspect-2/1" : "aspect-16/10"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={image.mobile ? "180px" : "(min-width: 768px) 640px, 512px"}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/35">
              <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 text-black opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                <MagnifyingGlassPlus size={22} />
              </span>
            </span>
          </button>
        ))}
      </div>

      <SliderButtons
        slide={slide}
        atStart={atStart}
        atEnd={atEnd}
        label="screenshot"
        className="mt-6 justify-end"
      />

      <Lightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </div>
  );
}
