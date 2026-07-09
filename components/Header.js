"use client";

import { useState } from "react";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ink font-display text-sm font-bold text-annatto">
            NI
          </span>
          <span className="font-display text-lg font-semibold leading-tight">
            New Iona&apos;s
            <span className="mt-0.5 block font-mono text-[10px] font-normal tracking-[0.14em] text-inkSoft">
              REFRESHMENT PARLOR &middot; EST. 1977
            </span>
          </span>
        </a>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-annatto after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#visit"
            className="hidden rounded-sm border border-ink bg-forest px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-paperLight transition hover:-translate-y-0.5 hover:bg-forestDeep sm:inline-flex"
          >
            Get Directions
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm border border-ink p-2 md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span className="absolute left-0 top-0 h-[2px] w-5 bg-ink" />
              <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-ink" />
              <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit rounded-sm border border-ink bg-forest px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-paperLight"
          >
            Get Directions
          </a>
        </nav>
      )}
    </header>
  );
}
