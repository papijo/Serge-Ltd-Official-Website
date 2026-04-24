import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-start justify-center min-h-[60vh]"
      style={{ padding: "clamp(80px,10vw,140px) clamp(32px,6vw,100px)" }}
    >
      <span
        className="font-sans uppercase text-[#f9ac43] mb-6"
        style={{ fontSize: 11, letterSpacing: "0.22em" }}
      >
        404
      </span>
      <h1
        className="m-0 mb-6 text-[#e2ecf0]"
        style={{
          fontFamily: "var(--f-display)",
          fontSize: "clamp(40px,6vw,80px)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}
      >
        Page not found.
      </h1>
      <p className="mb-8 text-[#6b90a0]" style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "40ch" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 font-sans uppercase text-[#e2ecf0] no-underline border-b border-[rgba(175,208,222,0.22)] pb-2 w-fit transition-all hover:text-[#f9ac43] hover:border-[rgba(249,172,67,0.3)]"
        style={{ fontSize: 12, letterSpacing: "0.2em" }}
      >
        Return Home →
      </Link>
    </div>
  );
}
