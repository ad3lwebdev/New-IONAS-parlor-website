import Reveal from "./Reveal";
import Image from "next/image";
const shots = [
  {
    label: "Dining Room",
    image: "/images/gallery/dining.jpeg",
  },
  {
    label: "Carabeef Steak",
    image: "/images/gallery/carabeef.jpeg",
  },
  {
    label: "Batukarit Sisig",
    image: "/images/gallery/sisig.jpeg",
  },
  {
    label: "Sinigang na Isda",
    image: "/images/gallery/sinigang.jpeg",
  },
  {
    label: "Pako Omelette",
    image: "/images/gallery/omelete.jpeg",
  },
  {
    label: "Sierra Madre Backdrop",
    image: "/images/gallery/shiera.jpeg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-forest before:h-px before:w-6 before:bg-annatto">
              A Peek Inside
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3.5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Gallery
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-[16.5px] text-inkSoft">
              Photography placeholders — drop in real shots of the dining room, the dishes, and
              the coastline here.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 40}
              className={`${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"} transition-transform duration-300 hover:z-10 hover:rotate-0 hover:-translate-y-1 hover:scale-[1.03]`}
            >
              <figure className="rounded-sm border border-line bg-white p-2.5 pb-8 shadow-soft">

              
               <div className="relative aspect-square overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  className="object-cover"
                        />
                  </div>

      
                <figcaption className="mt-2 text-center font-mono text-[10.5px] tracking-wide text-inkSoft">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-7 flex items-center gap-2 font-mono text-xs text-inkSoft">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          Placeholder frames — ready for real photography of the parlor and dishes.
        </Reveal>
      </div>
    </section>
  );
}
