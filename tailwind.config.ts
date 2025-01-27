import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        largeTab: "1620px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenDark: "#224F34",
        lime: "#C2EFD4",
        grayLight: "#454545",
        green: "#267D49",
      },
    },
  },
  plugins: [typography,],
} satisfies Config;
