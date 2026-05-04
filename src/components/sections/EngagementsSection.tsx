import Link from "next/link";
import { ENGAGEMENTS } from "@/lib/data";

export function EngagementsSection() {
  return (
    <section
      aria-labelledby="engagements-heading"
      className="relative"
      style={{
        maxWidth: "min(1820px,97vw)",
        margin: "0 auto",
        padding: "clamp(72px,9vw,130px) clamp(28px,3.5vw,90px)",
      }}
    >
      <header className="flex flex-col gap-4" style={{ maxWidth: 1100 }}>
        <span
          className="font-sans uppercase text-[#ff7b2e] inline-flex items-center gap-[0.6em]"
          style={{ fontSize: 12, letterSpacing: "0.14em" }}
        >
          <span style={{ fontSize: 10, opacity: 0.8 }}>○</span>
          Engagements
        </span>
        <h2
          id="engagements-heading"
          className="m-0 text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(38px,5.2vw,76px)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            maxWidth: "22ch",
          }}
        >
          Turning complexity into outcomes that define institutional performance.
        </h2>
      </header>

      <div
        className="flex flex-col mt-[clamp(48px,6vw,88px)]"
        style={{ gap: "clamp(52px,7vw,96px)" }}
      >
        {ENGAGEMENTS.map((eng) => (
          <article
            key={eng.title}
            className="relative border overflow-hidden flex flex-col md:grid"
            style={{
              background: "linear-gradient(140deg,rgba(10,50,70,0.94),rgba(6,34,50,0.92))",
              borderColor: "rgba(255,255,255,0.07)",
              padding: "clamp(24px,3.2vw,48px)",
              gridTemplateColumns: "minmax(0,1.08fr) minmax(0,0.92fr)",
              gap: "clamp(22px,3vw,46px)",
            }}
          >
            {/* Media */}
            <div
              className="relative"
              style={{ minHeight: "clamp(340px,42vh,520px)" }}
            >
              <div
                className="absolute left-0 bottom-0 border border-[rgba(255,255,255,0.07)] transition-transform duration-500 hover:-translate-y-1"
                style={{
                  width: "clamp(260px,34vw,580px)",
                  maxWidth: "88%",
                  aspectRatio: "7/6",
                  backgroundImage: `url(${eng.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.9) contrast(1.02)",
                }}
              />
              <div
                className="absolute border border-[rgba(255,255,255,0.07)] transition-all duration-500 hover:-translate-y-2"
                style={{
                  right: "clamp(4px,1.1vw,20px)",
                  bottom: "clamp(8px,1.5vw,22px)",
                  width: "clamp(130px,14vw,230px)",
                  aspectRatio: "4/3",
                  backgroundImage: `url(${eng.images[1]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "saturate(0.9) contrast(1.02)",
                }}
              />
            </div>

            {/* Body */}
            <div className="relative z-10 flex flex-col items-start justify-start gap-[clamp(10px,1.4vw,18px)]">
              <span
                className="font-sans uppercase text-[#ff7b2e] opacity-90"
                style={{ fontSize: 11, letterSpacing: "0.14em" }}
              >
                {eng.index} — {eng.category}
              </span>
              <h3
                className="m-0 text-[#e2ecf0]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(36px,4.4vw,78px)",
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.04,
                  maxWidth: "12ch",
                }}
              >
                {eng.title}
              </h3>
              <p
                className="m-0 opacity-75"
                style={{
                  fontFamily: "var(--f-sans)",
                  fontSize: "clamp(15px,1vw,19px)",
                  lineHeight: 1.5,
                  color: "#e2ecf0",
                  maxWidth: "42ch",
                }}
              >
                {eng.desc}
              </p>
              <div className="inline-flex flex-col gap-0.5 mt-[clamp(2px,0.4vw,8px)]">
                <span
                  className="text-[rgba(255,255,255,0.92)]"
                  style={{
                    fontFamily: "var(--f-display)",
                    fontSize: "clamp(52px,4.8vw,84px)",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.96,
                  }}
                >
                  {eng.kpi.value}
                </span>
                <span
                  className="text-[rgba(255,255,255,0.5)] font-sans uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.2em" }}
                >
                  {eng.kpi.label}
                </span>
              </div>
              <Link
                href="/engagements"
                className="inline-flex items-center gap-[0.6em] font-sans uppercase text-[#e2ecf0] no-underline border-b border-[rgba(255,255,255,0.25)] pb-1.5 transition-all hover:text-[#ff7b2e] hover:border-[#ff7b2e] mt-3"
                style={{ fontSize: 12, letterSpacing: "0.14em" }}
              >
                View Engagement <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
