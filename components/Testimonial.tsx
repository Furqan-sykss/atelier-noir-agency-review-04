import { Reveal } from "./Reveal";

export default function Testimonial() {
  return (
    <section className="bg-[#111] px-0 py-28 text-[#f1efe9] md:py-44">
      <div className="container">
        <span className="eyebrow !text-[#a7a39a]">07 — Client voice</span>
        <Reveal className="mt-14">
          <blockquote className="serif max-w-6xl text-5xl leading-[.94] tracking-[-.04em] md:text-[7vw]">
            “[CLIENT TESTIMONIAL PLACEHOLDER — a short sentence about the clarity, craft and impact of the work.]”
          </blockquote>
        </Reveal>
        <div className="mt-14 flex items-center gap-4 text-xs text-white/50">
          <span className="h-px w-10 bg-white/25" />
          <span>[CLIENT NAME] / [ROLE, COMPANY]</span>
        </div>
      </div>
    </section>
  );
}
