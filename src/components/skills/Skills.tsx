"use client";

import StackIcon from "tech-stack-icons";

const skills = {
    languages: [
        {name: "Java", icon: "java"},
        {name: "C#", icon: "csharp"},
        {name: "C++", icon: "c++"},
        {name: "TypeScript", icon: "typescript"},
        {name: "JavaScript", icon: "js"},
        {name: "HTML", icon: "html5"},
        {name: "CSS", icon: "css3"},
        {name: "SQL", icon: "mysql"},
        {name: "C", icon: null},
    ],
    frameworks: [
        {name: "Next.js", icon: "nextjs2"},
        {name: "React", icon: "react"},
        {name: "Node.js", icon: "nodejs"},
        {name: "TailwindCSS", icon: "tailwindcss"},
        {name: "Zod", icon: "zod"},
        {name: "Jetty", icon: null},
        {name: "Avalonia", icon: null},
        {name: "WPF", icon: null},
        {name: "Selenium", icon: null},
    ],
    databases: [
        {name: "MongoDB", icon: "mongodb"},
        {name: "MySQL", icon: "mysql"},
        {name: "PostgreSQL", icon: "postgresql"},
        {name: "Supabase", icon: "supabase"},
    ],
    tools: [
        {name: "Git", icon: "git"},
        {name: "GitHub", icon: "github"},
        {name: "Docker", icon: "docker"},
        {name: "Linux", icon: "linux"},
        {name: "Cloudflare", icon: "cloudflare"},
        {name: "DigitalOcean", icon: "digitalocean"},
        {name: "Postman", icon: "postman"},
        {name: "Jira", icon: "jira"},
        {name: "Claude Code", icon: "claude"},
        {name: "Cursor", icon: "cursor"},
        {name: "Neovim", icon: "neovim"},
        {name: "Twilio", icon: "twilio"},
        {name: "Nginx", icon: null},
        {name: "Jenkins", icon: null},
        {name: "Power BI", icon: null},
    ],
};

function SkillItem({name, icon}: { name: string; icon: string | null }) {
    return (
        <div
            className="flex items-center gap-3 p-3 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
            {icon ? (
                <StackIcon name={icon} className="w-8 h-8" variant="dark"/>
            ) : (
                <div className="w-8 h-8"/>
            )}
            <span className="text-md text-stone-700 dark:text-stone-300">{name}</span>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col justify-center w-full max-w-5xl min-h-screen">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-8">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-4">Languages</h3>
                    <div className="flex flex-col gap-3">
                        {skills.languages.map((skill) => (
                            <SkillItem key={skill.name} name={skill.name} icon={skill.icon}/>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-4">Frameworks</h3>
                    <div className="flex flex-col gap-3">
                        {skills.frameworks.map((skill) => (
                            <SkillItem key={skill.name} name={skill.name} icon={skill.icon}/>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-4">Databases</h3>
                    <div className="flex flex-col gap-3">
                        {skills.databases.map((skill) => (
                            <SkillItem key={skill.name} name={skill.name} icon={skill.icon}/>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-4">Tools</h3>
                    <div className="flex flex-col gap-3">
                        {skills.tools.map((skill) => (
                            <SkillItem key={skill.name} name={skill.name} icon={skill.icon}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
