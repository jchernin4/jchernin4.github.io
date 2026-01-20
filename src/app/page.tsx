"use client";

import { useState, useEffect } from "react";
import InteractiveBackground from "@/components/interactive-background/InteractiveBackground";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";
import AboutSection from "@/components/about-section/AboutSection";
import ExperienceSection from "@/components/experience-section/ExperienceSection";
import ProjectsSection from "@/components/projects-section/ProjectsSection";
import SkillsSection from "@/components/skills-section/SkillsSection";

export default function Home() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <InteractiveBackground />
            <Navbar />

            <main className="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 relative z-10">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
            </main>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-4 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-full shadow-lg hover:bg-stone-700 dark:hover:bg-stone-200 transition-all duration-300 hover:scale-110 ${
                    showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </>
    );
}
