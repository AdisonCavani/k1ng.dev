import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { SITE_URL } from "./config";
import image from "@astrojs/image";

export default defineConfig({
  srcDir: ".",
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => page != `${SITE_URL}/admin/`,
    }),
    tailwind(),
    react(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
  ],
});
