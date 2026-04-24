import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, PROCESS_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Three disciplines deployed together when the decision carries consequence — Corporate Consulting, Digital Transformation, and Data & Strategy.",
  alternates: { canonical: "https://serge.firm/services" },
  openGraph: {
    title: "Capabilities | SERGE",
    description:
      "Corporate strategy, digital transformation, and decision infrastructure for executives and boards.",
    url: "https://serge.firm/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section
        className="max-w-[1280px] mx-auto"
        style={{ padding: "clamp(100px,12vw,160px) 48px 40px" }}
        aria-labelledby="svc-heading"
      >
        <span
          className="block mb-6 font-sans font-semibold uppercase text-[#6b90a0]"
          style={{ fontSize: 11, letterSpacing: "0.22em" }}
        >
          Capabilities
        </span>
        <p
          id="svc-heading"
          className="m-0 text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(24px,2.8vw,38px)",
            fontWeight: 500,
            lineHeight: 1.22,
            letterSpacing: "-0.01em",
            maxWidth: "32ch",
          }}
        >
          Three disciplines. Deployed together when the decision in front of the organisation carries
          consequence.
        </p>
        <div
          className="mt-9 w-full overflow-hidden border border-[rgba(175,208,222,0.11)]"
          style={{ aspectRatio: "16/6", maxWidth: 1080 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80&auto=format&fit=crop"
            alt="SERGE advisory practice"
            width={1800}
            height={675}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.88) contrast(1.02)" }}
            priority
          />
        </div>
      </section>

      {/* Index + blocks */}
      <section
        className="max-w-[1280px] mx-auto"
        style={{
          padding: "40px 48px 80px",
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Sticky TOC */}
        <aside
          className="sticky flex flex-col gap-3.5 border-l-2 border-[#f9ac43] pl-5"
          style={{ top: 120 }}
          aria-label="Capabilities index"
        >
          <span className="font-sans uppercase text-[#6b90a0]" style={{ fontSize: 11, letterSpacing: "0.22em" }}>
            Index
          </span>
          <ol className="list-none p-0 m-0 flex flex-col gap-2.5">
            {SERVICES.map((svc) => (
              <li key={svc.id}>
                <a
                  href={`#${svc.id}`}
                  className="block font-sans text-sm text-[#e2ecf0] no-underline transition-all hover:text-[#f9ac43] hover:translate-x-1"
                  style={{ letterSpacing: "0.04em", fontFamily: "var(--f-display)" }}
                >
                  {svc.num.replace("— ", "")} &nbsp; {svc.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#engagement-model"
                className="block font-sans text-sm text-[#e2ecf0] no-underline transition-all hover:text-[#f9ac43] hover:translate-x-1"
                style={{ letterSpacing: "0.04em", fontFamily: "var(--f-display)" }}
              >
                04 &nbsp; Engagement Model
              </a>
            </li>
          </ol>
          <span className="font-sans uppercase text-[#6b90a0] mt-6" style={{ fontSize: 11, letterSpacing: "0.22em" }}>
            Engagement formats
          </span>
          <p className="text-sm text-[#6b90a0] m-0">Diagnostic · Mandate · Embedded</p>
        </aside>

        {/* Service blocks */}
        <div className="flex flex-col">
          {SERVICES.map((svc) => (
            <article
              id={svc.id}
              key={svc.id}
              className="py-13 border-t border-[rgba(175,208,222,0.11)] last:border-b"
              style={{ paddingTop: 52, paddingBottom: 60 }}
            >
              <header className="mb-8">
                <span
                  className="block mb-3.5 uppercase text-[#ff7b2e]"
                  style={{ fontSize: 11, letterSpacing: "0.22em" }}
                >
                  {svc.num}
                </span>
                <h2
                  className="m-0 mb-4 text-[#e2ecf0]"
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: "clamp(26px,3vw,42px)",
                    letterSpacing: "-0.01em",
                    fontWeight: 400,
                  }}
                >
                  {svc.title}
                </h2>
                <p className="m-0 text-[#6b90a0]" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "58ch" }}>
                  {svc.def}
                </p>
              </header>

              <div
                className="mb-7 w-full overflow-hidden border border-[rgba(175,208,222,0.11)]"
                style={{ aspectRatio: "16/6" }}
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  width={1600}
                  height={600}
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.88)" }}
                  loading="lazy"
                />
              </div>

              <div
                className="grid gap-11 border-t border-[rgba(175,208,222,0.11)] pt-6"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                <div>
                  <span
                    className="block mb-3.5 uppercase text-[#6b90a0]"
                    style={{ fontSize: 11, letterSpacing: "0.22em" }}
                  >
                    What we do
                  </span>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                    {svc.whatWeDo.map((item) => (
                      <li
                        key={item}
                        className="text-[#e2ecf0] pl-4.5 relative"
                        style={{ fontSize: 17, lineHeight: 1.55, paddingLeft: 18 }}
                      >
                        <span
                          className="absolute left-0 top-[10px] w-2 h-px bg-[#ff7b2e]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span
                    className="block mb-3.5 uppercase text-[#6b90a0]"
                    style={{ fontSize: 11, letterSpacing: "0.22em" }}
                  >
                    Outcomes
                  </span>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                    {svc.outcomes.map((item) => (
                      <li
                        key={item}
                        className="text-[#e2ecf0] relative"
                        style={{ fontSize: 17, lineHeight: 1.55, paddingLeft: 18 }}
                      >
                        <span
                          className="absolute left-0 top-[10px] w-2 h-px bg-[#ff7b2e]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {svc.formats.map((fmt) => (
                  <span
                    key={fmt}
                    className="font-sans uppercase text-[#e2ecf0] border border-[rgba(175,208,222,0.11)] px-3.5 py-1.5"
                    style={{ fontSize: 11, letterSpacing: "0.18em" }}
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Engagement model */}
      <section
        id="engagement-model"
        className="max-w-[1280px] mx-auto"
        style={{ padding: "40px 48px 60px" }}
        aria-labelledby="process-heading"
      >
        <h2
          id="process-heading"
          className="m-0 mb-4 text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(30px,3.4vw,50px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Engagement model
        </h2>
        <ol
          className="list-none p-0 mt-4 grid border-t border-b border-[rgba(175,208,222,0.11)]"
          style={{ gridTemplateColumns: "repeat(5,minmax(0,1fr))" }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.num}
              className="flex flex-col gap-2.5 p-[26px_18px] border-[rgba(175,208,222,0.11)]"
              style={{
                borderRight: i < PROCESS_STEPS.length - 1 ? "1px solid rgba(175,208,222,0.11)" : "none",
              }}
            >
              <div
                className="w-full overflow-hidden border border-[rgba(175,208,222,0.11)] mb-1"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={step.image}
                  alt={step.name}
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.85)" }}
                  loading="lazy"
                />
              </div>
              <span className="font-sans uppercase text-[#ff7b2e]" style={{ fontSize: 11, letterSpacing: "0.22em" }}>
                {step.num}
              </span>
              <span className="text-[#e2ecf0]" style={{ fontFamily: "var(--f-display)", fontSize: 20 }}>
                {step.name}
              </span>
              <span className="text-[#6b90a0]" style={{ fontSize: 15, lineHeight: 1.55 }}>
                {step.line}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer CTA */}
      <section
        className="max-w-[1280px] mx-auto"
        style={{ padding: "20px 48px 120px" }}
      >
        <div
          className="w-full overflow-hidden border border-[rgba(175,208,222,0.11)] mb-6"
          style={{ aspectRatio: "16/5" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1800&q=80&auto=format&fit=crop"
            alt=""
            width={1800}
            height={562}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.88)" }}
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <p
          className="text-[#6b90a0]"
          style={{ fontFamily: "var(--f-display)", fontSize: "clamp(18px,1.8vw,26px)" }}
        >
          Mandates are reviewed individually.{" "}
          <Link
            href="/contact"
            className="text-[#e2ecf0] no-underline border-b border-[#ff7b2e] pb-0.5 transition-colors hover:text-[#ff7b2e]"
          >
            Submit an inquiry →
          </Link>
        </p>
      </section>
    </>
  );
}
