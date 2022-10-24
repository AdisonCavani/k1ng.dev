import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import { SITE_URL } from "./src/config";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap(),
    tailwind(),
    react(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
  ],
});
