import { Reveal } from "./Reveal";

export default function StudioIntro() {
  return (
    <section id="studio" className="bg-[#f1efe9] py-28 md:py-44">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <span className="eyebrow">02 — Studio</span>
          </div>
          <Reveal className="col-span-12 md:col-span-9 md:col-start-3">
            <h2 className="max-w-6xl text-5xl font-medium leading-[.98] tracking-[-.05em] md:text-[7.2vw]">
              A small independent studio <span className="serif font-normal italic">building large</span> digital experiences.
            </h2>
          </Reveal>
        </div>
        <div className="mt-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 md:col-start-3">
            <p className="text-sm leading-7 text-[#6e6b64]">
              [AGENCY DESCRIPTION PLACEHOLDER] We connect strategy, art direction, design and technology in one continuous process — from the first thought to the final interaction.
            </p>
          </div>
          <div className="col-span-12 mt-8 grid grid-cols-2 gap-8 border-t border-black/15 pt-5 md:col-span-4 md:col-start-8 md:mt-0">
            <div><span className="eyebrow">Founded</span><p className="mt-2 text-sm">20XX</p></div>
            <div><span className="eyebrow">Based</span><p className="mt-2 text-sm">Jakarta / Remote</p></div>
            <div><span className="eyebrow">Focus</span><p className="mt-2 text-sm">Digital / Brand / Motion</p></div>
            <div><span className="eyebrow">Clients</span><p className="mt-2 text-sm">[COUNT]</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
