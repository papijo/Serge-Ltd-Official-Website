"use client";

import { useEffect, useRef } from "react";
import { PRINCIPLES } from "@/lib/data";

export function PrinciplesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = ref.current?.querySelectorAll(".principle-row-el");
    if (!rows) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
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
      className="relative border-t border-b"
      aria-labelledby="principles-heading"
      style={{
        borderColor: "rgba(175,208,222,0.11)",
        background: "linear-gradient(170deg, rgba(4,18,30,0.9) 0%, #030d15 100%)",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto grid items-start"
        style={{
          padding: "clamp(72px,10vw,140px) clamp(32px,6vw,100px)",
          gridTemplateColumns: "200px 1fr",
          gap: "clamp(40px,6vw,100px)",
        }}
      >
        <span
          id="principles-heading"
          className="font-sans uppercase text-[#6b90a0] border-t-2 border-[#f9ac43] pt-[clamp(12px,1.5vw,20px)] w-fit"
          style={{ fontSize: 11, letterSpacing: "0.24em" }}
        >
          How we work
        </span>

        <div className="flex flex-col">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.num}
              className="principle-row-el reveal-left grid items-baseline border-b border-[rgba(175,208,222,0.11)]"
              style={{
                gridTemplateColumns: "64px 1fr",
                gap: "clamp(20px,3vw,44px)",
                padding: "clamp(20px,2.4vw,32px) 0",
                borderTop: i === 0 ? "1px solid rgba(175,208,222,0.11)" : undefined,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span
                className="font-sans font-medium text-[#f9ac43] pt-1.5"
                style={{ fontSize: 12, letterSpacing: "0.18em" }}
              >
                {p.num}
              </span>
              <p
                className="m-0"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px,3.2vw,52px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {p.italic ? <em style={{ fontStyle: "italic", color: "#e2ecf0" }}>{p.text}</em> : p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
