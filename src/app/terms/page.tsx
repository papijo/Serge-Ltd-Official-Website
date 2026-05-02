import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms and conditions governing your use of the Serge Ltd website at weareserge.com and engagement with our consulting and technology services.",
  alternates: { canonical: "https://weareserge.com/terms" },
  openGraph: {
    title: "Serge Ltd | Terms and Conditions",
    url: "https://weareserge.com/terms",
  },
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the weareserge.com website (the &ldquo;Site&rdquo;), you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Site.",
      "These Terms apply to all visitors, users, and others who access or use the Site. SERGE reserves the right to modify these Terms at any time. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "nature-of-services",
    title: "Nature of Services",
    body: [
      "SERGE Advisory Partners is a sovereign advisory practice providing strategic, organisational, and data advisory services to a select number of institutional clients. The information published on this Site is for general informational purposes only and does not constitute professional advice of any kind.",
      "Nothing on this Site constitutes an offer to provide advisory services, a solicitation of business, or a binding commitment on the part of SERGE. All engagements are subject to separate written agreement following a review process conducted by a senior partner.",
    ],
  },
  {
    id: "not-legal-financial-advice",
    title: "No Legal or Financial Advice",
    body: [
      "The content published on this Site — including articles, case studies, or other materials — does not constitute legal, financial, tax, or investment advice. You should not rely on any content found on this Site as a substitute for independent professional advice appropriate to your specific circumstances.",
      "SERGE makes no representations or warranties that any information on this Site is accurate, complete, current, or suitable for any particular purpose.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      "All content on this Site — including text, graphics, logos, icons, images, and software — is the property of SERGE Advisory Partners or its content suppliers and is protected by applicable intellectual property laws.",
      "You may access, view, and print pages of this Site for personal, non-commercial reference only. You may not reproduce, republish, distribute, transmit, display, or create derivative works from any content on this Site without the prior written permission of SERGE.",
    ],
  },
  {
    id: "confidentiality",
    title: "Client Confidentiality",
    body: [
      "SERGE maintains strict confidentiality with respect to client identities and engagement details. Where client names or engagement outcomes appear on this Site, they do so only with the express consent of the relevant client or in anonymised form.",
      "All enquiries submitted through this Site are treated as confidential. We will not disclose the identity of any enquirer or the nature of their enquiry without express permission.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, SERGE, its partners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, this Site or its content.",
      "SERGE does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. You assume full responsibility for any costs associated with all necessary servicing or repairs of any equipment you use in connection with your use of the Site.",
      "Our aggregate liability to you for any claim arising out of or relating to these Terms or the Site shall not exceed one hundred US dollars (USD $100).",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: [
      "This Site may contain links to third-party websites. These links are provided solely for your convenience. SERGE has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.",
      "Inclusion of any link does not imply endorsement by SERGE of the linked site or any association with its operators.",
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited Use",
    body: [
      "You agree not to use this Site in any way that: violates any applicable local, national, or international law or regulation; is unlawful, fraudulent, or harmful; transmits any unsolicited or unauthorised advertising or promotional material; or attempts to gain unauthorised access to any part of the Site or its related systems.",
      "SERGE reserves the right to terminate or restrict your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, SERGE, or third parties.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts of the State of New York and the United States federal courts sitting in New York County for the resolution of any disputes arising under or relating to these Terms.",
      "If you are accessing this Site from outside the United States, you are responsible for compliance with local laws where they are applicable and more stringent than those described herein.",
    ],
  },
  {
    id: "severability",
    title: "Severability",
    body: [
      "If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.",
    ],
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    body: [
      "These Terms, together with our Privacy Policy, constitute the entire agreement between you and SERGE with respect to your use of this Site and supersede all prior or contemporaneous understandings regarding such subject matter.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "If you have questions regarding these Terms, please contact us at:",
    ],
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <div
      className="max-w-[860px] mx-auto"
      style={{ padding: "clamp(100px,12vw,160px) clamp(24px,5vw,48px) clamp(80px,10vw,120px)" }}
    >
      {/* Header */}
      <header className="mb-[clamp(48px,6vw,80px)] pb-[clamp(32px,4vw,48px)] border-b border-[rgba(175,208,222,0.11)]">
        <span
          className="font-sans font-semibold uppercase text-[#ff7b2e] block mb-6"
          style={{ fontSize: 11, letterSpacing: "0.24em" }}
        >
          Legal
        </span>
        <h1
          className="m-0 text-[#e2ecf0]"
          style={{
            fontFamily: "var(--f-display)",
            fontSize: "clamp(36px,5vw,72px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          Terms and Conditions
        </h1>
        <p
          className="mt-5 mb-0 text-[#6b90a0]"
          style={{ fontFamily: "var(--f-sans)", fontSize: 14, letterSpacing: "0.04em" }}
        >
          Effective date: 1 January 2025 &nbsp;·&nbsp; weareserge.com
        </p>
      </header>

      {/* Intro */}
      <p
        className="mb-[clamp(40px,5vw,64px)]"
        style={{
          fontFamily: "var(--f-sans)",
          fontSize: "clamp(16px,1.2vw,20px)",
          lineHeight: 1.7,
          color: "rgba(226,236,240,0.72)",
        }}
      >
        Please read these Terms and Conditions carefully before using this website. They set out the
        terms on which SERGE Advisory Partners (&ldquo;SERGE&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) makes this Site available to you, and the basis on
        which any enquiries or engagements are considered.
      </p>

      {/* Sections */}
      <div className="flex flex-col" style={{ gap: "clamp(40px,5vw,64px)" }}>
        {SECTIONS.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className="legal-section-grid grid items-start"
            style={{ gridTemplateColumns: "180px 1fr", gap: "clamp(24px,3vw,52px)" }}
          >
            <span
              className="font-sans font-semibold uppercase text-[#f9ac43] pt-1 sticky top-[100px]"
              style={{ fontSize: 11, letterSpacing: "0.18em", lineHeight: 1.4 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2
                className="m-0 mb-4 text-[#e2ecf0]"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(18px,1.6vw,24px)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                {section.title}
              </h2>
              {section.body.map((para, j) => (
                <p
                  key={j}
                  className="mb-4 last:mb-0"
                  style={{
                    fontFamily: "var(--f-sans)",
                    fontSize: "clamp(15px,1vw,17px)",
                    lineHeight: 1.75,
                    color: "rgba(226,236,240,0.65)",
                  }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
              {section.contact && (
                <address
                  className="not-italic mt-5 flex flex-col gap-1"
                  style={{
                    fontFamily: "var(--f-sans)",
                    fontSize: "clamp(14px,1vw,16px)",
                    lineHeight: 1.7,
                    color: "rgba(226,236,240,0.72)",
                  }}
                >
                  <span className="font-semibold text-[#e2ecf0]">SERGE Advisory Partners</span>
                  <span>399 Park Avenue, New York, NY 10022</span>
                  <a
                    href="mailto:partners@weareserge.com"
                    className="text-[#ff7b2e] no-underline hover:text-[#f9ac43] transition-colors"
                  >
                    partners@weareserge.com
                  </a>
                </address>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
