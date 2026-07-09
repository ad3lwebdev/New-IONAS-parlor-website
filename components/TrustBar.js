import Reveal from "./Reveal";

const stats = [
  { value: "1977", label: "Year Established" },
  { value: "4.5★", label: "Google Rating" },
  { value: "8,700+", label: "Guests Checked In" },
  { value: "3", label: "Generations Running It" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-paperLight/70">
      <div className="mx-auto max-w-6xl px-6 py-7">
        <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-display text-2xl font-semibold text-forest sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[10.5px] uppercase tracking-wider text-inkSoft">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
