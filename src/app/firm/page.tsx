import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PARTNER_DATA, OFFICES, PRESS_ITEMS } from "@/lib/data";
import { FirmTeamSection } from "@/components/sections/FirmTeamSection";
import { FirmMarquee } from "@/components/sections/FirmMarquee";

export const metadata: Metadata = {
  title: "About the Firm — Global Consulting & Technology",
  description:
    "Serge Ltd is a multidisciplinary consulting and technology firm working across technology, strategy, and communications for corporations, governments, and growing businesses worldwide.",
  alternates: { canonical: "https://weareserge.com/firm" },
  openGraph: {
    title: "Serge Ltd | About the Firm — Global Consulting & Technology",
    description:
      "A multidisciplinary consulting and technology firm — helping organisations build, transform, and compete.",
    url: "https://weareserge.com/firm",
  },
};

export default function FirmPage() {
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
              { "@type": "ListItem", position: 2, name: "The Firm", item: "https://weareserge.com/firm" },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section
        className="max-w-[1440px] mx-auto flex flex-col"
        style={{ padding: "clamp(56px,7vw,100px) clamp(24px,5vw,80px) 60px", gap: 52 }}
        aria-labelledby="firm-hero-heading"
      >
        <div className="flex flex-col gap-6" style={{ maxWidth: 1100 }}>
          <span
            className="font-sans font-semibold uppercase text-[#ff7b2e]"
            style={{ fontSize: 11, letterSpacing: "0.24em" }}
          >
            The Firm
          </span>
          <h1
            id="firm-hero-heading"
            className="m-0 text-[#e2ecf0]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(34px,5.4vw,80px)",
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
            }}
          >
            Serge —
            <br />
            built to build, advise,{" "}
            <em style={{ fontStyle: "italic", color: "#f9ac43", fontFamily: "var(--f-display)" }}>
              and communicate.
            </em>
          </h1>
        </div>
        <div className="w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
          <Image
            src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=1440&q=80&auto=format&fit=crop"
            alt="The Serge team"
            width={1440}
            height={630}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.88) contrast(1.02)" }}
            priority
          />
        </div>
      </section>

      {/* Our Approach */}
      <section
        id="approach"
        className="max-w-[1440px] mx-auto flex flex-col lg:grid"
        style={{
          padding: "72px clamp(24px,5vw,80px)",
          gridTemplateColumns: "1fr 1fr",
          gridAutoRows: "auto",
          gap: "56px 48px",
          alignItems: "start",
        }}
        aria-labelledby="approach-heading"
      >
        <div>
          <h2
            id="approach-heading"
            className="text-[#e2ecf0] mb-5"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(24px,2.6vw,38px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            A multidisciplinary firm
            <br />
            built for organisations that want to move.
          </h2>
          {[
            "Serge was founded to close the gap between strategy and execution — bringing together consulting, technology, and communications under one roof. We work with corporations, governments, political organisations, and growing businesses across the world.",
            "Our work is genuinely multidisciplinary. A client working with us on digital transformation may also benefit from our communications counsel. A political organisation building its brand may also need our strategic advisory. We join these capabilities deliberately.",
            "What our clients share is not sector — it is ambition. We work with organisations across Europe, the Americas, Asia-Pacific, and Africa, including Nigeria, who want to build something real, lead with clarity, and communicate with purpose.",
          ].map((p) => (
            <p key={p.slice(0, 20)} className="mb-4 last:mb-0 text-[#6b90a0]" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: "54ch" }}>
              {p}
            </p>
          ))}
        </div>

        <div style={{ gridColumn: 2, gridRow: 1 }}>
          <Image
            src="https://images.unsplash.com/photo-1758519289200-384c7ef2d163?w=600&q=80&auto=format&fit=crop"
            alt="Advisory partnership"
            width={600}
            height={750}
            className="w-full object-cover"
            style={{ aspectRatio: "4/5", filter: "saturate(0.88)" }}
            loading="lazy"
          />
        </div>

        <div style={{ gridColumn: 1, gridRow: 2 }}>
          <Image
            src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?w=600&q=80&auto=format&fit=crop"
            alt="Serge team in consultation"
            width={600}
            height={750}
            className="w-full object-cover"
            style={{ aspectRatio: "4/5", filter: "saturate(0.88)" }}
            loading="lazy"
          />
        </div>

        <div className="pt-14" style={{ gridColumn: 2, gridRow: 2 }}>
          {[
            "We work in genuine partnership with our clients. Every engagement is handled by senior people who bring both depth and breadth to the work. No unnecessary layers.",
            "We are selective about the work we take on — not because of capacity, but because we only work where we can make a real difference. If a brief does not fit our practice, we say so.",
            "Serge is a global firm with a local mindset. We work where our clients need us, and we bring the same standard wherever we go.",
          ].map((p) => (
            <p key={p.slice(0, 20)} className="mb-4 last:mb-0 text-[#6b90a0]" style={{ fontSize: 16, lineHeight: 1.7, maxWidth: "54ch" }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section
        className="border-t border-b"
        aria-labelledby="pillars-heading"
        style={{
          background: "var(--serge-bg-deep)",
          borderColor: "rgba(175,208,222,0.11)",
          padding: "clamp(64px,8vw,120px) clamp(32px,5vw,80px)",
          maxWidth: "min(1560px,96vw)",
          margin: "0 auto",
        }}
      >
        <h2
          id="pillars-heading"
          className="m-0 mb-[clamp(36px,5vw,68px)] text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(40px,5vw,80px)",
            fontWeight: 400,
            lineHeight: 1.06,
            letterSpacing: "-0.025em",
          }}
        >
          Our foundations.
        </h2>
        <div
          className="grid gap-px grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            background: "rgba(175,208,222,0.11)",
            border: "1px solid rgba(175,208,222,0.11)",
          }}
        >
          {[
            {
              num: "01",
              title: "Vision",
              body: "To be the most trusted partner for organisations navigating complexity — whether the challenge is technology, strategy, or communications.",
            },
            {
              num: "02",
              title: "Mission",
              body: "We bring together consulting, technology, and communications to help organisations build, transform, and lead — in a way that is practical, clear, and lasting.",
            },
            {
              num: "03",
              title: "Core Values",
              body: "Integrity in every engagement. Clarity over complexity. Accountability for results, not just recommendations.",
            },
          ].map((pillar) => (
            <article
              key={pillar.num}
              className="flex flex-col gap-5 reveal"
              style={{
                background: "rgba(6,24,38,0.7)",
                padding: "clamp(28px,3.5vw,52px)",
              }}
            >
              <span
                className="font-sans font-semibold uppercase text-[#f9ac43]"
                style={{ fontSize: 11, letterSpacing: "0.22em" }}
              >
                {pillar.num}
              </span>
              <h3
                className="m-0 text-[#e2ecf0]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(36px,3.5vw,60px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="m-0 text-[#6b90a0]"
                style={{ fontFamily: "var(--f-sans)", fontSize: "clamp(15px,1vw,19px)", lineHeight: 1.6, maxWidth: "38ch" }}
              >
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        className="max-w-[1440px] mx-auto border-t border-b border-[rgba(175,208,222,0.11)] grid grid-cols-2 md:grid-cols-4"
        style={{
          padding: "52px clamp(24px,5vw,80px)",
          gap: 28,
        }}
        aria-label="Firm statistics"
      >
        {/* TODO: Update these figures with actual Serge Ltd data */}
        {[
          { num: "3", suffix: "+", label: "Projects Delivered" },
          { num: "3", suffix: "", label: "Practice Areas" },
          { num: "1", suffix: "", label: "Countries" },
          { num: "2026", suffix: "", label: "Established" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1.5">
            <span
              className="text-[#e2ecf0]"
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(38px,4.8vw,68px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {stat.num}
              {stat.suffix && (
                <em style={{ fontStyle: "normal", color: "#f9ac43", fontSize: "0.7em" }}>
                  {stat.suffix}
                </em>
              )}
            </span>
            <span
              className="font-sans uppercase text-[#6b90a0]"
              style={{ fontSize: 11, letterSpacing: "0.22em" }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* Founder quote */}
      <section
        className="max-w-[1440px] mx-auto flex flex-col lg:grid"
        style={{
          padding: "88px clamp(24px,5vw,80px)",
          gridTemplateColumns: "1.2fr 0.9fr",
          gap: 72,
          alignItems: "center",
        }}
        aria-labelledby="founder-quote"
      >
        <div className="flex flex-col gap-5">
          <span
            className="font-sans font-semibold uppercase text-[#ff7b2e]"
            style={{ fontSize: 11, letterSpacing: "0.24em" }}
          >
            From the Founders
          </span>
          <blockquote
            id="founder-quote"
            className="m-0 text-[#e2ecf0] border-l-2 border-[#f9ac43] pl-6"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(20px,2.2vw,30px)",
              fontWeight: 400,
              lineHeight: 1.38,
              letterSpacing: "-0.005em",
              maxWidth: "28ch",
            }}
          >
            The best work outlasts the project. Systems that keep running. Strategies that hold.
            Brands that are remembered.
          </blockquote>
          <p
            className="mt-2.5 mb-0"
            style={{ fontFamily: "var(--f-display)", fontSize: 18, color: "#e2ecf0" }}
          >
            Ehi Ero-Omoighe III
          </p>
          <p
            className="m-0 font-sans uppercase text-[#6b90a0]"
            style={{ fontSize: 12, letterSpacing: "0.18em" }}
          >
            Managing Partner — Serge
          </p>
        </div>
        <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <Image
            src="/images/partners/ehi-ero-omoighe.jpg"
            alt="Ehi Ero-Omoighe III, Managing Partner"
            width={480}
            height={600}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.88)" }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Leadership */}
      <FirmTeamSection partners={PARTNER_DATA} />

      {/* Offices — hidden until addresses are confirmed */}
      {false && <section
        id="offices"
        className="max-w-[1440px] mx-auto border-t border-[rgba(175,208,222,0.11)]"
        style={{ padding: "72px clamp(24px,5vw,80px)" }}
        aria-labelledby="offices-heading"
      >
        <header className="mb-10 flex flex-col gap-3">
          <span className="font-sans font-semibold uppercase text-[#ff7b2e]" style={{ fontSize: 11, letterSpacing: "0.24em" }}>
            Offices
          </span>
          <h2
            id="offices-heading"
            className="m-0 text-[#e2ecf0]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(26px,3vw,42px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Three locations.
            <br />
            One standard.
          </h2>
        </header>
        <div
          className="grid gap-px"
          style={{
            gridTemplateColumns: "repeat(3,1fr)",
            background: "rgba(175,208,222,0.11)",
            border: "1px solid rgba(175,208,222,0.11)",
          }}
        >
          {OFFICES.map((office) => (
            <div
              key={office.city}
              className="flex flex-col gap-3 reveal"
              style={{
                background: "var(--serge-bg)",
                padding: "clamp(26px,3.5vw,48px)",
              }}
            >
              <span
                className="text-[#e2ecf0]"
                style={{ fontFamily: "var(--f-display)", fontSize: "clamp(22px,2vw,30px)", fontWeight: 400 }}
              >
                {office.city}
              </span>
              <span
                className="font-sans uppercase text-[#f9ac43]"
                style={{ fontSize: 10, letterSpacing: "0.22em" }}
              >
                {office.role}
              </span>
              <p className="m-0 text-[rgba(226,236,240,0.72)]" style={{ fontSize: 14, lineHeight: 1.6 }}>
                {office.address.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
              <p className="m-0 text-[#6b90a0] border-t border-[rgba(175,208,222,0.11)] pt-3" style={{ fontSize: 13, lineHeight: 1.6 }}>
                {office.note}
              </p>
            </div>
          ))}
        </div>
      </section>}

      {/* Clients */}
      <section
        className="max-w-[1440px] mx-auto border-t border-[rgba(175,208,222,0.11)]"
        style={{ padding: "72px clamp(24px,5vw,80px)" }}
        aria-labelledby="clients-heading"
      >
        <header className="flex justify-between items-baseline mb-9 flex-wrap gap-3">
          <h2
            id="clients-heading"
            className="m-0 text-[#e2ecf0]"
            style={{ fontFamily: "var(--f-display)", fontSize: "clamp(22px,2.4vw,34px)", fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Trusted by Institutions
          </h2>
          <span className="font-sans font-semibold uppercase text-[#ff7b2e]" style={{ fontSize: 11, letterSpacing: "0.24em" }}>
            A selection
          </span>
        </header>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-b border-[rgba(175,208,222,0.11)]"
        >
          {["AERIS GROUP", "NOVA ENERGY", "CIVIC WORKS", "ARC BANK", "METROPOLIS AUTHORITY"].map((name, i) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2 px-3.5 py-6 text-center font-display opacity-50 transition-opacity hover:opacity-100 hover:text-[#f9ac43]"
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(11px,1vw,14px)",
                letterSpacing: "0.16em",
                color: "#e2ecf0",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section
        id="careers"
        className="max-w-[1440px] mx-auto border-t border-[rgba(175,208,222,0.11)]"
        style={{ padding: "72px clamp(24px,5vw,80px)" }}
        aria-labelledby="careers-heading"
      >
        <header className="mb-8 flex flex-col gap-3">
          <span className="font-sans font-semibold uppercase text-[#ff7b2e]" style={{ fontSize: 11, letterSpacing: "0.24em" }}>
            Careers
          </span>
          <h2
            id="careers-heading"
            className="m-0 text-[#e2ecf0]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(26px,3vw,42px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Work that
            <br />
            matters.
          </h2>
        </header>
        <div className="flex flex-col gap-4" style={{ maxWidth: "54ch" }}>
          <p className="text-[#6b90a0] reveal" style={{ fontSize: 16, lineHeight: 1.7 }}>
            We work across technology, strategy, and communications — and we recruit people who can
            move between disciplines. Whether you come from software engineering, strategic
            consulting, brand, or public affairs, we want to hear from you.
          </p>
          <p className="text-[#6b90a0] reveal" style={{ fontSize: 16, lineHeight: 1.7 }}>
            If you are skilled, adaptable, and want to work on projects that matter — across sectors
            and borders — we would like to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 font-sans uppercase text-[#e2ecf0] no-underline border-b border-[rgba(255,255,255,0.25)] pb-1.5 w-fit mt-3 transition-all hover:text-[#ff7b2e] hover:border-[#ff7b2e]"
            style={{ fontSize: 12, letterSpacing: "0.14em" }}
          >
            Enquire About Positions <span>→</span>
          </Link>
        </div>
      </section>

      {/* Press — hidden until PRESS_ITEMS has real entries */}
      {PRESS_ITEMS.length > 0 && <section
        id="press"
        className="max-w-[1440px] mx-auto border-t border-[rgba(175,208,222,0.11)]"
        style={{ padding: "72px clamp(24px,5vw,80px)" }}
        aria-labelledby="press-heading"
      >
        <header className="mb-8 flex flex-col gap-3">
          <span className="font-sans font-semibold uppercase text-[#ff7b2e]" style={{ fontSize: 11, letterSpacing: "0.24em" }}>
            Press
          </span>
          <h2
            id="press-heading"
            className="m-0 text-[#e2ecf0]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(26px,3vw,42px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            In the record.
          </h2>
        </header>
        <ul className="list-none p-0 m-0">
          {PRESS_ITEMS.map((item, i) => (
            <li
              key={item.title}
              className="reveal flex flex-wrap items-center gap-x-6 gap-y-1 py-5 border-b border-[rgba(175,208,222,0.11)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                className="font-sans text-[#6b90a0] w-16 shrink-0"
                style={{ fontSize: 11, letterSpacing: "0.1em" }}
              >
                {item.date}
              </span>
              <span
                className="flex-1 text-[#e2ecf0]"
                style={{ fontFamily: "var(--f-display)", fontSize: "clamp(16px,1.4vw,20px)", letterSpacing: "-0.005em" }}
              >
                {item.title}
              </span>
              <span
                className="font-sans uppercase text-[#6b90a0] ml-auto"
                style={{ fontSize: 11, letterSpacing: "0.18em" }}
              >
                {item.outlet}
              </span>
            </li>
          ))}
        </ul>
      </section>}

      {/* Marquee */}
      <FirmMarquee />
    </>
  );
}
