/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#167DB7",
        accent: "#FE5230",
        "ij-black": "#212121",
        "ij-red": "#FF421C",
        "ij-green": "#00A550",
        "ij-blue": "#E8F2F8",
        "ij-yellow": "#EFA500",
      },
      backgroundImage: {
        "hero-pattern": "url(/hero-pattern.webp)",
        "kings-league": "url(/kings-league-info.webp)",
      },
      borderRadius: {
        "4xl": "3rem",
      },
      letterSpacing: {
        separated: "0.35px",
      },
    },
  },
  plugins: [],
};