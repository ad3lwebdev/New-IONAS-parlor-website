import Reveal from "./Reveal";

const figures = [
  { value: "1977", label: "Year Established" },
  { value: "3", label: "Generations Running It" },
  { value: "6\u20138", label: "Open Daily, No Closing Day" },
  { value: "#43", label: "Mabini St., Poblacion 38" },
];

export default function Story() {
  return (
    <section id="story" className="bg-forest py-20 text-paperLight md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass before:h-px before:w-6 before:bg-brass">
              Our Story
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Three generations,
              <br />
              one dining room.
            </h2>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="mb-5 text-[17px] leading-relaxed text-[#E9E1CC]">
              New Iona&apos;s opened its doors on Mabini St. in 1977, at a time when Infanta had
              no fast-food chains and few places to stop on the long haul across the Sierra
              Madre. What started as a family-run parlor became the town&apos;s default answer
              to &ldquo;where do we eat?&rdquo; &mdash; for barangay regulars, jeepney drivers,
              and travelers making the winding crossing between Manila and the Pacific coast.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[17px] leading-relaxed text-[#E9E1CC]">
              Nearly five decades later, the recipes haven&apos;t changed hands so much as
              they&apos;ve been carried forward &mdash; carabeef cooked low and slow the way it
              always has been, mornings built around whatever the coast and the mountain
              provided that week. It&apos;s still the same family behind the counter, and the
              sinigang na isda still gets made fresh, never rushed.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15">
              {figures.map((f) => (
                <div key={f.label} className="bg-forestDeep px-5 py-6">
                  <b className="block font-display text-3xl font-bold text-brass">{f.value}</b>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C9BFA2]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
