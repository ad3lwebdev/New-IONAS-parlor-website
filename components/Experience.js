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

        <Reveal delay={100}>
          <div className="relative aspect-square overflow-hidden rounded-sm shadow-card">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
              <rect width="400" height="400" fill="#C6982F" />
              <rect x="0" y="260" width="400" height="140" fill="#8C6A24" />
              <g stroke="#2A2118" strokeWidth="2" opacity="0.5">
                <line x1="40" y1="260" x2="40" y2="400" />
                <line x1="140" y1="260" x2="140" y2="400" />
                <line x1="260" y1="260" x2="260" y2="400" />
                <line x1="360" y1="260" x2="360" y2="400" />
              </g>
              <rect x="60" y="180" width="100" height="80" fill="#F3E8CE" />
              <rect x="240" y="180" width="100" height="80" fill="#F3E8CE" />
              <circle cx="110" cy="220" r="26" fill="#336B7A" opacity="0.5" />
              <circle cx="290" cy="220" r="26" fill="#B8451F" opacity="0.5" />
              <rect x="0" y="140" width="400" height="40" fill="#2A2118" opacity="0.15" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
