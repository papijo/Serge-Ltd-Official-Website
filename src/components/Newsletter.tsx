"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="relative border-t"
      style={{
        background: "#030d15",
        borderColor: "rgba(175,208,222,0.11)",
        zIndex: 2,
      }}
      aria-label="Newsletter signup"
    >
      {/* Amber gradient accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0"
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, #f9ac43 30%, #ff7b2e 70%, transparent 100%)",
          opacity: 0.45,
        }}
      />

      <div
        className="newsletter-inner-grid max-w-[1400px] mx-auto grid items-center"
        style={{
          padding: "clamp(52px,7vw,96px) clamp(32px,6vw,100px)",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: "clamp(40px,6vw,100px)",
        }}
      >
        {/* Left: text */}
        <div className="flex flex-col gap-4">
          <span
            className="font-sans uppercase text-[#ff7b2e]"
            style={{ fontSize: 11, letterSpacing: "0.24em" }}
          >
            Perspectives
          </span>
          <h2
            className="m-0 text-[#e2ecf0]"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(26px,3.2vw,48px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
            }}
          >
            Institutional intelligence,
            <br />
            delivered quarterly.
          </h2>
          <p
            className="m-0"
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: "clamp(14px,1.1vw,18px)",
              lineHeight: 1.6,
              color: "rgba(226,236,240,0.72)",
              maxWidth: "40ch",
            }}
          >
            Selected insights on strategy, governance, and institutional
            performance — written by our partners. No marketing. No noise.
          </p>
        </div>

        {/* Right: form */}
        {submitted ? (
          <div
            className="font-sans text-sm"
            style={{ color: "#2da68a", letterSpacing: "0.04em" }}
          >
            ✓ You&apos;re subscribed. Thank you.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email address"
                required
                aria-label="Email address"
                className="flex-1 font-sans outline-none placeholder:text-[#6b90a0]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(175,208,222,0.22)",
                  borderRight: 0,
                  padding: "14px 20px",
                  fontSize: 14,
                  color: "#e2ecf0",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "#f9ac43")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(175,208,222,0.22)")
                }
              />
              <button
                type="submit"
                className="font-sans font-semibold uppercase whitespace-nowrap"
                style={{
                  background: "#ff7b2e",
                  color: "#fff",
                  border: "1px solid #ff7b2e",
                  padding: "14px 22px",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  cursor: "pointer",
                  transition: "background 0.25s, border-color 0.25s",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#f9ac43";
                  (e.currentTarget as HTMLElement).style.borderColor = "#f9ac43";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ff7b2e";
                  (e.currentTarget as HTMLElement).style.borderColor = "#ff7b2e";
                }}
              >
                Subscribe →
              </button>
            </div>
            <p
              className="m-0 font-sans uppercase text-[#6b90a0]"
              style={{ fontSize: 11, letterSpacing: "0.1em" }}
            >
              Quarterly dispatch only. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
