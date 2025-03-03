import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-primary': '#DCF8FA',
        'custom-secondary': '#FAE8DC',
        'custom-primary-2': '#7DB6BA',
        'custom-secondary-2': '#A57C61',
        'custom-primary-3': '#33767A',
        'custom-secondary-3': '#502C14',
      },
    },
  },
  plugins: [],
} satisfies Config;
