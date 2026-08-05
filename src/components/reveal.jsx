"use client";

import { m } from "framer-motion";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as: Component = "div",
}) {
  const MotionComponent = m[Component] ?? m.div;
  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
