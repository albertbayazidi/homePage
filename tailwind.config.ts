import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: {
          light: "#eef5fc",
          dark: "#0d1117",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
