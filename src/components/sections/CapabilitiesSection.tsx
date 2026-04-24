import Link from "next/link";
import Image from "next/image";
import { PRACTICE_AREAS } from "@/lib/data";

export function CapabilitiesSection() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="relative"
      style={{
        maxWidth: "min(1560px, calc(100vw - 72px))",
        margin: "0 auto",
        padding: "clamp(72px,9vw,130px) clamp(30px,4vw,72px)",
      }}
    >
      <header className="mb-[clamp(44px,6vw,80px)] flex flex-col gap-3">
        <span
          className="font-sans uppercase text-[#ff7b2e] opacity-90"
          style={{ fontSize: 11, letterSpacing: "0.2em" }}
        >
          Capabilities
        </span>
        <h2
          id="capabilities-heading"
          className="m-0 text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(40px,5vw,72px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Three integrated
          <br />
          practice areas.
        </h2>
        <span
          className="inline-flex items-center justify-center w-fit px-4 py-2 border border-[rgba(255,255,255,0.25)] text-[rgba(255,255,255,0.85)] font-sans text-[11px] font-semibold uppercase"
          style={{ letterSpacing: "0.1em" }}
        >
          Practice Areas
        </span>
      </header>

      <div className="border-t" style={{ borderColor: "rgba(175,208,222,0.11)" }}>
        {PRACTICE_AREAS.map((area) => (
          <article
            key={area.title}
            className="practice-row grid items-center border-b"
            style={{
              gridTemplateColumns: "64px minmax(0,1.4fr) minmax(360px,0.95fr)",
              gap: "clamp(20px,2vw,40px)",
              padding: "clamp(22px,2.6vw,34px) 0",
              borderColor: "rgba(175,208,222,0.11)",
            }}
          >
            <span
              className="text-[rgba(255,255,255,0.75)] font-sans font-medium"
              style={{ fontSize: 20, letterSpacing: "-0.01em" }}
            >
              {area.index}
            </span>

            <div>
              <h3
                className="m-0 text-white"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(32px,3vw,52px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                {area.title}
              </h3>
              <p
                className="mt-3 mb-0"
                style={{
                  maxWidth: "42ch",
                  fontFamily: "var(--f-sans)",
                  fontSize: "clamp(15px,1vw,18px)",
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {area.desc}
              </p>
            </div>

            {/* Link visible by default, gallery on hover */}
            <div className="relative" style={{ gridColumn: 3, gridRow: 1 }}>
              <Link
                href="/services"
                className="practice-row-link-el justify-self-end inline-flex items-center gap-2 text-[rgba(255,255,255,0.85)] no-underline font-sans font-medium whitespace-nowrap transition-colors hover:text-[#f9ac43]"
                style={{ fontSize: 17 }}
              >
                Read More <span>↗</span>
              </Link>
              <div
                className="practice-row-gallery w-full grid gap-x-[clamp(8px,1vw,12px)]"
                style={{ gridTemplateColumns: "repeat(3,minmax(0,1fr))" }}
                aria-hidden="true"
              >
                {area.images.map((src, idx) => (
                  <div
                    key={idx}
                    className="practice-row-thumb w-full border border-[rgba(255,255,255,0.07)]"
                    style={{
                      aspectRatio: "4/3",
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "grayscale(0.2)",
                    }}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
