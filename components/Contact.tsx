import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#9c3f32] py-28 text-[#f8f5ed] md:py-44">
      <div className="container">
        <span className="eyebrow !text-white/65">09 — Start a project</span>
        <Reveal className="mt-16">
          <h2 className="max-w-6xl text-[16vw] leading-[.78] tracking-[-.065em] md:text-[10.5vw]">
            Have a project
            <br />
            <span className="serif italic">in mind?</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="max-w-sm text-sm leading-7 text-white/75">Tell us what you are trying to make, change or understand. A few lines are enough.</p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <a href="mailto:hello@[agency].com" className="group flex items-center justify-between border-b border-white/35 py-5 text-2xl md:text-4xl">
              hello@[agency].com <span className="transition-transform duration-500 group-hover:translate-x-2">↗</span>
            </a>
            <div className="mt-7 flex gap-6 text-[10px] uppercase tracking-[.15em] text-white/65">
              <a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
