import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch — Global Consulting & Technology",
  description:
    "Get in touch with Serge Ltd, a global consulting and technology firm. Reach us about technology, strategy, or brand communications projects for your organisation.",
  alternates: { canonical: "https://weareserge.com/contact" },
  openGraph: {
    title: "Serge Ltd | Get in Touch",
    description: "Contact Serge Ltd — global consulting, technology, and communications firm serving corporations, governments, and growing businesses.",
    url: "https://weareserge.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://weareserge.com" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://weareserge.com/contact" },
            ],
          }),
        }}
      />
      <section
      className="max-w-[860px] mx-auto flex flex-col justify-center"
      style={{
        padding: "clamp(120px,14vw,180px) 48px",
        minHeight: "calc(100vh - 200px)",
        gap: 44,
      }}
      aria-labelledby="contact-heading"
    >
      <header className="flex flex-col gap-5">
        <span
          className="font-sans font-semibold uppercase text-[#6b90a0]"
          style={{ fontSize: 11, letterSpacing: "0.22em" }}
        >
          Contact
        </span>
        <h1
          id="contact-heading"
          className="m-0 text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(26px,3.8vw,52px)",
            fontWeight: 400,
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            maxWidth: "22ch",
          }}
        >
          Get in touch
          <br />
          with Serge Ltd.
        </h1>
      </header>

      <hr className="border-0 border-t border-[rgba(175,208,222,0.11)] m-0" />

      <div
        className="grid gap-11"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div className="flex flex-col gap-2">
          <span
            className="font-sans uppercase text-[#6b90a0] mb-2"
            style={{ fontSize: 11, letterSpacing: "0.22em" }}
          >
            Direct
          </span>
          <a
            href="mailto:partners@serge.firm"
            className="text-sm text-[rgba(226,236,240,0.7)] no-underline transition-colors hover:text-[#f9ac43]"
          >
            partners@serge.firm
          </a>
          <a
            href="tel:+12120000000"
            className="text-sm text-[rgba(226,236,240,0.7)] no-underline transition-colors hover:text-[#f9ac43]"
          >
            +1 212 000 0000
          </a>
          <p className="m-0 mt-1 text-xs text-[#6b90a0]">Confidential — encrypted in transit.</p>
        </div>
        <div className="flex flex-col gap-2">
          <span
            className="font-sans uppercase text-[#6b90a0] mb-2"
            style={{ fontSize: 11, letterSpacing: "0.22em" }}
          >
            Offices
          </span>
          <p className="m-0 text-sm text-[rgba(226,236,240,0.7)]">
            New York <em className="not-italic text-[#6b90a0]">— Headquarters</em>
          </p>
          <p className="m-0 text-sm text-[rgba(226,236,240,0.7)]">
            London <em className="not-italic text-[#6b90a0]">— EMEA</em>
          </p>
          <p className="m-0 text-sm text-[rgba(226,236,240,0.7)]">
            Singapore <em className="not-italic text-[#6b90a0]">— APAC</em>
          </p>
        </div>
      </div>

      <hr className="border-0 border-t border-[rgba(175,208,222,0.11)] m-0" />

      <ContactForm />
    </section>
    </>
  );
}
