import type { MetadataRoute } from "next";

import { seoAssets, siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.themeColor,
    theme_color: siteConfig.themeColor,
    categories: ["automotive", "business", "local"],
    icons: [
      {
        src: seoAssets.brandIcon,
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Contact Joyride",
        short_name: "Contact",
        description: `Open the contact section for ${siteConfig.name}.`,
        url: "/#contact",
      },
      {
        name: "View services",
        short_name: "Services",
        description: `See the service offerings from ${siteConfig.name}.`,
        url: "/#services",
      },
    ],
  };
}
