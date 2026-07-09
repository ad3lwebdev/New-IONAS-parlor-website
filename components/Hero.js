import Reveal from "./Reveal";

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
              Carabeef steak, sizzling batukarit sisig, and sinigang na isda simmered the way
              it&apos;s been done since 1977 &mdash; three generations in, still cooking from the
              same corner of Mabini St.
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
            <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#336B7A" />
                  <stop offset="55%" stopColor="#2F5233" />
                </linearGradient>
              </defs>
              <rect width="400" height="500" fill="url(#sky)" />
              <polygon points="0,230 90,120 160,230" fill="#264428" opacity="0.85" />
              <polygon points="120,230 220,90 320,230" fill="#1B3020" opacity="0.9" />
              <polygon points="260,230 340,150 400,230" fill="#264428" opacity="0.85" />
              <rect x="0" y="225" width="400" height="20" fill="#16260F" />
              <rect x="0" y="245" width="400" height="255" fill="#F3E8CE" />
              <g opacity="0.5">
                <rect x="20" y="270" width="360" height="1" fill="#C6982F" />
                <rect x="20" y="330" width="360" height="1" fill="#C6982F" />
                <rect x="20" y="390" width="360" height="1" fill="#C6982F" />
                <rect x="20" y="450" width="360" height="1" fill="#C6982F" />
              </g>
              <circle cx="200" cy="360" r="70" fill="#B8451F" opacity="0.13" />
              <circle cx="200" cy="360" r="46" fill="none" stroke="#B8451F" strokeWidth="2" />
              <text x="200" y="352" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="700" fontSize="26" fill="#B8451F">
                1977
              </text>
              <text x="200" y="374" textAnchor="middle" fontFamily="'Space Mono', monospace" fontSize="9" letterSpacing="2" fill="#2A2118">
                ESTABLISHED
              </text>
            </svg>
            <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/25 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between font-mono text-[11px] text-paperLight">
              <div>
                <strong className="mb-1 block font-display text-lg font-semibold not-italic">
                  Mabini St. corner
                </strong>
                Poblacion 38, Infanta
              </div>
              <div>6AM&ndash;8PM</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
