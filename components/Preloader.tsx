"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 760);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#111] p-5 text-[#f1efe9] md:p-7"
          aria-label="Loading"
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[9px] uppercase tracking-[.18em] text-white/50">
            <span>[AGENCY NAME]</span><span>Independent studio</span><span>2026</span>
          </div>
          <div className="grid grid-cols-12 items-end gap-4">
            <span className="serif col-span-12 text-[21vw] leading-[.7] tracking-[-.07em] md:col-span-9 md:text-[13vw]">[AGENCY NAME]</span>
            <span className="col-span-12 mb-1 text-[9px] uppercase tracking-[.18em] text-white/45 md:col-span-3">Designing the first frame.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
