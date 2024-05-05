import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{css,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [typography],
} as Config;
