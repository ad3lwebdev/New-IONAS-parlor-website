import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "We stopped on the way to the coast and ended up staying an hour longer than planned. The carabeef steak alone was worth the detour.",
    who: "Marco",
    role: "weekend rider, from Manila",
  },
  {
    quote:
      "Been eating here since I was a kid. It still tastes like it did back then, and that's rare these days.",
    who: "Aling Fe",
    role: "Infanta local",
  },
  {
    quote:
      "Filmed our whole breakfast segment here — the pako omelette and the story behind the place made it an easy episode to cut.",
    who: "@LakwatserongPinoy",
    role: "food & travel vlog",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink py-20 text-paperLight md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl">
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass before:h-px before:w-6 before:bg-brass">
              What Guests Say
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3.5 font-display text-3xl font-semibold leading-tight text-paperLight sm:text-4xl">
              Rated 4.5★ on Google, told about since the &apos;70s.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-[15px] text-[#B9AE93]">
              Sample guest notes below — swap in real reviews once you&apos;re actively
              collecting them from Google and Facebook.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.who}
              delay={i * 80}
              className="rounded-sm border border-white/15 bg-white/[0.03] p-7"
            >
              <div className="mb-4 font-mono text-sm tracking-[3px] text-brass">★★★★★</div>
              <p className="mb-5 font-display text-[17px] italic leading-relaxed text-[#F1EBD8]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-mono text-xs tracking-wide text-[#B9AE93]">
                {t.who} &middot; {t.role}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
