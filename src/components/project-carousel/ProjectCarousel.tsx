"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";

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

                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={`project-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ProjectCard project={currentProject} />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-48 sm:top-56 md:top-64 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all group/btn z-20"
                    aria-label="Previous project"
                >
                    <svg className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-48 sm:top-56 md:top-64 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all group/btn z-20"
                    aria-label="Next project"
                >
                    <svg className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Project Counter */}
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 z-20">
                    <span className="text-orange-400">{currentIndex + 1}</span>
                    <span className="text-white/60"> / {projects.length}</span>
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
                            key={`progress-${currentIndex}`}
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
