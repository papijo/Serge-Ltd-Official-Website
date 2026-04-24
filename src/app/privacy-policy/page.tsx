import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SERGE collects, uses, and protects your personal information.",
  alternates: { canonical: "https://weareserge.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | SERGE",
    url: "https://weareserge.com/privacy-policy",
  },
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: [
      "We collect information you provide directly to us when you submit an enquiry through our website, request an introduction, or correspond with us by email or telephone. This includes your name, organisation, work email address, telephone number, and the nature of your enquiry.",
      "We may also collect certain technical information automatically when you visit our website, including your IP address, browser type and version, pages visited, time and date of your visit, and referring URL. This information is collected through standard server logs and analytics tools and is used solely to maintain and improve our website.",
    ],
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    body: [
      "We use the information we collect to respond to your enquiries, assess whether an engagement may be appropriate, and communicate with you regarding our services. We do not use your personal information for marketing purposes without your explicit consent.",
      "If you subscribe to our Perspectives newsletter, we use your email address solely to deliver that quarterly publication. You may unsubscribe at any time using the link included in each edition.",
      "We may use aggregated, anonymised data about website usage to analyse and improve our site. This data cannot be used to identify individual users.",
    ],
  },
  {
    id: "disclosure-of-information",
    title: "Disclosure of Information",
    body: [
      "SERGE does not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep such information confidential.",
      "We may disclose your information where required by law, regulation, or court order, or where we believe disclosure is necessary to protect the rights, property, or safety of SERGE, our clients, or others.",
      "In the event of a merger, acquisition, or reorganisation involving SERGE, personal information may be transferred as part of that transaction. We will notify you of any such change in ownership or control.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    body: [
      "Our website uses a limited number of cookies to ensure proper functionality and to analyse site traffic. Essential cookies are necessary for the operation of the site and cannot be disabled. Analytics cookies help us understand how visitors interact with our website; these may be disabled through your browser settings.",
      "We do not use advertising or tracking cookies, and we do not share cookie data with third-party advertising networks.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    body: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All correspondence sent to partners@weareserge.com is encrypted in transit.",
      "Whilst we take reasonable steps to protect your information, no transmission of data over the internet is entirely secure. We cannot guarantee the security of information transmitted to our website and you do so at your own risk.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    body: [
      "We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, to comply with our legal obligations, and to resolve any disputes. Enquiries that do not result in an engagement are typically held for twelve months before being securely deleted.",
      "If you are a client or former client, we retain engagement-related records for a minimum of seven years in accordance with professional and legal obligations.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: [
      "Subject to applicable law, you may have the right to access the personal information we hold about you, to request correction of inaccurate data, to request deletion of your information, to object to or restrict our processing of your data, and to receive your data in a portable format.",
      "To exercise any of these rights, please contact us at partners@weareserge.com. We will respond to all legitimate requests within thirty days. In certain circumstances, we may need to verify your identity before processing your request.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently. The inclusion of a link does not imply endorsement by SERGE.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated effective date. Your continued use of our website following any changes constitutes your acceptance of the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:",
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
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
          Privacy Policy
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
        SERGE Advisory Partners (&ldquo;SERGE&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) is committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, disclose, and safeguard information when you visit
        weareserge.com or contact us through any means. Please read it carefully.
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
                >
                  {para}
                </p>
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
