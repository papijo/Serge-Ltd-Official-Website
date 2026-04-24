import Link from "next/link";

export function FirmMarquee() {
  return (
    <section
      className="overflow-hidden border-t border-[rgba(175,208,222,0.11)]"
      style={{ padding: "52px 0 72px" }}
      aria-label="Let's Talk"
    >
      <Link
        href="/contact"
        className="flex items-center gap-11 whitespace-nowrap no-underline text-[#e2ecf0] animate-marquee transition-colors hover:text-[#f9ac43]"
        style={{
          fontFamily: "var(--f-display)",
          fontStyle: "italic",
          fontSize: "clamp(44px,8.5vw,130px)",
          letterSpacing: "-0.02em",
        }}
        aria-label="Contact us — Let's Talk"
      >
        {Array(10).fill(null).map((_, i) => (
          <span key={i} className="inline-flex items-center gap-11">
            <span>Let&rsquo;s Talk</span>
            <span
              className="text-[#f9ac43]"
              style={{ fontStyle: "normal", fontSize: "0.44em", verticalAlign: "middle" }}
              aria-hidden="true"
            >
              ●
            </span>
          </span>
        ))}
      </Link>
    </section>
  );
}
