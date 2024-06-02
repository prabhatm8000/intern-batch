import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["selector"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./data/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                ClashDisplayBold: ["ClashDisplayBold"],
                ClashDisplayMedium: ["ClashDisplayMedium"],
                ClashDisplaySemibold: ["ClashDisplaySemibold"],
            },
            colors: {
                ascent: "#FF5555",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
            animation: {
                "marquee-infinite": "marquee 25s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
