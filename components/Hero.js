import Reveal from "./Reveal";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <div>
          <div className="mb-8 flex flex-wrap items-center gap-5">
            <div className="postmark flex h-32 w-32 flex-shrink-0 -rotate-[9deg] items-center justify-center rounded-full border-2 border-annatto text-center font-mono text-[10px] uppercase tracking-wider text-annatto">
              <span>
                Gateway to
                <b className="my-0.5 block font-display text-xl font-bold not-italic tracking-normal">
                  the Pacific
                </b>
                Infanta, Qzn
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-inkSoft">

          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
                  
              Poblacion 38 &middot; Infanta, Quezon
            </div>
          </div>

          <Reveal>
            <h1 className="font-display text-[42px] font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-[62px]">
              The family table
              <br />
              Infanta comes <em className="font-medium italic text-forest">home</em> to.
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-lg text-inkSoft">
              New Iona's Refreshment Parlor is a well-loved restaurant in Infanta, Quezon,
                serving Filipino comfort food since 1977...

            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-sm border-[1.5px] border-forest bg-forest px-7 py-3.5 font-mono text-[13px] uppercase tracking-wide text-paperLight transition hover:-translate-y-0.5 hover:bg-forestDeep hover:border-forestDeep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
              >
                View the Menu
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-sm border-[1.5px] border-ink px-7 py-3.5 font-mono text-[13px] uppercase tracking-wide transition hover:-translate-y-0.5 hover:bg-ink hover:text-paperLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
              >
                Plan Your Visit
              </a>
            </div>
          </Reveal>

          <div className="mt-9 flex items-center gap-3 border-t border-dashed border-line pt-6 font-mono text-xs text-inkSoft">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Open daily, Monday&ndash;Sunday &middot; 6:00 AM &ndash; 8:00 PM
          </div>
        </div>

       <Reveal delay={120} className="mx-auto w-full max-w-[420px]">
  <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-card">

   <Image
  src="/images/hero/hero-restaurant.jpeg"
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
