import Link from "next/link";

export function EditorialSection() {
  return (
    <section
      className="relative border-t border-b overflow-hidden"
      aria-labelledby="editorial-heading"
      style={{
        background: "var(--serge-bg-deep)",
        borderColor: "rgba(175,208,222,0.11)",
      }}
    >
      {/* Amber top rule */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
        style={{
          background: "linear-gradient(90deg, #f9ac43 0%, #ff7b2e 55%, transparent 100%)",
        }}
      />
      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "120px 120px",
          mixBlendMode: "overlay",
        }}
      />

      <div
        className="relative z-10 max-w-[1440px] mx-auto grid gap-x-[clamp(48px,7vw,120px)] items-center"
        style={{
          padding: "clamp(72px,9vw,140px) clamp(32px,6vw,110px)",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        }}
      >
        {/* Left */}
        <div className="flex flex-col items-start gap-10">
          <span
            aria-hidden="true"
            className="block w-[60px] h-0.5"
            style={{
              background: "linear-gradient(90deg, #f9ac43, #ff7b2e)",
            }}
          />
          <span
            className="font-sans text-[11px] font-semibold uppercase text-[#6b90a0]"
            style={{ letterSpacing: "0.24em" }}
          >
            Foundational Purpose
          </span>
          <h2
            id="editorial-heading"
            className="m-0"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(44px,6vw,96px)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 0.96,
              color: "#e2ecf0",
              fontStyle: "normal",
            }}
          >
            <em style={{ fontStyle: "italic", color: "#f9ac43" }}>Golden standard</em>
            <br />
            in strategy
            <br />
            + execution.
          </h2>
        </div>

        {/* Right */}
        <div
          className="flex flex-col gap-4 border-l"
          style={{
            borderColor: "rgba(175,208,222,0.11)",
            paddingLeft: "clamp(32px,4vw,72px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "clamp(17px,1.3vw,22px)",
              lineHeight: 1.6,
              color: "rgba(226,236,240,0.72)",
            }}
          >
            We guide leaders through complex institutional decisions — from strategic framing to
            implementation design — across government, enterprise, and data transformation mandates.
          </p>
          <p
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "clamp(17px,1.3vw,22px)",
              lineHeight: 1.6,
              color: "rgba(226,236,240,0.72)",
            }}
          >
            Every engagement is a direct partnership with our senior advisors. No hand-offs. No
            associates. No ambiguity about accountability.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 font-sans text-xs uppercase text-[#e2ecf0] no-underline border-b border-[rgba(175,208,222,0.22)] pb-2 w-fit transition-all hover:text-[#f9ac43] hover:border-[rgba(249,172,67,0.3)]"
            style={{ letterSpacing: "0.2em", marginTop: 8 }}
          >
            Explore our capabilities
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
