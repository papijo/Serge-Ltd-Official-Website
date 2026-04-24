import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { PartnerModal } from "@/components/PartnerModal";
import { RevealObserver } from "@/components/RevealObserver";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serge.firm"),
  title: {
    default: "SERGE | Brilliantly evolve",
    template: "%s | SERGE",
  },
  description:
    "SERGE is a sovereign advisory practice for executives, boards, and government. We guide institutions through decisions that endure — across corporate strategy, digital transformation, and data governance.",
  keywords: [
    "strategic advisory",
    "corporate consulting",
    "digital transformation",
    "institutional advisory",
    "governance",
    "executive advisory",
    "government consulting",
    "data strategy",
    "board advisory",
  ],
  authors: [{ name: "SERGE" }],
  creator: "SERGE",
  publisher: "SERGE",
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
    url: "https://serge.firm",
    siteName: "SERGE",
    title: "SERGE | Brilliantly evolve",
    description:
      "A sovereign advisory practice for executives, boards, and government. Institutional complexity resolved with discipline.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SERGE — Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SERGE | Brilliantly evolve",
    description:
      "A sovereign advisory practice for executives, boards, and government.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://serge.firm",
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
              "@type": "Organization",
              name: "SERGE",
              description:
                "A sovereign advisory practice for executives, boards, and government.",
              url: "https://serge.firm",
              foundingDate: "2015",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "399 Park Avenue",
                  addressLocality: "New York",
                  addressRegion: "NY",
                  postalCode: "10022",
                  addressCountry: "US",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-212-000-0000",
                email: "partners@serge.firm",
                contactType: "business",
              },
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

        <main id="main-content" className="relative z-[1]" style={{ paddingTop: 76 }}>
          {children}
        </main>

        <RevealObserver />
        <Newsletter />
        <Footer />
        <PartnerModal />
      </body>
    </html>
  );
}
