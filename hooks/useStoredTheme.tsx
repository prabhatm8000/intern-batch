"use client";
import type { ThemeType } from "@/components/ThemeBtn";
import { useEffect, useState } from "react";

const useStoredTheme = () => {
    const getSystemTheme = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const getValidTheme = (theme: string | null): ThemeType => {
        if (theme === "light" || theme === "dark") {
            return theme;
        }
        return getSystemTheme();
    };

    const [theme, setTheme] = useState<ThemeType>();

    useEffect(() => {
        setTheme(getValidTheme(localStorage.getItem("theme")));
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return { theme, setTheme, getSystemTheme };
};

export default useStoredTheme;
