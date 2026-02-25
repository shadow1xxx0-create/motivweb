import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://getilham.com",
      lastModified: "2026-02-25",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
