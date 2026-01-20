"use client";

import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-3 sm:mx-6 lg:mx-8 mt-3 sm:mt-4">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full backdrop-blur-md bg-white/70 dark:bg-stone-900/70 border border-stone-200/50 dark:border-stone-700/50 shadow-lg shadow-stone-900/5 dark:shadow-stone-900/20">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#home" className="group flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                                Jeremy Chernin
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-all"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="w-px h-6 bg-stone-200 dark:bg-stone-700 mx-2" />
                            <ThemeToggle />
                        </div>

                        {/* Mobile Controls */}
                        <div className="md:hidden flex items-center gap-1">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-all"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-2 max-w-5xl mx-auto">
                        <div className="px-4 py-4 rounded-2xl backdrop-blur-md bg-white/70 dark:bg-stone-900/70 border border-stone-200/50 dark:border-stone-700/50 shadow-lg">
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className="px-4 py-3 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition-all"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
