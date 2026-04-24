"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CLIENTS } from "@/lib/data";

export function ClientRoster() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = ref.current?.querySelectorAll(".roster-row");
    if (!rows) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 60);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    rows.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="roster-heading"
      className="relative"
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "clamp(72px,9vw,130px) clamp(32px,6vw,100px)",
      }}
    >
      <header
        className="grid gap-x-[clamp(32px,5vw,80px)] items-start mb-[clamp(44px,6vw,80px)] pb-[clamp(32px,4vw,56px)] border-b"
        style={{
          gridTemplateColumns: "minmax(0,0.6fr) minmax(0,1fr)",
          borderColor: "rgba(175,208,222,0.11)",
        }}
      >
        <div>
          <h2
            id="roster-heading"
            className="m-0 text-[#e2ecf0]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(52px,7vw,120px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Our clients
          </h2>
        </div>
        <div className="flex flex-col gap-4 pt-2">
          <p
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "clamp(18px,1.4vw,24px)",
              lineHeight: 1.5,
              color: "rgba(226,236,240,0.72)",
              maxWidth: "44ch",
              margin: 0,
            }}
          >
            From public institutions to enterprise groups and scale-stage companies — we support
            leadership teams facing complex decisions and consequential outcomes.
          </p>
          <Link
            href="/engagements"
            className="inline-flex items-center gap-2.5 no-underline font-sans text-[11px] font-bold uppercase w-fit px-[22px] py-3 transition-opacity hover:opacity-90"
            style={{
              letterSpacing: "0.14em",
              background: "linear-gradient(110deg, #f9ac43, #ff7b2e)",
              color: "#030d15",
            }}
          >
            Read All Outcomes <span>→</span>
          </Link>
        </div>
      </header>

      <ul
        className="list-none p-0 m-0 border-t"
        style={{ borderColor: "rgba(175,208,222,0.11)" }}
        aria-label="Client list"
      >
        {CLIENTS.map((client, i) => (
          <li
            key={client.name}
            className="roster-row reveal cursor-default transition-colors hover:bg-[rgba(255,255,255,0.02)]"
            style={{
              display: "grid",
              gridTemplateColumns: "56px minmax(0,1.2fr) 130px minmax(0,1.8fr)",
              gap: "clamp(12px,2vw,32px)",
              alignItems: "center",
              padding: "clamp(18px,2.2vw,28px) 0",
              borderBottom: "1px solid rgba(175,208,222,0.11)",
              transitionDelay: `${i * 60}ms`,
            }}
          >
            <span
              className="font-sans font-medium text-[#f9ac43]"
              style={{ fontSize: 11, letterSpacing: "0.2em" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="text-[#e2ecf0]"
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(20px,1.8vw,28px)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              {client.name}
            </span>
            <span
              className="font-sans text-[#6b90a0] whitespace-nowrap"
              style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              {client.sector}
            </span>
            <span
              className="font-sans text-[rgba(226,236,240,0.72)]"
              style={{ fontSize: "clamp(14px,1.1vw,17px)", lineHeight: 1.55 }}
            >
              {client.desc}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
