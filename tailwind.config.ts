import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "anka-gradient-border":
                    "linear-gradient(109.64deg, #FA4515 56%, #D6A207 74%, #94290C 100%)",
                "anka-gradient":
                    "linear-gradient(268.64deg, rgba(16, 16, 16, 0) 0, rgba(211, 162, 55, 0.078) 60%, rgba(249, 21, 21, 0.246) 100%)",
                "profile-gradient":
                    "linear-gradient(268.64deg, rgba(16, 16, 16, 0) 0, rgba(211, 162, 55, 0.0481) 60%, rgba(228, 228, 228, 0.1517) 100%)",
                "profile-gradient-border":
                    "linear-gradient(103.64deg, rgba(246, 246, 246, 0.3) 7%, rgba(207, 51, 10, 0.3) 100%);",
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
                inter: ["var(--font-inter)"],
                workSans: ["var(--font-work-sans)"],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
