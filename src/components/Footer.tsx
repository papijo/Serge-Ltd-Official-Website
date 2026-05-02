"use client";

import Link from "next/link";
import { LogoMark } from "@/components/icons/LogoMark";

export function Footer() {
  return (
    <footer
      className="relative border-t flex flex-col justify-between"
      style={{
        background: "#030d15",
        borderColor: "rgba(175,208,222,0.11)",
        minHeight: "60vh",
        padding:
          "clamp(60px,8vw,100px) clamp(32px,5vw,80px) clamp(28px,4vw,48px)",
      }}
    >
      {/* Amber gradient accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0"
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #f9ac43, transparent)",
          opacity: 0.35,
        }}
      />

      {/* Main 3-column grid */}
      <div
        className="footer-main-grid grid items-start"
        style={{
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "clamp(40px,5vw,60px)",
        }}
      >
        {/* Col 1: Large wordmark */}
        <div>
          <div style={{ width: "clamp(110px,16vw,240px)" }}>
            <LogoMark className="w-full h-auto block" />
          </div>
        </div>

        {/* Col 2: Index nav + Offices */}
        <div className="flex flex-col gap-0">
          <span
            className="font-sans font-semibold uppercase"
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              color: "rgba(226,236,240,0.9)",
              marginBottom: 8,
            }}
          >
            Index
          </span>
          <nav className="flex flex-col">
            {[
              { label: "Capabilities", href: "/services" },
              { label: "Engagements", href: "/engagements" },
              { label: "The Firm", href: "/firm" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="footer-nav-link no-underline block"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(20px,1.6vw,26px)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: "rgba(226,236,240,0.88)",
                  padding: "4px 0",
                  opacity: 0.88,
                  transition: "opacity 0.3s, color 0.3s",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span
            className="font-sans font-semibold uppercase"
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              color: "rgba(226,236,240,0.9)",
              marginTop: 24,
              marginBottom: 8,
            }}
          >
            Offices
          </span>
          <span
            className="font-sans"
            style={{
              fontSize: 14,
              color: "rgba(226,236,240,0.78)",
              letterSpacing: "0.04em",
            }}
          >
            Abuja · Benin
          </span>
        </div>

        {/* Col 3: Engagements / contact */}
        <div className="flex flex-col gap-0">
          <span
            className="font-sans font-semibold uppercase"
            style={{
              fontSize: 12,
              letterSpacing: "0.16em",
              color: "rgba(226,236,240,0.9)",
              marginBottom: 8,
            }}
          >
            Engagements
          </span>
          <a
            href="mailto:hello@weareserge.com"
            className="footer-email-link no-underline w-fit"
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(22px,1.7vw,30px)",
              letterSpacing: "-0.01em",
              color: "rgba(226,236,240,0.92)",
              borderBottom: "1px solid rgba(175,208,222,0.11)",
              paddingBottom: 6,
              display: "inline-block",
              transition: "color 0.3s, border-color 0.3s",
            }}
          >
            hello@weareserge.com
          </a>
          <Link
            href="/contact"
            className="footer-cta-link inline-flex items-center gap-2 font-sans font-semibold uppercase no-underline"
            style={{
              marginTop: 24,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "11px 14px",
              fontSize: 12,
              letterSpacing: "0.18em",
              width: "fit-content",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Request an Introduction <span>→</span>
          </Link>
        </div>
      </div>

      {/* Footer base */}
      <div
        className="footer-base-row flex items-center justify-between flex-wrap gap-3 border-t"
        style={{
          marginTop: "clamp(40px,6vw,60px)",
          paddingTop: 24,
          borderColor: "rgba(175,208,222,0.11)",
          opacity: 0.5,
        }}
      >
        <div className="inline-flex items-center gap-5">
          <Link
            href="/privacy-policy"
            className="footer-legal-link no-underline"
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(226,236,240,0.85)",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="footer-legal-link no-underline"
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(226,236,240,0.85)",
            }}
          >
            Terms and Conditions
          </Link>
        </div>
        <div className="inline-flex items-center gap-2.5">
          <div style={{ width: "clamp(26px,2.2vw,38px)" }}>
            <LogoMark className="w-full h-auto block" />
          </div>
          <span
            className="font-sans uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "rgba(226,236,240,0.88)",
            }}
          >
            © {new Date().getFullYear()} Serge Ltd. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
