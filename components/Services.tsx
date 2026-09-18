"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  ["01", "Digital Direction", "Positioning, experience strategy and art direction that give digital work a clear point of view."],
  ["02", "Creative Development", "Front-end engineering and interactive systems built with care for performance, detail and motion."],
  ["03", "Brand Experience", "Identity systems translated into websites and digital touchpoints that feel native to the brand."],
  ["04", "Motion & Interaction", "Micro-interactions, transitions and cinematic movement designed to guide attention rather than decorate it."],
  ["05", "Creative Technology", "Experiments and technical prototypes where design questions need technology as part of the answer."]
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="services" className="bg-[#111] py-28 text-[#f1efe9] md:py-40">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3"><span className="eyebrow !text-[#a7a39a]">04 — Capabilities</span></div>
          <div className="col-span-12 md:col-span-9">
            <p className="mb-16 max-w-xl text-sm leading-7 text-white/50">Not a menu of disconnected services. One studio, moving between disciplines when the idea requires it.</p>
            <div className="border-t border-white/15">
              {services.map(([num, title, desc], i) => (
                <div key={num} className="border-b border-white/15">
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="grid w-full grid-cols-12 items-center py-7 text-left md:py-9"
                    aria-expanded={active === i}
                  >
                    <span className="col-span-2 text-[10px] uppercase tracking-[.14em] text-white/40">{num}</span>
                    <span className="col-span-8 text-3xl tracking-[-.04em] md:text-5xl">{title}</span>
                    <span className="col-span-2 text-right text-2xl font-light">{active === i ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .55, ease: [0.16,1,.3,1] }} className="overflow-hidden">
                        <p className="max-w-xl pb-9 pl-[16.66%] text-sm leading-7 text-white/50 md:pl-[16.66%]">{desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
