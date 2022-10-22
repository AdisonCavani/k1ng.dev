import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import { SITE_URL } from "./config";

export default defineConfig({
  srcDir: ".",
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => page != `${SITE_URL}/admin/`,
    }),
    tailwind(),
    react(),
    solidJs(),
  ],
});
