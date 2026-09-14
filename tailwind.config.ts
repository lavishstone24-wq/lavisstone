import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0B0B0B",
          charcoal: "#171513",
          card: "#141210",
          border: "#2A2723",
          gold: "#C9A24A",
          "gold-light": "#E0C47A",
          "gold-dark": "#9A7A30",
          ivory: "#F5F1E8",
          stone: "#EAE5D9",
          muted: "#8E887F",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E0C47A 0%, #C9A24A 50%, #9A7A30 100%)",
        "dark-gradient": "linear-gradient(180deg, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.98) 100%)",
        "stone-texture": "radial-gradient(ellipse at top, #1c1a17, #0b0b0b)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(201, 162, 74, 0.25)",
        "gold-glow-lg": "0 0 40px -5px rgba(201, 162, 74, 0.35)",
        "luxury-card": "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
