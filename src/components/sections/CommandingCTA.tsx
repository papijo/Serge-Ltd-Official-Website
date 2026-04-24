"use client";

import Link from "next/link";

export function CommandingCTA() {
  return (
    <section
      className="relative overflow-hidden border-t"
      aria-label="Call to action"
      style={{
        background: "var(--serge-bg-deep)",
        borderColor: "rgba(175,208,222,0.11)",
      }}
    >
      {/* Structural accent orb */}
      <div
        aria-hidden="true"
        className="absolute"
        style={{
          width: "clamp(400px,50vw,800px)",
          aspectRatio: "1",
          right: "clamp(-200px,-15vw,-60px)",
          bottom: "clamp(-200px,-18vw,-60px)",
          borderRadius: 999,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 30% 30%, rgba(45,166,138,0.16), transparent 55%), " +
            "radial-gradient(circle at 70% 70%, rgba(6,30,46,0.9), rgba(3,13,21,0.98) 68%)",
          border: "1px solid rgba(45,166,138,0.18)",
          filter: "blur(1px)",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto relative z-10 grid items-center"
        style={{
          padding: "clamp(80px,11vw,160px) clamp(32px,6vw,100px)",
          gridTemplateColumns: "1fr 340px",
          gap: "clamp(40px,6vw,100px)",
        }}
      >
        <div
          className="flex flex-col items-start gap-[clamp(20px,2.4vw,32px)] pt-[clamp(24px,3vw,40px)] border-t border-[rgba(175,208,222,0.22)]"
        >
          <span
            className="font-sans font-semibold uppercase text-[#6b90a0]"
            style={{ fontSize: 11, letterSpacing: "0.24em" }}
          >
            Engagements
          </span>
          <h2
            className="m-0 text-[#e2ecf0]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(40px,5.5vw,86px)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            Accepted by
            <br />
            <em style={{ fontStyle: "italic", color: "#f9ac43" }}>referral and review.</em>
          </h2>
          <p
            className="m-0"
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "clamp(16px,1.2vw,20px)",
              lineHeight: 1.6,
              color: "rgba(226,236,240,0.72)",
              maxWidth: "46ch",
            }}
          >
            A small number of mandates are accepted each year. Each is reviewed individually by a
            senior partner before engagement begins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3.5 px-8 py-[18px] font-sans font-semibold uppercase no-underline transition-colors"
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              background: "#ff7b2e",
              color: "#fff",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "#f9ac43"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "#ff7b2e"; }}
          >
            Request an Introduction <span>→</span>
          </Link>
        </div>

        <div className="relative min-h-[200px]" aria-hidden="true" />
      </div>
    </section>
  );
}
