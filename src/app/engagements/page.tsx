import type { Metadata } from "next";
import Link from "next/link";
import { WORK_TILES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Projects & Client Engagements",
  description:
    "A selection of Serge Ltd's work — technology, strategy, and communications projects for corporations, governments, and growing businesses across the world.",
  alternates: { canonical: "https://weareserge.com/engagements" },
  openGraph: {
    title: "Serge Ltd | Selected Projects & Client Engagements",
    description: "Technology, strategy, and communications projects for corporations, governments, and growing businesses worldwide.",
    url: "https://weareserge.com/engagements",
  },
};

const FILTERS = ["All", "Government", "Enterprise", "Data", "Capital"];

export default function EngagementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://weareserge.com" },
              { "@type": "ListItem", position: 2, name: "Engagements", item: "https://weareserge.com/engagements" },
            ],
          }),
        }}
      />
      {/* Intro + filters */}
      <section
        className="max-w-[1440px] mx-auto flex justify-between items-baseline flex-wrap gap-12"
        style={{ padding: "clamp(100px,12vw,160px) 48px 40px" }}
        aria-labelledby="engagements-page-heading"
      >
        <h1
          id="engagements-page-heading"
          className="font-sans font-semibold uppercase text-[#6b90a0]"
          style={{ fontSize: 11, letterSpacing: "0.22em" }}
        >
          Serge Ltd — Selected Work / 2018 — 2025
        </h1>
        <nav aria-label="Filter engagements">
          <ul className="list-none p-0 m-0 flex gap-7 flex-wrap" role="tablist">
            {FILTERS.map((f, i) => (
              <li key={f} role="presentation">
                <a
                  href="#"
                  role="tab"
                  aria-selected={i === 0}
                  className={`no-underline transition-colors ${
                    i === 0
                      ? "text-[#e2ecf0] border-b border-[#f9ac43] pb-1"
                      : "text-[#6b90a0] hover:text-[#e2ecf0]"
                  }`}
                  style={{ fontFamily: "var(--f-display)", fontSize: 15, letterSpacing: "0.02em" }}
                >
                  {f}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Grid */}
      <section
        className="max-w-[1440px] mx-auto"
        style={{ padding: "24px 48px 80px" }}
        aria-label="Engagement portfolio"
      >
        <div
          className="grid gap-x-7"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "44px 28px" }}
        >
          {/* Anchor targets */}
          <span id="cat-government" className="sr-only" />
          <span id="cat-enterprise" className="sr-only" />
          <span id="cat-data" className="sr-only" />
          <span id="cat-capital" className="sr-only" />

          {WORK_TILES.map((tile) => (
            <Link
              key={tile.title}
              href="/contact"
              className={`work-tile block no-underline text-inherit ${tile.wide ? "col-span-2" : ""}`}
              aria-label={`Engagement: ${tile.title}`}
            >
              <div
                className="relative w-full overflow-hidden transition-all duration-700"
                style={{
                  aspectRatio: tile.wide ? "21/9" : "4/3",
                  backgroundImage: `url(${tile.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(0.18)",
                }}
              >
                <div className="absolute top-5 left-5 flex gap-4">
                  <span
                    className="font-sans uppercase text-white"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textShadow: "0 1px 6px rgba(0,0,0,0.45)",
                    }}
                  >
                    {tile.index}
                  </span>
                  <span
                    className="font-sans uppercase text-white"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textShadow: "0 1px 6px rgba(0,0,0,0.45)",
                    }}
                  >
                    {tile.category}
                  </span>
                </div>
              </div>
              <div className="pt-5 flex flex-col gap-2 px-1">
                <h3
                  className="work-tile-title m-0 text-[#e2ecf0]"
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {tile.title}
                </h3>
                <p className="m-0 text-[#6b90a0]" style={{ fontSize: 14, lineHeight: 1.55 }}>
                  {tile.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p
          className="mt-[72px] pt-7 border-t border-[rgba(175,208,222,0.11)] text-center font-sans uppercase text-[#6b90a0]"
          style={{ fontSize: 11, letterSpacing: "0.18em" }}
        >
          Names withheld under engagement confidentiality. Discussed in detail under NDA.
        </p>
      </section>
    </>
  );
}
