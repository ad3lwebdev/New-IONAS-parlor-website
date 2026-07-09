import Reveal from "./Reveal";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=New+Iona%27s+Refreshment+Parlor+Mabini+St+Poblacion+38+Infanta+Quezon";

const info = [
  {
    title: "Address",
    body: "#43 Mabini St., Poblacion 38, Infanta, Quezon",
    icon: (
      <>
        <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
  {
    title: "Hours",
    body: "Open daily, Monday–Sunday · 6:00 AM – 8:00 PM, no closing day",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
  {
    title: "Getting Here",
    body: "Via the Marilaque highway or the Famy–Infanta road across the Sierra Madre — about 4–5 hours from Manila by land.",
    icon: <path d="M3 11l18-7-7 18-2-8-9-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />,
  },
  {
    title: "Contact & Delivery",
    body: "Landline (042) 535-2123 · Smart 0947 369 0321 · Globe 0945 587 2914 · Local delivery via Reina Pabili Services.",
    icon: (
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    ),
  },
];

export default function Location() {
  return (
    <section id="visit" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-forest before:h-px before:w-6 before:bg-annatto">
              Find Us
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mb-2 mt-3.5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Visit New Iona&apos;s
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mb-2 text-inkSoft">
              Right in the heart of Poblacion, easy to find and easy to fold into a Sierra
              Madre crossing or coastal day trip.
            </p>
          </Reveal>

          {info.map((b, i) => (
            <Reveal key={b.title} delay={160 + i * 60}>
              <div className={`flex gap-4 py-5 ${i === 0 ? "border-t" : ""} border-line ${i === info.length - 1 ? "border-b" : "border-t"}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0 text-forest">
                  {b.icon}
                </svg>
                <div>
                  <h4 className="mb-1 font-display text-[15px] font-semibold">{b.title}</h4>
                  <p className="text-[14.5px] text-inkSoft">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="overflow-hidden rounded-sm border border-line bg-paperLight shadow-soft">
            <div className="relative aspect-[4/3]">
              <iframe
            src="https://maps.google.com/maps?q=New%20Iona's%20Refreshment%20Parlor%20Infanta%20Quezon&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
            />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 p-6">
              <span className="font-mono text-[12.5px] text-inkSoft">
                #43 Mabini St., Infanta, Quezon
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-forest bg-forest px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-paperLight transition hover:-translate-y-0.5 hover:bg-forestDeep"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
