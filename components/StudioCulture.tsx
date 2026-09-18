import { ImageReveal, Reveal } from "./Reveal";

export default function StudioCulture() {
  return (
    <section className="bg-[#d9d5cc] py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2"><span className="eyebrow">06 — Culture</span></div>
          <Reveal className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-5xl leading-[.95] tracking-[-.05em] md:text-[7vw]">We care about the details people <span className="serif italic">don&apos;t notice.</span></h2>
          </Reveal>
        </div>
        <div className="mt-20 grid grid-cols-12 items-end gap-6">
          <ImageReveal
            src="/images/pexels-kindelmedia-7688336.jpg"
            alt="Studio placeholder"
            className="col-span-12 aspect-[4/3] md:col-span-8 md:aspect-[16/10]"
          />
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <span className="eyebrow">Studio image / placeholder</span>
            <p className="mt-5 text-sm leading-7 text-[#5f5b54]">A quiet room, a wall of references, a screen that is never quite finished. This is where the invisible work becomes visible.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
