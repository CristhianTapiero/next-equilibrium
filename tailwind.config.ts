import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eq_green:{
          100: "#227345",
          200: "#7A8C51",
          300: "#034001",
          400: "#25594B",
          500: "#022601",
        },
        eq_neutral: {
          100: "#F1F1F1",
          200: "#F2F2F2",
          300: "#8C8C8C",
          400: "#595959",
          500: "#404040",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
