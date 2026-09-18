import { Reveal } from "./Reveal";

const capabilities = ["Art direction", "UX / UI", "Creative development", "Motion design", "Design systems", "Digital strategy", "WebGL / experiments", "Content direction"];

export default function Capabilities() {
  return (
    <section className="bg-[#f1efe9] py-28 md:py-36">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3"><span className="eyebrow">08 — Expertise</span></div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="max-w-5xl text-4xl leading-tight tracking-[-.04em] md:text-6xl">The space between disciplines is where interesting things tend to happen.</h2>
          </Reveal>
        </div>
        <div className="mt-20 grid grid-cols-2 border-t border-black/15 md:grid-cols-4">
          {capabilities.map((item, i) => (
            <div key={item} className="border-b border-r border-black/15 px-4 py-8 text-sm md:px-6">
              <span className="eyebrow">0{i+1}</span>
              <p className="mt-10">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
