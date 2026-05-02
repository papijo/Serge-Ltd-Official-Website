import type { MetadataRoute } from "next";
import { PARTNER_DATA } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://weareserge.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-02"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-05-02"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/firm`,
      lastModified: new Date("2026-05-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/engagements`,
      lastModified: new Date("2026-05-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-05-02"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...PARTNER_DATA.map((p) => ({
      url: `${baseUrl}/firm/partners/${p.id}`,
      lastModified: new Date("2026-05-02"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
