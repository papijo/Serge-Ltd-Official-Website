import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { RevealObserver } from "@/components/RevealObserver";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weareserge.com"),
  title: {
    default: "Serge",
    template: "Serge | %s",
  },
  description:
    "Serge Ltd is a global consulting and technology firm working with corporations, governments, political organisations, and growing businesses across technology, strategy, and communications.",
  keywords: [
    "consulting",
    "technology",
    "strategy",
    "communications",
    "digital transformation",
    "brand",
    "software engineering",
    "advisory",
    "public affairs",
    "organisational development",
  ],
  authors: [{ name: "Serge Ltd" }],
  creator: "Serge Ltd",
  publisher: "Serge Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weareserge.com",
    siteName: "Serge Ltd",
    title: "Serge Ltd",
    description:
      "A global consulting and technology firm — helping organisations build, transform, communicate, and compete.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Serge Ltd — Global Consulting & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serge Ltd",
    description:
      "A global consulting and technology firm across technology, strategy, and communications.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://weareserge.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061c28",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://weareserge.com/#organization",
                  name: "Serge Ltd",
                  alternateName: ["Serge", "Serge Consulting", "Serge Design"],
                  description:
                    "Serge Ltd is a global consulting and technology firm offering services across technology, strategy, and communications for corporations, governments, political organisations, and growing businesses.",
                  url: "https://weareserge.com",
                  areaServed: [
                    "Worldwide",
                    "Nigeria",
                    "United Kingdom",
                    "United States",
                    "Europe",
                  ],
                  knowsAbout: [
                    "Technology Consulting",
                    "Digital Transformation",
                    "Software Engineering",
                    "Corporate Strategy",
                    "Brand Communications",
                    "Political Communications",
                    "Public Relations",
                    "Organisational Development",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://weareserge.com/#website",
                  name: "Serge Ltd",
                  url: "https://weareserge.com",
                  publisher: { "@id": "https://weareserge.com/#organization" },
                },
                {
                  "@type": "Service",
                  name: "Technology & Digital Innovation",
                  description:
                    "Custom software engineering, web development, product design, digital transformation, data analytics, and technology training for corporations and governments.",
                  provider: { "@id": "https://weareserge.com/#organization" },
                  serviceType: "Technology Consulting",
                  url: "https://weareserge.com/services#cap-01",
                  areaServed: "Worldwide",
                },
                {
                  "@type": "Service",
                  name: "Strategy & Advisory",
                  description:
                    "Corporate strategy, advisory, public relations, and organisational development for executives, boards, and political organisations.",
                  provider: { "@id": "https://weareserge.com/#organization" },
                  serviceType: "Management Consulting",
                  url: "https://weareserge.com/services#cap-02",
                  areaServed: "Worldwide",
                },
                {
                  "@type": "Service",
                  name: "Brand & Communications",
                  description:
                    "Brand strategy, social media management, print consulting, political communications, and media coaching for organisations that need to be heard.",
                  provider: { "@id": "https://weareserge.com/#organization" },
                  serviceType: "Communications Consulting",
                  url: "https://weareserge.com/services#cap-03",
                  areaServed: "Worldwide",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <div className="bg-atmosphere" aria-hidden="true" />
        <div className="bg-texture" aria-hidden="true" />
        <div className="gl-overlay" aria-hidden="true" />
        <div className="viewport-border" aria-hidden="true" />

        <Navigation />

        <main
          id="main-content"
          className="relative z-[1]"
          style={{ paddingTop: 76 }}
        >
          {children}
        </main>

        <RevealObserver />
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
