import ProjectCarousel from "@/components/project-carousel/ProjectCarousel";
import InfoCard from "@/components/project-card/InfoCard";

const projects = [
    {
        title: "Warden",
        startDate: "July 2025",
        endDate: "Present",
        image: "https://placehold.co/800x400/e7e5e4/57534e?text=Warden",
        description: "Developing a full stack envelope budgeting app that tracks spending habits and visualizes the flow of money across accounts. Designing a secure backend system to handle user auth, transactions, budgets, etc. using PostgreSQL with Supabase. Utilizing Adobe's React Aria library to accommodate for all users by making accessible components.",
        techStack: ["Next.js", "PostgreSQL", "Supabase", "TailwindCSS", "TypeScript", "React Aria"],
    },
    {
        title: "Suited",
        startDate: "June 2024",
        endDate: "March 2025",
        link: "https://suitedapp.com/",
        image: "/Suited.png",
        description: "Launched a poker bankroll tracker and analytics tool that analyzes poker sessions to identify performance trends and predict profit. Grew the site to 40+ members through Meta ad campaigns while utilizing Google Analytics for customer behavior analysis. Created a REST API to store game sessions, leagues, player stats, and more. Implemented responsive dashboards using Recharts and TailwindCSS for user-friendly cross-platform support.",
        techStack: ["Next.js", "MongoDB", "Jenkins", "TailwindCSS", "TypeScript", "Recharts", "Google Analytics"],
    },
    {
        title: "AsciiJack",
        startDate: "January 2024",
        endDate: "January 2024",
        githubLink: "https://github.com/jchernin4/asciijack",
        image: "/asciijack.png",
        description: "A console-based blackjack game.",
        techStack: ["Java"],
    },
    {
        title: "The Eden Project",
        startDate: "May 2023",
        endDate: "May 2023",
        image: "/EdenCrop.png",
        description: "A singleplayer tower defense game where the player is stranded on a planet and must defend themselves from alien enemies and helicopters. They do this by placing turrets to defend their space station while managing different resources like power and iron to craft and upgrade more turrets.",
        techStack: ["Unity", "C#", "Blender"],
    },
    {
        title: "Neurosis",
        startDate: "January 2023",
        endDate: "April 2023",
        link: "https://store.steampowered.com/app/2102180/Neurosis/",
        image: "/Neurosis.jpg",
        description: "Developed a single-player horror puzzle game using the Unity game engine with Blender for modeling. Implemented a custom modular inventory and interaction system in C# to handle object collection and user actions to drive gameplay.",
        techStack: ["Unity", "C#", "Blender"],
    },
    {
        title: "Project Zero",
        startDate: "May 2022",
        endDate: "May 2022",
        image: "/ZeroCrop.png",
        description: "A game similar to the game Ravenfield. The player is in control of a large army of AI-controlled soldiers, and must capture areas of interest in order to earn points. The twist was that the player could control where the AI bots move to by selecting them on a map and clicking on a point that they want to control. It was meant to be a multiplayer game, but was never finished.",
        techStack: ["Unity", "C#"],
    },
];

const hackathons = [
    {
        startDate: "October 2023",
        endDate: "HackPSU",
        title: "AdLite",
        link: "https://devpost.com/software/adlite",
        githubLink: "https://github.com/jchernin4/AdLite",
        description: "1st Place - Entrepreneurship and Best Use of Taipy. It provided an alternative advertisement solution to traditional ads by instead using a cryptocurrency miner to act as a less invasive option for those that prefer to not have a cluttered webpage.",
        techStack: ["Python", "Taipy", "Cryptocurrency"],
    },
    {
        startDate: "February 2023",
        endDate: "Brickhack 9",
        title: "Math Maze",
        link: "https://devpost.com/software/mathmaze",
        githubLink: "https://github.com/jchernin4/RIT-Brickhack",
        description: "A multiplayer game made in Unity which let players compete to solve math problems before the other player.",
        techStack: ["Unity", "C#", "Mirror"],
    },
    {
        startDate: "Spring 2023",
        endDate: "HackPSU",
        title: "GreenSolve",
        link: "https://devpost.com/software/greensolve",
        githubLink: "https://github.com/jchernin4/GreenSolve-HackPSU2022",
        description: "1st Place - Sustainability and Most Creative Use of Twilio. Developed a website that shares local green projects to promote environmental awareness.",
        techStack: ["Twilio", "Web Development"],
    },
];

export default function ProjectsSection() {
    return (
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

            <ProjectCarousel projects={projects} />

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

                {hackathons.map((hackathon) => (
                    <InfoCard
                        key={hackathon.title}
                        startDate={hackathon.startDate}
                        endDate={hackathon.endDate}
                        title={hackathon.title}
                        link={hackathon.link}
                        githubLink={hackathon.githubLink}
                        description={hackathon.description}
                        techStack={hackathon.techStack}
                    />
                ))}

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
                                HackPSU Fall 2023, HackPSU Fall 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
