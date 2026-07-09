import Reveal from "./Reveal";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=New+Iona%27s+Refreshment+Parlor+Mabini+St+Poblacion+38+Infanta+Quezon";

export default function FinalCta() {
  return (
    <section className="bg-annatto py-20 text-center text-paperLight md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <span className="mx-auto flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-[#F6D9C6] before:h-px before:w-6 before:bg-paperLight after:h-px after:w-6 after:bg-paperLight">
            Passing Through Infanta?
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-paperLight sm:text-4xl md:text-[44px]">
            Stop by the table that&apos;s been open since 1977.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-4 max-w-md text-[16.5px] text-[#F6D9C6]">
            #43 Mabini St., Poblacion 38 &middot; Open daily, 6 AM &ndash; 8 PM
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border-[1.5px] border-ink bg-ink px-7 py-3.5 font-mono text-[13px] uppercase tracking-wide text-paperLight transition hover:-translate-y-0.5 hover:bg-[#171310]"
            >
              Get Directions
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-sm border-[1.5px] border-paperLight px-7 py-3.5 font-mono text-[13px] uppercase tracking-wide transition hover:-translate-y-0.5 hover:bg-paperLight hover:text-annatto"
            >
              View the Menu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
