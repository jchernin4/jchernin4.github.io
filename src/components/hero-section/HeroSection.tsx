"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="home" className="flex flex-col justify-center items-center w-full max-w-5xl min-h-screen relative overflow-hidden">
            {/* Decorative accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-orange-500 rounded-full opacity-10 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-glow-pulse pointer-events-none" />

            {mounted && (
                <div className="relative z-10 text-center">
                    {/* Overline */}
                    <div className="flex items-center justify-center gap-3 mb-6 opacity-0 animate-fade-in">
                        <div className="w-12 h-px bg-orange-600 dark:bg-orange-400" />
                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-500 dark:text-stone-400">
                            Software Developer
                        </span>
                        <div className="w-12 h-px bg-orange-600 dark:bg-orange-400" />
                    </div>

                    {/* Main Name */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-stone-900 dark:text-stone-50 opacity-0 animate-slide-up">
                        Jeremy <span className="gradient-text">Chernin</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-8 text-lg sm:text-xl text-stone-500 dark:text-stone-400 max-w-md mx-auto opacity-0 animate-fade-in delay-400">
                        Computer Science Student at{" "}
                        <span className="text-stone-900 dark:text-stone-50 font-medium">Penn State University</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 animate-slide-up delay-500">
                        <a
                            href="/Jeremy Chernin - Master Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-semibold overflow-hidden transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Resume
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-orange-600 dark:bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 border-2 border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-50 font-semibold hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            )}

            {/* Scroll indicator - positioned relative to section, not content */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
                <div className="flex flex-col items-center gap-2 text-stone-500 dark:text-stone-400">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-stone-400 dark:from-stone-500 to-transparent animate-float" />
                </div>
            </div>
        </section>
    );
}
