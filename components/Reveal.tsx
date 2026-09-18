"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        initial={reduced ? false : { scale: 1.12, clipPath: "inset(8% 0 8% 0)" }}
        whileInView={reduced ? undefined : { scale: 1, clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
