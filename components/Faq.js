"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do you take reservations for groups or tour buses?",
    a: "Yes — larger groups and tour parties are welcome. Call ahead so the kitchen can prepare for you, especially around lunch hours.",
  },
  {
    q: "Are you open on Sundays and holidays?",
    a: "Yes, New Iona's is open every day of the week, including Sundays and most local holidays, from 6 AM to 8 PM.",
  },
  {
    q: "Can I get food delivered?",
    a: "Yes — New Iona's offers dine-in, takeout, and local delivery through Reina Pabili Services.",
  },
  {
    q: "Is there parking nearby?",
    a: "Street parking is available along Mabini St. in Poblacion 38, though it can get tight during peak hours.",
  },
  {
    q: "What should first-timers order?",
    a: "Start with the carabeef steak and the batukarit sisig — the two dishes most closely tied to New Iona's since the beginning — alongside the current signature, sinigang na isda.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-xl">
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-forest before:h-px before:w-6 before:bg-annatto">
              Good to Know
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3.5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
        </div>

        <div className="border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="relative h-5 w-5 flex-shrink-0">
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 bg-annatto" />
                    <span
                      className={`absolute left-1/2 top-1/2 h-3.5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-annatto transition-all duration-200 ${
                        isOpen ? "rotate-90 opacity-0" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300"
                  style={{ maxHeight: isOpen ? "220px" : "0px" }}
                >
                  <p className="max-w-xl pb-6 text-[15.5px] text-inkSoft">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
