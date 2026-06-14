import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4EFE7",
        paper2: "#EEE8DD",
        card: "#F0EAE0",
        ink: "#1C1A17",
        inksoft: "#6B665D",
        inkfaint: "#A29C90",
        rust: "#BE4A2B",
        green: "#3F8F5B",
        line: "rgba(28,26,23,0.13)",
        linesoft: "rgba(28,26,23,0.07)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
