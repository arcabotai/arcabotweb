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
        bg: "#06090f",
        "bg-elevated": "#0c1220",
        "bg-card": "#111827",
        "bg-card-hover": "#1a2540",
        "border": "rgba(245, 158, 11, 0.08)",
        "border-hover": "rgba(245, 158, 11, 0.25)",
        "text": "#f1f5f9",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
        "accent": "#f59e0b",
        "accent-hover": "#fbbf24",
        "gold": "#fbbf24",
        "green": "#22c55e",
        "blue": "#3b82f6",
        "red": "#ef4444",
        "purple": "#8b5cf6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        pulse: "pulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(34,197,94,0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;