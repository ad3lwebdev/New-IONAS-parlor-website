"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const categories = ["All", "Mains", "Breakfast", "Noodles & Snacks", "Desserts"];

const dishes = [
  {
    name: "Carabeef Steak",
    category: "Mains",
    price: "from ₱50",
    tone: "brass",
    image: "/images/menu/carabeef.jpeg",
    desc: "Melt-in-your-mouth carabao beef slices in a savory house sauce — the dish that's kept regulars coming back since the '70s.",
    featured: true,
  },
  {
    name: "Batukarit Sisig",
    category: "Mains",
    price: "₱170",
    tone: "pacific",
    image: "/images/menu/batukarit_sisig.jpeg",
    desc: "Sizzling sisig made with batukarit, a local snail found throughout Infanta — bold, savory, and a bite you won't find outside town.",
  },
  {
    name: "Sinigang na Isda",
    category: "Mains",
    price: "signature",
    tone: "forest",
    image: "/images/menu/sinigang_isda.jpeg",
    desc: "The parlor's current signature — a sour fish soup loaded with vegetables, simmered fresh throughout the day.",
  },
  {
    name: "Nilagang Kalabaw",
    category: "Mains",
    price: "comfort bowl",
    tone: "annatto",
     image: "/images/menu/nilagang_kalabaw.jpeg",
    desc: "A clear, slow-simmered carabao broth — the dish locals order when they want something honest and warm.",
  },
  {
    name: "Pako Omelette",
    category: "Breakfast",
    price: "breakfast fave",
    tone: "forest",
    image: "/images/menu/nilagang_kalabaw.jpeg",
    desc: "Fern fiddlehead tops folded into egg — a morning staple built from what grows wild around the mountain side of town.",
  },
  {
    name: "Tapa-Style Carabeef",
    category: "Breakfast",
    price: "with rice & egg",
    tone: "annatto",
    image: "/images/menu/carabeef_tapa.jpeg",
    desc: "House-cured carabeef tapa, pan-fried and paired with garlic rice — a favorite start for early travelers on the Marilaque route.",
  },
  {
    name: "Palabok",
    category: "Noodles & Snacks",
    price: "sharing size",
    tone: "brass",
    image: "/images/menu/palabok_rice.jpeg",
    desc: "Rice noodles in a savory shrimp-and-annatto sauce, topped the classic Filipino way — a merienda-table regular.",
  },
  {
    name: "Lumpiang Shanghai",
    category: "Noodles & Snacks",
    price: "per order",
    tone: "pacific",
    image: "/images/menu/lumpiang_shanghai.jpeg",
    desc: "Crisp fried spring rolls, a staple side that shows up at nearly every table in the dining room.",
  },
  {
    name: "Siopao",
    category: "Noodles & Snacks",
    price: "per piece",
    tone: "forest",
     image: "/images/menu/siopao.jpeg",
    desc: "Soft steamed buns, best ordered alongside a hot cup of local brew for an easy mid-afternoon stop.",
  },
  {
    name: "Halo-Halo",
    category: "Desserts",
    price: "cooling classic",
    tone: "pacific",
       image: "/images/menu/halo_halo.jpeg",
    desc: "The parlor's take on the layered shaved-ice classic — the go-to order after a long, warm day in Infanta.",
  },
  {
    name: "Suman & Sumangga",
    category: "Desserts",
    price: "best with coffee",
    tone: "annatto",
     image: "/images/suman.jpeg",
    desc: "Sticky rice cake steamed in leaves, served plain or paired with ripe mango — the way most meals here end.",
  },
];

const toneMap = {
  brass: "bg-brass",
  pacific: "bg-pacific",
  forest: "bg-forest",
  annatto: "bg-annatto",
};

function DishMedia({ image, tone }) {
  return (
    <div className="relative aspect-[5/4] overflow-hidden">
      <img
        src={image}
        alt="Dish"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}


export default function Menu() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <section id="menu" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-xl">
          <Reveal>
            <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-forest before:h-px before:w-6 before:bg-annatto">
              On the Table
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3.5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Signature dishes, since day one.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-[16.5px] text-inkSoft">
              Infanta&apos;s local specialties and Filipino comfort-food staples, cooked the way
              the town actually eats them.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140} className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition ${
                active === c
                  ? "border-forest bg-forest text-paperLight"
                  : "border-line bg-paperLight text-inkSoft hover:border-forest hover:text-forest"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d, i) => (
            <Reveal
              key={d.name}
              delay={i * 40}
              className={`overflow-hidden rounded-sm border border-line bg-paperLight shadow-soft transition hover:-translate-y-1.5 hover:shadow-card ${
                d.featured ? "sm:col-span-2" : ""
              }`}
            >
             <DishMedia 
                image={d.image}
              tone={d.tone}
                />
              <div className="p-6">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold leading-snug">{d.name}</h3>
                  <span className="flex-shrink-0 whitespace-nowrap rounded-full border border-annatto px-2.5 py-1 font-mono text-[12px] text-annatto">
                    {d.price}
                  </span>
                </div>
                <p className="text-[14.5px] text-inkSoft">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
