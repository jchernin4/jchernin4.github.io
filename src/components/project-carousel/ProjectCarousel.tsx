"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
    title: string;
    startDate: string;
    endDate: string;
    link?: string;
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
        <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
                {/* Image Section */}
                <div className="relative h-96 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-stone-900/90 hover:bg-white dark:hover:bg-stone-900 rounded-full p-3 transition-all shadow-lg"
                        aria-label="Previous project"
                    >
                        <svg className="w-6 h-6 text-stone-900 dark:text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-stone-900/90 hover:bg-white dark:hover:bg-stone-900 rounded-full p-3 transition-all shadow-lg"
                        aria-label="Next project"
                    >
                        <svg className="w-6 h-6 text-stone-900 dark:text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Project Counter */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {currentIndex + 1} / {projects.length}
                    </div>
                </div>

                {/* Description Section */}
                <div className="p-8 min-h-[360px] flex flex-col">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 flex flex-col"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                                <div className="flex items-center gap-2">
                                    {currentProject.link ? (
                                        <a
                                            href={currentProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 group"
                                        >
                                            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                                                {currentProject.title}
                                            </h3>
                                            <svg className="w-5 h-5 text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                                            {currentProject.title}
                                        </h3>
                                    )}
                                </div>
                                <p className="text-sm text-stone-500 dark:text-stone-400 whitespace-nowrap">
                                    {currentProject.startDate} - {currentProject.endDate}
                                </p>
                            </div>

                            <p className="text-stone-600 dark:text-stone-300 mb-4 flex-1">
                                {currentProject.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {currentProject.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 py-1 px-3"
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
                            className={`h-2 rounded-full transition-all ${
                                index === currentIndex
                                    ? "w-8 bg-stone-900 dark:bg-stone-50"
                                    : "w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600"
                            }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
