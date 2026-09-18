"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero relative min-h-[100svh] overflow-hidden bg-[#111] text-[#f1efe9]">
      <div className="hero-frame container relative flex min-h-[100svh] flex-col pt-24 pb-7 md:pt-28">
        <div className="hero-top grid grid-cols-12 gap-4 border-b border-white/20 pb-4 text-[9px] uppercase tracking-[.17em] text-white/45">
          <span className="col-span-6 md:col-span-3">Independent creative studio</span>
          <span className="col-span-6 text-right md:col-span-2 md:col-start-11">Jakarta / 2026</span>
        </div>

        <div className="relative flex flex-1 items-center">
          <motion.div
            className="hero-copy relative z-10 w-full md:w-[78%]"
            initial={reduced ? false : { opacity: 0, y: 55 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow mb-8 !text-white/45">A point of view, made digital.</p>
            <h1 className="serif text-[18vw] leading-[.73] tracking-[-.07em] md:text-[11.5vw]">
              Things
              <br />
              <span className="ml-[17%] italic">worth</span>
              <br />
              seeing.
            </h1>
          </motion.div>

          <motion.figure
            className="hero-image absolute right-0 top-[17%] h-[44vh] w-[42vw] max-w-[590px] overflow-hidden md:top-[16%] md:h-[63vh] md:w-[31vw]"
            initial={reduced ? false : { clipPath: "inset(100% 0 0 0)", scale: 1.04 }}
            animate={reduced ? undefined : { clipPath: "inset(0 0 0 0)", scale: 1 }}
            transition={{ duration: 1.15, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/balazs-ketyi-9VzoRKfBsMM-unsplash.jpg" alt="Abstract studio material placeholder" className="h-full w-full object-cover object-[62%_center] grayscale-[20%]" />
            <figcaption className="absolute bottom-3 left-3 text-[8px] uppercase tracking-[.16em] text-white/70">Image 01 / visual study</figcaption>
          </motion.figure>
        </div>

        <div className="grid grid-cols-12 items-end gap-4 border-t border-white/20 pt-4 text-[9px] uppercase tracking-[.16em] text-white/45">
          <span className="col-span-5 md:col-span-2">Digital / Brand / Motion</span>
          <span className="col-span-4 col-start-9 text-right md:col-span-2 md:col-start-11">Scroll ↓</span>
        </div>
      </div>
      <div className="noise" />
    </section>
  );
}
