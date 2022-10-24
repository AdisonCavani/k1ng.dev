/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "src/styles/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
