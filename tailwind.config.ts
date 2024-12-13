import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBeige: "#F7F7F9",
        bgHeader: "#D0DFF2",
        secondaryColor: "#034AA6",
      },
      boxShadow: {
        btnBoxShadow: "5px 5px 0px rgb(3, 74, 166)",
      } // O nome boxShadow: {} é obrigatorio
    },
  },
  plugins: [],
} satisfies Config;
