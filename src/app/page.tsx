import ProjectCard from "@/components/project-card/projectCard";
import Skills from "@/components/skills/Skills";

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

                <section id="projects" className="flex flex-col justify-center w-full max-w-4xl min-h-screen">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl">Projects</h1>
                <ProjectCard startDate="July 2025" endDate="Present" title="Warden" description="Description."
                             techStack={["Next.js", "PostgreSQL", "TailwindCSS", "TypeScript"]}/>
                <ProjectCard startDate="June 2024" endDate="March 2025" title="Suited" link="https://suitedapp.com/"
                             description="Suited is a poker bankroll tracker and analytics tracker used by serious poker players to track their performance across different stakes, locations, and times."
                             techStack={["Next.js", "MongoDB", "Jenkins", "TailwindCSS", "TypeScript", "Stripe"]}/>
                <ProjectCard startDate="January 2023" endDate="April 2023" title="Neurosis"
                             link="https://store.steampowered.com/app/2102180/Neurosis/" description="Description."
                             techStack={["Unity", "Blender", "C#"]}/>
                </section>
            </main>
        </>
    );
}
