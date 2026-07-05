import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data";

const siteUrl = "https://tudominio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((s) => ({
      url: `${siteUrl}/casos/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
