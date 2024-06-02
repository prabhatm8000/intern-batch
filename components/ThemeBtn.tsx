"use client";

import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

type ThemeType = "light" | "dark" | "system" | null;

const ThemeBtn = () => {
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

    const [theme, setTheme] = useState<ThemeType>(
        getValidTheme(localStorage.getItem("theme"))
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleTheme = (value: ThemeType) => {
        if (value === "light") {
            localStorage.theme = "light";
            setTheme("light");
        } else if (value === "dark") {
            localStorage.theme = "dark";
            setTheme("dark");
        } else {
            localStorage.removeItem("theme");
            setTheme(getSystemTheme());
        }
        setShowOptions(false);
    };

    const [showOptions, setShowOptions] = useState<boolean>(false);

    const handleShowBtn = () => {
        setShowOptions((prev) => !prev);
    };
    return (
        <div
            title="Theme"
            id="theme"
            className="relative w-fit text-sm rounded-md p-1 focus:outline-none"
        >
            <span className="cursor-pointer" onClick={handleShowBtn}>
                {theme === "dark" ? (
                    <CiDark className="size-7" />
                ) : (
                    <CiLight className="size-7" />
                )}
            </span>
            <div
                className={`absolute z-30 my-1 p-2 top-full right-0 ${
                    showOptions ? "flex" : "hidden"
                } flex flex-col justify-center item-center divide-y divide-gray-300 dark:divide-gray-700 border border-gray-300 dark:border-gray-700 rounded-md`}
            >
                <button
                    onClick={(e) =>
                        handleTheme(e.currentTarget.value as ThemeType)
                    }
                    value={"system"}
                    className="flex justify-center pb-1"
                >
                    System
                </button>
                <button
                    onClick={(e) =>
                        handleTheme(e.currentTarget.value as ThemeType)
                    }
                    className="flex justify-center py-1"
                    value={"light"}
                >
                    Light
                </button>
                <button
                    onClick={(e) =>
                        handleTheme(e.currentTarget.value as ThemeType)
                    }
                    className="flex justify-center pt-1"
                    value={"dark"}
                >
                    Dark
                </button>
            </div>
        </div>
    );
};

export default ThemeBtn;
