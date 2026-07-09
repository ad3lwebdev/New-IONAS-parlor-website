export default function Footer() {
  return (
    <footer className="bg-forestDeep py-14 text-[#CFC6AC]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-3.5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass font-display text-sm font-bold text-brass">
                NI
              </span>
              <span className="font-display text-lg font-semibold text-paper">
                New Iona&apos;s
                <span className="block font-mono text-[10px] font-normal tracking-[0.12em] text-[#9C927A]">
                  REFRESHMENT PARLOR
                </span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-[#9C927A]">
              Infanta&apos;s family table since 1977 — serving locals and travelers passing
              through on the way to the Pacific coast.
            </p>
          </div>

          <div>
            <h5 className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-brass">
              Explore
            </h5>
            <ul className="grid gap-2.5 text-sm">
              <li><a href="#story" className="hover:text-paper">Our Story</a></li>
              <li><a href="#menu" className="hover:text-paper">Menu</a></li>
              <li><a href="#gallery" className="hover:text-paper">Gallery</a></li>
              <li><a href="#faq" className="hover:text-paper">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-brass">
              Visit
            </h5>
            <ul className="grid gap-2.5 text-sm">
              <li>#43 Mabini St., Poblacion 38</li>
              <li>Infanta, Quezon</li>
              <li>Open daily &middot; 6 AM &ndash; 8 PM</li>
              <li>(042) 535-2123</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[11.5px] text-[#9C927A]">
          <span>&copy; 2026 New Iona&apos;s Refreshment Parlor. Serving Infanta since 1977.</span>
          <span>Site by your hospitality design team</span>
        </div>
      </div>
    </footer>
  );
}
