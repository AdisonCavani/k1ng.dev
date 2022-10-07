import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./config";

// https://astro.build/config
export default defineConfig({
  srcDir: ".",
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => page != `${SITE_URL}/admin/`,
    }),
    tailwind(),
  ],
});
