import ProjectCard from "@/components/project-card/projectCard";
import Skills from "@/components/skills/Skills";
import ProjectCarousel from "@/components/project-carousel/ProjectCarousel";

export default function Home() {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-stone-50/80 dark:bg-stone-950/80 border-b border-stone-200 dark:border-stone-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <a href="#home" className="text-lg font-semibold text-stone-900 dark:text-stone-50 hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
                            Jeremy Chernin
                        </a>
                        <div className="flex gap-6 sm:gap-8">
                            <a href="#home" className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors">
                                About
                            </a>
                            <a href="#skills" className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors">
                                Skills
                            </a>
                            <a href="#experience" className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors">
                                Experience
                            </a>
                            <a href="#projects" className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors">
                                Projects
                            </a>
                            </div>
                    </div>
                </div>
            </nav>

            <main className="flex flex-col items-center min-h-screen bg-stone-50 font-sans dark:bg-stone-950 px-4 sm:px-6 lg:px-8">
                <section id="home" className="flex flex-col justify-center items-center w-full max-w-4xl min-h-screen">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl text-stone-50 text-center">Jeremy Chernin</h1>
                    <h2 className="text-lg sm:text-xl text-stone-400 text-center">Computer Science Student at Penn State University</h2>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 px-6 py-3 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-lg font-medium hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors"
                    >
                        View Resume
                    </a>
                </section>

                <section id="about" className="flex flex-col justify-center w-full max-w-4xl min-h-screen">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl">About Me</h1>
                    <p className="text-lg sm:text-xl">Hello! I&apos;m Jeremy, a student and software developer from the Greater
                        Philadelphia area, Pennsylvania. I&apos;ve been passionate about programming since 2014,
                        focusing on developing APIs, games, and dashboards for personal and commerical use.</p>
                </section>

                <Skills />

                <section id="experience" className="flex flex-col justify-center w-full max-w-4xl min-h-screen py-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-8">Work Experience</h1>

                    <ProjectCard
                        startDate="June 2025"
                        endDate="August 2025"
                        title="Customer Solutions Consultant Intern"
                        company="Boomi"
                        location="Conshohocken, PA"
                        description="Automated structured PDF data extraction, API integrations, anomaly detection, and email routing using Boomi's AI AgentStudio and iPaaS platform, following Agile methodologies for iterative delivery. Engineered a customer support algorithm that ranks ticket urgency using 10+ metrics including ACV, ARR, and churn risk, using Java to validate data and notify technical success teams of rankings & anomalies through Slack and email integrations. Developed an AI-enhanced productivity app that won a company hackathon by extracting action items from emails and meeting transcripts, and automating follow-up tasks like sending emails or making Jira tickets using Boomi's AI."
                        techStack={["Boomi", "Java", "AI AgentStudio", "iPaaS", "Agile", "Slack API", "Jira"]}
                    />

                    <ProjectCard
                        startDate="June 2024"
                        endDate="August 2024"
                        title="Product & Sales Intern"
                        company="Quench"
                        location="King of Prussia, PA"
                        description="Organized sales data through a Power BI dashboard to automate a monthly sales reporting process saving 2+ hours per request. Partnered with cross-functional teams to customize analytics ensuring the dashboard aligned with the business's needs."
                        techStack={["Power BI", "Data Analytics", "Sales Operations"]}
                    />
                </section>

                <section id="projects" className="flex flex-col justify-center w-full max-w-4xl min-h-screen py-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-8">Projects</h1>

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
                            image: "https://placehold.co/800x400/e7e5e4/57534e?text=Suited",
                            description: "Launched a poker bankroll tracker and analytics tool that analyzes poker sessions to identify performance trends and predict profit. Grew the site to 40+ members through Meta ad campaigns while utilizing Google Analytics for customer behavior analysis. Created a REST API to store game sessions, leagues, player stats, and more. Implemented responsive dashboards using Recharts and TailwindCSS for user-friendly cross-platform support.",
                            techStack: ["Next.js", "MongoDB", "Jenkins", "TailwindCSS", "TypeScript", "Recharts", "Google Analytics"]
                        },
                        {
                            title: "Neurosis",
                            startDate: "January 2023",
                            endDate: "April 2023",
                            link: "https://store.steampowered.com/app/2102180/Neurosis/",
                            image: "https://placehold.co/800x400/e7e5e4/57534e?text=Neurosis",
                            description: "Developed a single-player horror puzzle game using the Unity game engine with Blender for modeling. Implemented a custom modular inventory and interaction system in C# to handle object collection and user actions to drive gameplay.",
                            techStack: ["Unity", "C#", "Blender"]
                        },
                        {
                            title: "AsciiJack",
                            startDate: "January 2024",
                            endDate: "January 2024",
                            link: "https://github.com/jchernin4/asciijack",
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
                            title: "Math Maze",
                            startDate: "February 2023",
                            endDate: "February 2023",
                            link: "https://github.com/jchernin4/RIT-Brickhack",
                            image: "https://placehold.co/800x400/e7e5e4/57534e?text=Math+Maze",
                            description: "A submission for RIT's Brickhack hackathon. It is a multiplayer game made in Unity, which let players compete to solve math problems before the other player.",
                            techStack: ["Unity", "C#", "Blender", "Mirror"]
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

                    <div className="mt-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-stone-900 dark:text-stone-50">Hackathons</h2>

                        <ProjectCard
                            startDate="October 2023"
                            endDate="HackPSU"
                            title="AdLite"
                            link="https://github.com/jchernin4/AdLite"
                            description="1st Place - Entrepreneurship and Best Use of Taipy. It provided an alternative advertisement solution to traditional ads by instead using a cryptocurrency miner to act as a less invasive option for those that prefer to not have a cluttered webpage."
                            techStack={["Python", "Taipy", "Cryptocurrency"]}
                        />

                        <ProjectCard
                            startDate="Spring 2023"
                            endDate="HackPSU"
                            title="GreenSolve"
                            link="https://github.com/jchernin4/GreenSolve-HackPSU2022"
                            description="1st Place - Sustainability and Most Creative Use of Twilio. Developed a website that shares local green projects to promote environmental awareness."
                            techStack={["Twilio", "Web Development"]}
                        />

                        <div className="mt-4 p-4 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                            <p className="text-sm text-stone-600 dark:text-stone-400">
                                Also participated in: HackPSU Fall 2023, HackPSU Fall 2025, and Brickhack 9 Fall 2023
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
