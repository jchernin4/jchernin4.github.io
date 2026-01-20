"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
    title: string;
    startDate: string;
    endDate: string;
    link?: string;
    githubLink?: string;
    description: string;
    techStack: string[];
    image?: string;
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, projects.length]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsAutoPlaying(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="w-full group/carousel">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/50 dark:hover:border-orange-600/50 hover:shadow-xl hover:shadow-orange-500/5">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400 z-10" />

                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            {currentProject.image && (
                                <img
                                    src={currentProject.image}
                                    alt={currentProject.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all group/btn"
                        aria-label="Previous project"
                    >
                        <svg className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all group/btn"
                        aria-label="Next project"
                    >
                        <svg className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Project Counter */}
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/10">
                        <span className="text-orange-400">{currentIndex + 1}</span>
                        <span className="text-white/60"> / {projects.length}</span>
                    </div>

                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-xs font-medium tracking-wider uppercase text-orange-400 bg-orange-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-400/30">
                                    {currentProject.startDate} — {currentProject.endDate}
                                </span>
                                <h3 className="text-3xl font-bold text-white mt-3 drop-shadow-lg">
                                    {currentProject.title}
                                </h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Description Section */}
                <div className="p-8 min-h-[320px] flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex-1 flex flex-col"
                        >
                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6 flex-1">
                                {currentProject.description}
                            </p>

                            {/* Links */}
                            <div className="flex items-center gap-4 mb-6">
                                {currentProject.link && (
                                    <a
                                        href={currentProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        View Project
                                    </a>
                                )}
                                {currentProject.githubLink && (
                                    <a
                                        href={currentProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        View on GitHub
                                    </a>
                                )}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2">
                                {currentProject.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-medium rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 py-1.5 px-3 border border-stone-200 dark:border-stone-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 pb-6">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "w-8 bg-orange-500 dark:bg-orange-400"
                                    : "w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600"
                            }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Progress bar for autoplay */}
                {isAutoPlaying && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-stone-200 dark:bg-stone-800">
                        <motion.div
                            key={currentIndex}
                            className="h-full bg-orange-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
