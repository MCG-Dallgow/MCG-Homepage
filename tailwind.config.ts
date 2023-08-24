import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'header': '#253726',
        'nav': '#223223',
        'dropdown': '#486b4a',
        'active': '#a2e572',
        'dropdownhover': '#405d42',
        'background': '#c5dbc1',
        'link': '#63aa30',
        'link-active': '#477625',
        'footer-link': '#81d742',
        'footer-link-active': '#72a94a',
      }
    },
  },
  plugins: [],
} satisfies Config;
