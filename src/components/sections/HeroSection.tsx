export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col lg:grid items-start lg:items-center"
      aria-label="Hero"
      style={{
        marginTop: "-76px",
        minHeight: "100vh",
        padding: "clamp(104px,10vw,144px) clamp(24px,7vw,110px)",
        gridTemplateColumns: "minmax(0,1fr) minmax(280px,0.86fr)",
        gap: "clamp(26px,4vw,72px)",
        background: "linear-gradient(180deg, #0a5878 0%, #0a5473 52%, #0a4f6e 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 22%, rgba(255,255,255,0.06), transparent 44%), " +
            "linear-gradient(to right, rgba(231,239,242,0.065) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(231,239,242,0.065) 1px, transparent 1px)",
          backgroundSize: "auto, 176px 100%, 100% 124px",
          maskImage:
            "radial-gradient(circle at 50% 45%, #000 30%, rgba(0,0,0,0.72) 72%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 45%, #000 30%, rgba(0,0,0,0.72) 72%, transparent 100%)",
        }}
      />

      {/* Large background brand mark */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[1]"
        style={{
          right: "clamp(-110px,-5vw,-44px)",
          bottom: "clamp(-90px,-7vw,-34px)",
          width: "clamp(560px,58vw,1120px)",
          opacity: 0.2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/serge-logo-white.svg" alt="" className="w-full h-auto block" />
      </div>

      {/* Left: hero content */}
      <div
        className="relative z-[2] flex flex-col items-start"
        style={{ paddingTop: "clamp(20px,2.4vw,32px)" }}
      >
        {/* Top rule */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-px"
          style={{ width: "66.67%", background: "rgba(229,236,239,0.62)" }}
        />

        <h1
          className="m-0"
          style={{
            fontFamily: "var(--f-display)",
            fontWeight: 400,
            color: "#e5ecef",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ display: "block", fontSize: "clamp(72px,11vw,166px)" }}>Brilliantly</span>
          <span style={{ display: "block", fontSize: "clamp(72px,11vw,166px)" }}>evolve</span>
        </h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/serge-dots.svg"
          alt=""
          aria-hidden="true"
          style={{
            marginTop: "clamp(20px,2.8vw,34px)",
            width: "clamp(110px,10vw,160px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Right: wordmark */}
      <figure className="m-0 justify-self-end self-center z-[2]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/serge-wordmark-white.svg"
          alt="Serge Ltd"
          style={{
            width: "clamp(220px,25vw,430px)",
            height: "auto",
            display: "block",
          }}
        />
      </figure>
    </section>
  );
}
