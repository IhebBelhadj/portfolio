import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },

        // A dedicated object for syntax highlighting colors
        
        syntax: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
          keyword: "oklch(var(--sh-keyword))",
          string: "oklch(var(--sh-string))",
          function: "oklch(var(--sh-function))",
          comment: "oklch(var(--sh-comment))",
          punctuation: "oklch(var(--sh-punctuation))",
          parameter: "oklch(var(--sh-parameter))",
          property: "oklch(var(--sh-property))",
          hightlight: "oklch(var(--sh-highlight))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        DEFAULT: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
