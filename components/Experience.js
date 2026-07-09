import Image from "next/image";
import Reveal from "./Reveal";

const points = [
  {
    text: "Family-run since 1977 — you're usually served by the same family that opened it.",
    icon: (
      <path d="M4 21V9l8-6 8 6v12M9 21v-8h6v8" stroke="currentColor" strokeWidth="1.6" fill="none" />
    ),
  },
  {
    text: "Open every day, 6 AM to 8 PM — no closing day, ever.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
  {
    text: "Dine-in, takeout, and local delivery through Reina Pabili Services.",
    icon: (
      <path
        d="M3 12h18M3 6h18M3 18h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    text: "Right along the route travelers take between the Sierra Madre crossing and Infanta's Pacific coastline.",
    icon: (
      <path
        d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    ),
  },
];

export default function Experience() {
  return (
    <section className="border-y border-line bg-paperLight py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-forest before:h-px before:w-6 before:bg-annatto">
              The Dining Room
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3.5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Homey by design, not by accident.
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-5">
            {points.map((p, i) => (
              <Reveal key={p.text} delay={140 + i * 60}>
                <li className="flex items-start gap-3.5 text-[15.5px] text-inkSoft">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0 text-forest">
                    {p.icon}
                  </svg>
                  {p.text}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>


              <Reveal delay={120} className="mx-auto w-full max-w-[420px]">
  <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-card">

   <Image
  src="/images/experience/experience.jpeg"
  alt="New Iona's Restaurant"
  fill
  className="object-cover"
/>

    <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/25 to-transparent" />

    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between font-mono text-[11px] text-paperLight">
      <div>
        <strong className="mb-1 block font-display text-lg font-semibold not-italic">
          Mabini St. corner
        </strong>
        Poblacion 38, Infanta
      </div>

      <div>
        6AM–8PM
      </div>

    </div>

  </div>
</Reveal>

              
      </div>
    </section>
  );
}
