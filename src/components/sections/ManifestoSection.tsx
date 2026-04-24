export function ManifestoSection() {
  return (
    <section
      className="relative overflow-hidden border-t"
      aria-label="Manifesto"
      style={{
        background: "var(--serge-bg-deep)",
        borderColor: "rgba(175,208,222,0.11)",
      }}
    >
      {/* Film grain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "160px 160px",
          mixBlendMode: "overlay",
        }}
      />
      <div
        className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center"
        style={{
          gap: "clamp(36px,5vw,60px)",
          padding: "clamp(80px,12vw,180px) clamp(32px,6vw,100px)",
        }}
      >
        <span
          aria-hidden="true"
          className="block w-20 h-0.5"
          style={{ background: "linear-gradient(90deg, #f9ac43, #ff7b2e)" }}
        />

        <p
          className="m-0"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(52px,8vw,136px)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 0.94,
            color: "#e2ecf0",
          }}
        >
          We translate
          <br />
          <em style={{ fontStyle: "italic", color: "#f9ac43" }}>complexity</em>
          <br />
          into execution.
        </p>

        <div className="flex flex-col gap-2.5 opacity-55">
          {[
            "Where the decision is consequential.",
            "Where the outcome must be measurable.",
            "Where the work does not end at the deck.",
          ].map((line) => (
            <span
              key={line}
              className="font-sans text-[#e2ecf0]"
              style={{ fontSize: "clamp(14px,1.1vw,18px)", letterSpacing: "0.06em" }}
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
