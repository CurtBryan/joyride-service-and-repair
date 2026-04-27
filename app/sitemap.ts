import type { MetadataRoute } from "next";

import { absoluteUrl, seoAssets } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(seoAssets.primaryImage)],
    },
  ];
}
