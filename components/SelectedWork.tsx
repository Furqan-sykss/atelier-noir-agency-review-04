"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";
import { ImageReveal } from "./Reveal";

export default function SelectedWork() {
  const reduced = useReducedMotion();
  return (
    <section id="work" className="bg-[#e7e4dc] py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 border-b border-black/15 pb-5">
          <div className="col-span-7 md:col-span-3"><span className="eyebrow">03 — Selected work</span></div>
          <p className="col-span-5 text-right text-[9px] uppercase tracking-[.16em] text-[#6e6b64] md:col-span-2 md:col-start-11">Archive<br />2025—26</p>
        </div>

        <div className="mt-16 md:mt-24">
          <motion.article
            initial={reduced ? false : { opacity: 0, y: 35 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .12 }}
            transition={{ duration: .85, ease: [0.16,1,.3,1] }}
          >
            <div className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-12 md:col-span-10">
                <div className="group relative aspect-[16/8] overflow-hidden">
                  <ImageReveal src={projects[0].image} alt="Project 01 placeholder" className="h-full w-full transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.018]" />
                  <div className="absolute left-4 top-4 text-[9px] uppercase tracking-[.16em] text-white">01 / selected work</div>
                </div>
              </div>
              <div className="col-span-10 md:col-span-2 md:pb-1">
                <span className="eyebrow">{projects[0].client}</span>
                <h3 className="mt-3 text-xl tracking-[-.03em]">{projects[0].title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#6e6b64]">{projects[0].description}</p>
                <p className="mt-5 text-[9px] uppercase tracking-[.14em] text-[#6e6b64]">{projects[0].year} / {projects[0].category}</p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={reduced ? false : { opacity: 0, y: 45 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .12 }}
            transition={{ duration: .9, ease: [0.16,1,.3,1] }}
            className="mt-28 md:mt-44"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 md:col-span-4 md:col-start-2">
                <div className="group relative aspect-[4/5] overflow-hidden">
                  <ImageReveal src={projects[1].image} alt="Project 02 placeholder" className="h-full w-full transition-transform duration-1000 group-hover:scale-[1.025]" />
                  <div className="absolute right-3 top-3 text-[9px] uppercase tracking-[.16em] text-white">02</div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col justify-end pb-1 md:col-span-3 md:col-start-7">
                <span className="eyebrow">{projects[1].category}</span>
                <h3 className="serif mt-3 text-4xl leading-[.9] md:text-6xl">{projects[1].title}</h3>
                <p className="mt-5 text-xs leading-6 text-[#6e6b64]">{projects[1].description}</p>
                <span className="mt-7 text-[9px] uppercase tracking-[.14em] text-[#6e6b64]">{projects[1].client} / {projects[1].year}</span>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={reduced ? false : { opacity: 0, y: 45 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .12 }}
            transition={{ duration: .9, ease: [0.16,1,.3,1] }}
            className="mt-28 md:mt-40"
          >
            <div className="relative">
              <div className="group ml-auto aspect-[16/8] w-[92%] overflow-hidden md:w-[76%]">
                <ImageReveal src={projects[2].image} alt="Project 03 placeholder" className="h-full w-full transition-transform duration-1000 group-hover:scale-[1.02]" />
              </div>
              <div className="absolute left-0 top-1/2 w-[44%] -translate-y-1/2 bg-[#e7e4dc] py-6 pr-5 md:w-[30%] md:py-10 md:pr-10">
                <span className="eyebrow">03 / {projects[2].category}</span>
                <h3 className="mt-4 text-3xl leading-[.95] tracking-[-.04em] md:text-5xl">{projects[2].title}</h3>
                <p className="mt-4 text-xs leading-6 text-[#6e6b64]">{projects[2].description}</p>
                <p className="mt-6 text-[9px] uppercase tracking-[.14em] text-[#6e6b64]">{projects[2].client} / {projects[2].year}</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
