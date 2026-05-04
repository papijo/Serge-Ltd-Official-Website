import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PARTNER_DATA } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return PARTNER_DATA.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const partner = PARTNER_DATA.find((p) => p.id === id);
  if (!partner) return {};

  const firstParagraph = partner.bio ? partner.bio.split("\n\n")[0] : "";
  const description = firstParagraph
    ? firstParagraph.slice(0, 155) + (firstParagraph.length > 155 ? "…" : "")
    : `${partner.name} is ${partner.role} at Serge Ltd — a multidisciplinary consulting and technology firm.`;

  return {
    title: `${partner.name} — ${partner.role}`,
    description,
    alternates: { canonical: `https://weareserge.com/firm/partners/${partner.id}` },
    openGraph: {
      title: `${partner.name} | Serge Ltd`,
      description,
      url: `https://weareserge.com/firm/partners/${partner.id}`,
    },
  };
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const partner = PARTNER_DATA.find((p) => p.id === id);
  if (!partner) notFound();

  const paragraphs = partner.bio ? partner.bio.split("\n\n") : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: partner.name,
            jobTitle: partner.role,
            worksFor: {
              "@type": "Organization",
              "@id": "https://weareserge.com/#organization",
              name: "Serge Ltd",
            },
            url: `https://weareserge.com/firm/partners/${partner.id}`,
          }),
        }}
      />

      <section
        className="max-w-[1280px] mx-auto"
        style={{ padding: "clamp(56px,7vw,100px) clamp(24px,5vw,80px) 100px" }}
      >
        <Link
          href="/firm#leadership"
          className="inline-flex items-center gap-2 font-sans uppercase text-[#6b90a0] no-underline hover:text-[#e2ecf0] transition-colors mb-14"
          style={{ fontSize: 11, letterSpacing: "0.22em" }}
        >
          ← The Firm
        </Link>

        <div
          className="flex flex-col md:grid gap-12 mb-16"
          style={{ gridTemplateColumns: "280px 1fr", alignItems: "start" }}
        >
          <div
            className="overflow-hidden border border-[rgba(175,208,222,0.11)] w-full max-w-[280px]"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src={partner.photo}
              alt={partner.name}
              width={280}
              height={350}
              className="w-full h-full object-cover object-top"
              style={{ filter: "saturate(0.88)" }}
              priority
            />
          </div>

          <div className="flex flex-col gap-5 pt-2">
            <div>
              <span
                className="block mb-3 font-sans font-semibold uppercase text-[#ff7b2e]"
                style={{ fontSize: 11, letterSpacing: "0.24em" }}
              >
                The Partnership
              </span>
              <h1
                className="m-0 mb-3 text-[#e2ecf0]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(28px,3.4vw,50px)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.1,
                }}
              >
                {partner.name}
              </h1>
              <p
                className="m-0 font-sans uppercase text-[#f9ac43]"
                style={{ fontSize: 11, letterSpacing: "0.18em" }}
              >
                {partner.role}
              </p>
            </div>

            {paragraphs.length > 0 && (
              <>
                <hr className="border-0 border-t border-[rgba(175,208,222,0.11)] m-0" />
                <p
                  className="m-0 text-[#6b90a0]"
                  style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7, maxWidth: "56ch" }}
                >
                  {paragraphs[0]}
                </p>
              </>
            )}
          </div>
        </div>

        {paragraphs.length > 1 && (
          <div
            className="border-t border-[rgba(175,208,222,0.11)] pt-12 flex flex-col gap-6"
            style={{ maxWidth: "72ch" }}
          >
            {paragraphs.slice(1).map((para, i) => (
              <p
                key={i}
                className="m-0 text-[#6b90a0]"
                style={{ fontSize: "clamp(15px,1.1vw,18px)", lineHeight: 1.7 }}
              >
                {para}
              </p>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
