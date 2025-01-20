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
        accent: '#52b788'
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
