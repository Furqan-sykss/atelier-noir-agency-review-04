"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  ["01", "Discover", "Find the tension, the opportunity and the reason the work needs to exist."],
  ["02", "Define", "Turn a broad ambition into a sharp creative direction and useful constraints."],
  ["03", "Design", "Shape the visual language, interaction and system before polishing the surface."],
  ["04", "Develop", "Build the experience with a close loop between design, motion and technology."],
  ["05", "Deliver", "Launch, learn and leave the team with a system that can keep moving."]
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 25%"] });
  const height = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="bg-[#f1efe9] py-28 md:py-40">
      <div className="container">
        <div className="mb-20 flex items-end justify-between">
          <span className="eyebrow">05 — Process</span>
          <span className="serif text-4xl italic text-[#9c3f32]">from thought to motion.</span>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="relative col-span-12 md:col-span-1">
            <div className="hidden h-full w-px bg-black/10 md:block" />
            <motion.div style={{ height }} className="absolute left-0 top-0 hidden w-px origin-top bg-[#9c3f32] md:block" />
          </div>
          <div className="col-span-12 md:col-span-10">
            {steps.map(([num, title, desc], i) => (
              <button key={num} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className="grid w-full grid-cols-12 border-t border-black/15 py-9 text-left last:border-b">
                <span className="col-span-2 text-[10px] tracking-[.14em] text-[#6e6b64]">{num}</span>
                <span className="col-span-5 text-4xl tracking-[-.04em] md:text-6xl">{title}</span>
                <motion.span animate={{ opacity: active === i ? 1 : .35, x: active === i ? 0 : 12 }} className="col-span-5 max-w-sm text-sm leading-6 text-[#6e6b64]">{desc}</motion.span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
