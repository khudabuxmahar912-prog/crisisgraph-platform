import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#07111F",
          secondary: "#0B192B",
        },
        electricCyan: "#00D4FF",
        emeraldGreen: "#10B981",
        warningAmber: "#F59E0B",
        criticalRed: "#EF4444",
      },
    },
  },
  plugins: [],
};
export default config;