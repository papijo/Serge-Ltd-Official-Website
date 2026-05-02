import type { MetadataRoute } from "next";
import { PARTNER_DATA } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://weareserge.com";
  const today = new Date("2026-05-02");

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/firm`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...PARTNER_DATA.map((p) => ({
      url: `${baseUrl}/firm/partners/${p.id}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/engagements`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
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
