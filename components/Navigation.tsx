"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = ["Work", "Studio", "Services", "Contact"];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference text-white">
        <div className="container flex h-20 items-center justify-between">
          <a href="#" className="text-xs font-semibold tracking-[.14em]">[AGENCY NAME]</a>
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-[.12em] transition-opacity hover:opacity-60">{link}</a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="text-xs uppercase tracking-[.12em] md:hidden"
            aria-label="Open menu"
          >
            Menu +
          </button>
          <a href="#contact" className="hidden text-xs uppercase tracking-[.12em] md:block">Let&apos;s talk ↗</a>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#111] text-[#f1efe9]"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: .8, ease: [0.16,1,.3,1] }}
          >
            <div className="container flex h-full flex-col justify-between py-7">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[.14em]">[AGENCY NAME]</span>
                <button onClick={() => setOpen(false)} className="text-xs uppercase tracking-[.12em]">Close ×</button>
              </div>
              <nav className="flex flex-col">
                {links.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * .07 + .15, duration: .65, ease: [0.16,1,.3,1] }}
                    className="serif border-b border-white/15 py-3 text-[16vw] leading-[.82] tracking-[-.05em]"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
              <div className="flex justify-between text-[10px] uppercase tracking-[.14em] text-white/50">
                <span>Independent creative studio</span><span>Jakarta / Worldwide</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
