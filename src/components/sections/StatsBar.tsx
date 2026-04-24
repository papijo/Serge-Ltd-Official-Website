"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { num: "$500", suffix: "M+", label: "Strategic value delivered" },
  { num: "120", suffix: "+", label: "High-stakes mandates" },
  { num: "2015", suffix: "", label: "Year established" },
  { num: "3", suffix: "", label: "Global offices" },
  { num: "100", suffix: "%", label: "Partner-led mandates" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".stat-item-el");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 100);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="relative stats-amber-line border-t border-b"
      style={{
        borderColor: "rgba(175,208,222,0.22)",
        background: "linear-gradient(180deg, rgba(3,13,21,0.92) 0%, rgba(6,22,34,0.85) 100%)",
      }}
      ref={ref}
    >
      <div
        className="flex items-stretch"
        style={{
          maxWidth: 1560,
          margin: "0 auto",
          padding: "0 clamp(28px,4vw,80px)",
        }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} className="contents">
            <div
              className="stat-item-el flex flex-col gap-2.5 reveal"
              style={{
                flex: 1,
                padding: "clamp(36px,4vw,56px) clamp(20px,2vw,36px)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(32px,3.5vw,56px)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  color: "#e2ecf0",
                  lineHeight: 1,
                }}
              >
                {stat.num}
                {stat.suffix && (
                  <em style={{ fontStyle: "normal", color: "#f9ac43", fontSize: "0.72em" }}>
                    {stat.suffix}
                  </em>
                )}
              </span>
              <span
                className="text-[#6b90a0]"
                style={{
                  fontFamily: "var(--f-sans)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                  maxWidth: "16ch",
                }}
              >
                {stat.label}
              </span>
            </div>
            {i < STATS.length - 1 && (
              <div
                className="flex-shrink-0 w-px self-stretch"
                style={{
                  background: "rgba(175,208,222,0.11)",
                  margin: "clamp(24px,3vw,40px) 0",
                }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
