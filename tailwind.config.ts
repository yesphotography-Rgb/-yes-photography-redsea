import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        dark: "#0b0b0b",
        accent: "#1e1e1e"
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #050505 0%, #111827 100%)'
      }
    }
  },
  plugins: []
};
export default config;
