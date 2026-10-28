"use client";

import Image from "next/image";
import { SliderButtons } from "./slider-buttons";
import { useSlider } from "@/lib/use-slider";

export function CaseStudyGallery({ images }) {
  const { trackRef, updateEdges, slide, atStart, atEnd } = useSlider(20);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
      >
        {images.map((image) => (
          <figure
            key={image.src}
            className={`glass-panel relative h-64 shrink-0 snap-start overflow-hidden rounded-2xl md:h-80 ${
              image.mobile ? "aspect-9/19" : image.wide ? "aspect-2/1" : "aspect-16/10"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={image.mobile ? "180px" : "(min-width: 768px) 640px, 512px"}
              className="object-cover object-top"
            />
          </figure>
        ))}
      </div>

      <SliderButtons
        slide={slide}
        atStart={atStart}
        atEnd={atEnd}
        label="screenshot"
        className="mt-6 justify-end"
      />
    </div>
  );
}
