import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), tailwind()],
});
