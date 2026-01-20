"use client";

import InfoCard from "@/components/project-card/InfoCard";
import Skills from "@/components/skills/Skills";
import ProjectCarousel from "@/components/project-carousel/ProjectCarousel";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import InteractiveBackground from "@/components/interactive-background/InteractiveBackground";
import { useState, useEffect } from "react";

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [mounted, setMounted] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
    ];

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show button when page is scrolled down
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Interactive Background */}
            <InteractiveBackground />

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

            <main className="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
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

                {/* About Section */}
                <section id="about" className="flex flex-col justify-center w-full max-w-4xl min-h-screen py-20">
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-900 dark:text-stone-50 mb-8">
                        About Me
                    </h2>

                    <div className="space-y-8">
                        <p className="text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
                            Hello! I&apos;m Jeremy, a student and software developer from the Greater Philadelphia area. I&apos;ve been passionate about programming since 2014, focusing on developing APIs, games, and dashboards for personal and commercial use.
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                    <span className="text-orange-600 dark:text-orange-400 font-bold">10+</span>
                                </div>
                                <span className="text-stone-600 dark:text-stone-400">Years coding</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                    <span className="text-orange-600 dark:text-orange-400 font-bold">2x</span>
                                </div>
                                <span className="text-stone-600 dark:text-stone-400">Hackathon winner</span>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://github.com/jchernin4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/jeremychernin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </section>

                <Skills />

                <section id="experience" className="flex flex-col justify-center w-full max-w-4xl min-h-screen py-20">
                    {/* Section header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-px bg-orange-600 dark:bg-orange-400" />
                            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-500 dark:text-stone-400">
                                Career
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-900 dark:text-stone-50">
                            Work Experience
                        </h2>
                        <p className="mt-4 text-lg text-stone-500 dark:text-stone-400 max-w-2xl">
                            Building real-world solutions through internships and professional experience.
                        </p>
                    </div>

                    {/* Timeline container */}
                    <div className="relative pl-2">
                        <InfoCard
                            startDate="June 2025"
                            endDate="August 2025"
                            title="Customer Solutions Consultant Intern"
                            company="Boomi"
                            location="Conshohocken, PA"
                            description="Automated structured PDF data extraction, API integrations, anomaly detection, and email routing using Boomi's AI AgentStudio and iPaaS platform, following Agile methodologies for iterative delivery. Engineered a customer support algorithm that ranks ticket urgency using 10+ metrics including ACV, ARR, and churn risk, using Java to validate data and notify technical success teams of rankings & anomalies through Slack and email integrations. Developed an AI-enhanced productivity app that won a company hackathon by extracting action items from emails and meeting transcripts, and automating follow-up tasks like sending emails or making Jira tickets using Boomi's AI."
                            techStack={["Boomi", "Java", "AI AgentStudio", "iPaaS", "Agile", "Slack API", "Jira"]}
                        />

                        <InfoCard
                            startDate="June 2024"
                            endDate="August 2024"
                            title="Product & Sales Intern"
                            company="Quench"
                            location="King of Prussia, PA"
                            description="Organized sales data through a Power BI dashboard to automate a monthly sales reporting process saving 2+ hours per request. Partnered with cross-functional teams to customize analytics ensuring the dashboard aligned with the business's needs."
                            techStack={["Power BI", "Data Analytics", "Sales Operations"]}
                        />
                    </div>
                </section>

                <section id="projects" className="flex flex-col justify-center w-full max-w-4xl min-h-screen py-20">
                    {/* Section header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-px bg-orange-600 dark:bg-orange-400" />
                            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-500 dark:text-stone-400">
                                Portfolio
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-900 dark:text-stone-50">
                            Projects
                        </h2>
                        <p className="mt-4 text-lg text-stone-500 dark:text-stone-400 max-w-2xl">
                            A collection of personal and collaborative projects spanning web development, game design, and more.
                        </p>
                    </div>

                    <ProjectCarousel projects={[
                        {
                            title: "Warden",
                            startDate: "July 2025",
                            endDate: "Present",
                            image: "https://placehold.co/800x400/e7e5e4/57534e?text=Warden",
                            description: "Developing a full stack envelope budgeting app that tracks spending habits and visualizes the flow of money across accounts. Designing a secure backend system to handle user auth, transactions, budgets, etc. using PostgreSQL with Supabase. Utilizing Adobe's React Aria library to accommodate for all users by making accessible components.",
                            techStack: ["Next.js", "PostgreSQL", "Supabase", "TailwindCSS", "TypeScript", "React Aria"]
                        },
                        {
                            title: "Suited",
                            startDate: "June 2024",
                            endDate: "March 2025",
                            link: "https://suitedapp.com/",
                            image: "/Suited.png",
                            description: "Launched a poker bankroll tracker and analytics tool that analyzes poker sessions to identify performance trends and predict profit. Grew the site to 40+ members through Meta ad campaigns while utilizing Google Analytics for customer behavior analysis. Created a REST API to store game sessions, leagues, player stats, and more. Implemented responsive dashboards using Recharts and TailwindCSS for user-friendly cross-platform support.",
                            techStack: ["Next.js", "MongoDB", "Jenkins", "TailwindCSS", "TypeScript", "Recharts", "Google Analytics"]
                        },
                        {
                            title: "AsciiJack",
                            startDate: "January 2024",
                            endDate: "January 2024",
                            githubLink: "https://github.com/jchernin4/asciijack",
                            image: "/asciijack.png",
                            description: "A console-based blackjack game.",
                            techStack: ["Java"]
                        },
                        {
                            title: "The Eden Project",
                            startDate: "May 2023",
                            endDate: "May 2023",
                            image: "/EdenCrop.png",
                            description: "A singleplayer tower defense game where the player is stranded on a planet and must defend themselves from alien enemies and helicopters. They do this by placing turrets to defend their space station while managing different resources like power and iron to craft and upgrade more turrets.",
                            techStack: ["Unity", "C#", "Blender"]
                        },
                        {
                            title: "Neurosis",
                            startDate: "January 2023",
                            endDate: "April 2023",
                            link: "https://store.steampowered.com/app/2102180/Neurosis/",
                            image: "/Neurosis.jpg",
                            description: "Developed a single-player horror puzzle game using the Unity game engine with Blender for modeling. Implemented a custom modular inventory and interaction system in C# to handle object collection and user actions to drive gameplay.",
                            techStack: ["Unity", "C#", "Blender"]
                        },
                        {
                            title: "Project Zero",
                            startDate: "May 2022",
                            endDate: "May 2022",
                            image: "/ZeroCrop.png",
                            description: "A game similar to the game Ravenfield. The player is in control of a large army of AI-controlled soldiers, and must capture areas of interest in order to earn points. The twist was that the player could control where the AI bots move to by selecting them on a map and clicking on a point that they want to control. It was meant to be a multiplayer game, but was never finished.",
                            techStack: ["Unity", "C#"]
                        }
                    ]} />

                    <div className="mt-16">
                        {/* Hackathons header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-px bg-orange-600 dark:bg-orange-400" />
                                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400">
                                    Competitions
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-50">
                                Hackathons
                            </h3>
                        </div>

                        <InfoCard
                            startDate="October 2023"
                            endDate="HackPSU"
                            title="AdLite"
                            link="https://devpost.com/software/adlite"
                            githubLink="https://github.com/jchernin4/AdLite"
                            description="1st Place - Entrepreneurship and Best Use of Taipy. It provided an alternative advertisement solution to traditional ads by instead using a cryptocurrency miner to act as a less invasive option for those that prefer to not have a cluttered webpage."
                            techStack={["Python", "Taipy", "Cryptocurrency"]}
                        />

                        <InfoCard
                            startDate="February 2023"
                            endDate="Brickhack 9"
                            title="Math Maze"
                            link="https://devpost.com/software/mathmaze"
                            githubLink="https://github.com/jchernin4/RIT-Brickhack"
                            description="A multiplayer game made in Unity which let players compete to solve math problems before the other player."
                            techStack={["Unity", "C#", "Mirror"]}
                        />

                        <InfoCard
                            startDate="Spring 2023"
                            endDate="HackPSU"
                            title="GreenSolve"
                            link="https://devpost.com/software/greensolve"
                            githubLink="https://github.com/jchernin4/GreenSolve-HackPSU2022"
                            description="1st Place - Sustainability and Most Creative Use of Twilio. Developed a website that shares local green projects to promote environmental awareness."
                            techStack={["Twilio", "Web Development"]}
                        />

                        {/* Other hackathons note */}
                        <div className="mt-8 p-5 rounded-xl bg-stone-100/50 dark:bg-stone-800/50 backdrop-blur-sm border border-stone-200 dark:border-stone-700">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">
                                        Also participated in:
                                    </p>
                                    <p className="text-sm text-stone-500 dark:text-stone-400">
                                        HackPSU Fall 2023, HackPSU Fall 2025, and Brickhack 9 Fall 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
