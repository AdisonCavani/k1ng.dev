import { SITE_URL } from "config";
import type { MetadataRoute } from "next";

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}

export default robots;
