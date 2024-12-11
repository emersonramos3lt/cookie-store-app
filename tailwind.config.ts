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
        bgHeader: "#F2D8E4",
        secondaryColor: "#590322",
      },
      boxShadow: {
        btnBoxShadow: "5px 5px 0px rgb(89, 3, 34)",
      } // O nome boxShadow: {} é obrigatorio
    },
  },
  plugins: [],
} satisfies Config;