import Image from "next/image";
import placeholders from "@/lib/blur-placeholders.json";

// next/image with a loading effect: while the image downloads, a blurred
// preview of it gently pulses in brightness; the real image stays hidden
// (so it never paints in strip by strip) and, once fully loaded, appears
// all at once with a fade-in. Previews come from `npm run images:blur`;
// images without one load normally.
//
// Loading is detected by BLUR_IMAGE_SCRIPT (in the root layout's <head>),
// not React, so it works even when the image finishes before hydration,
// which is common on slow connections. Styles live in globals.css.
export function BlurImage({ src, alt, style, className = "", ...props }) {
  const preview = placeholders[src];

  if (!preview) {
    return <Image src={src} alt={alt} style={style} className={className} {...props} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={`blur-img ${className}`}
      style={{
        ...style,
        "--blur-preview": `url("${preview}")`,
        // Line the preview up with images anchored to the top
        ...(className.includes("object-top") && { "--blur-position": "top" }),
      }}
      // The head script adds data-loaded before React hydrates
      suppressHydrationWarning
      {...props}
    />
  );
}

// Flags the page as able to run the effect, then marks .blur-img images
// as loaded when they finish (or fail, so a broken image never stays
// hidden). `load`/`error` don't bubble, so they're caught in the capture
// phase on the document; this also covers images added by client-side
// navigation. Without JavaScript the flag is never set and images show
// normally.
export const BLUR_IMAGE_SCRIPT = `document.documentElement.setAttribute("data-blur-img","");function m(e){var t=e.target;if(t.classList&&t.classList.contains("blur-img"))t.setAttribute("data-loaded","")}document.addEventListener("load",m,true);document.addEventListener("error",m,true);`;
