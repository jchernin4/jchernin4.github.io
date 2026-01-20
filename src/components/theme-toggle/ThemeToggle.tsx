"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
        if (stored) {
            setTheme(stored);
            applyTheme(stored);
        }
    }, []);

    const applyTheme = (newTheme: "light" | "dark" | "system") => {
        const root = document.documentElement;
        if (newTheme === "system") {
            root.classList.remove("light", "dark");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.add(prefersDark ? "dark" : "light");
        } else {
            root.classList.remove("light", "dark");
            root.classList.add(newTheme);
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    if (!mounted) {
        return (
            <button
                className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
            aria-label={`Current theme: ${theme}. Click to toggle.`}
            title={`Theme: ${theme}`}
        >
            {theme === "light" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )}
            {theme === "dark" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
            {theme === "system" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )}
        </button>
    );
}
