"use client";

import Link from "next/link";
import { useModalStore, type PartnerData } from "@/store/useModalStore";

interface Props {
  partners: PartnerData[];
}

export function FirmTeamSection({ partners }: Props) {
  const openModal = useModalStore((s) => s.openModal);

  return (
    <section
      id="leadership"
      className="max-w-[1440px] mx-auto border-t border-[rgba(175,208,222,0.11)]"
      style={{ padding: "72px clamp(24px,5vw,80px)" }}
      aria-labelledby="team-heading"
    >
      <header className="flex justify-between items-baseline gap-6 mb-11 flex-wrap">
        <h2
          id="team-heading"
          className="m-0 text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(26px,3vw,42px)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Meet the Partnership
        </h2>
        <Link
          href="/contact"
          className="font-sans text-xs uppercase text-[#e2ecf0] no-underline border border-[rgba(175,208,222,0.11)] px-4 py-2.5 transition-all hover:bg-[#f9ac43] hover:border-[#f9ac43] hover:text-[#030d15]"
          style={{ letterSpacing: "0.18em" }}
        >
          Contact the Firm →
        </Link>
      </header>

      <div
        className="grid gap-7"
        style={{ gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {partners.slice(0, 4).map((person) => (
          <article
            key={person.id}
            className="firm-team-card flex flex-col gap-3 cursor-pointer"
            onClick={() => openModal(person)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(person); } }}
            role="button"
            tabIndex={0}
            aria-label={`View ${person.name} biography`}
          >
            <div
              className="transition-all duration-400 hover:-translate-y-0.5"
              style={{
                aspectRatio: "4/5",
                backgroundImage: `url(${person.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                filter: "saturate(0.85)",
              }}
            />
            <h3
              className="m-0 text-[#e2ecf0]"
              style={{
                fontFamily: "var(--f-display)",
                fontSize: 19,
                fontWeight: 400,
                letterSpacing: "-0.005em",
              }}
            >
              {person.name}
            </h3>
            <p className="m-0 text-xs text-[#6b90a0]" style={{ letterSpacing: "0.04em" }}>
              {person.role}
            </p>
            <span
              className="firm-team-view text-xs text-[#f9ac43] font-sans"
              style={{ letterSpacing: "0.14em" }}
            >
              View bio →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
