"use client";

import StackIcon from "tech-stack-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const skillCategories = [
    {
        type: "languages",
        label: "Languages",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        skills: [
            { name: "Java", icon: "java" },
            { name: "C#", icon: "csharp" },
            { name: "C++", icon: "c++" },
            { name: "TypeScript", icon: "typescript" },
            { name: "JavaScript", icon: "js" },
            { name: "HTML", icon: "html5" },
            { name: "CSS", icon: "css3" },
            { name: "SQL", icon: "mysql" },
            { name: "C", icon: null },
        ],
    },
    {
        type: "frameworks",
        label: "Frameworks",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        skills: [
            { name: "Next.js", icon: "nextjs2" },
            { name: "React", icon: "react" },
            { name: "Node.js", icon: "nodejs" },
            { name: "TailwindCSS", icon: "tailwindcss" },
            { name: "Zod", icon: "zod" },
            { name: "Javalin/Jetty", icon: null },
            { name: "Avalonia", icon: null },
            { name: "WPF", icon: null },
            { name: "Selenium", icon: null },
        ],
    },
    {
        type: "databases",
        label: "Databases",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        skills: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "Supabase", icon: "supabase" },
        ],
    },
    {
        type: "tools",
        label: "Tools",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        skills: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Docker", icon: "docker" },
            { name: "Linux", icon: "linux" },
            { name: "Cloudflare", icon: "cloudflare" },
            { name: "DigitalOcean", icon: "digitalocean" },
            { name: "Postman", icon: "postman" },
            { name: "Jira", icon: "jira" },
            { name: "Claude Code", icon: "claude" },
            { name: "Cursor", icon: "cursor" },
            { name: "Neovim", icon: "neovim" },
            { name: "Twilio", icon: "twilio" },
            { name: "Nginx", icon: null },
            { name: "Jenkins", icon: null },
            { name: "Power BI", icon: null },
            { name: "Apache", icon: null },
            { name: "Gradle", icon: null },
            { name: "Unity", icon: null },
            { name: "JetBrains IDEs", icon: null },
            { name: "Visual Studio + VSCode", icon: null },
            { name: "Proxmox", icon: null },
        ],
    },
];

function SkillItem({ name, icon }: { name: string; icon: string | null }) {
    return (
        <div className="group/skill flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm transition-all duration-200 hover:border-orange-400/50 dark:hover:border-orange-600/50 hover:shadow-md hover:shadow-orange-500/5">
            {icon ? (
                <StackIcon name={icon} className="w-5 h-5 transition-transform duration-200 group-hover/skill:scale-110" />
            ) : (
                <div className="w-5 h-5 rounded bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-stone-500 dark:text-stone-400">
                        {name.charAt(0)}
                    </span>
                </div>
            )}
            <span className="text-sm text-stone-700 dark:text-stone-300 font-medium">{name}</span>
        </div>
    );
}

export default function Skills() {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    return (
        <section id="skills" className="flex flex-col justify-center w-full max-w-4xl min-h-screen py-20">
            {/* Section header */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-px bg-orange-600 dark:bg-orange-400" />
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-500 dark:text-stone-400">
                        Expertise
                    </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-stone-900 dark:text-stone-50">
                    Skills
                </h2>
                <p className="mt-4 text-lg text-stone-500 dark:text-stone-400 max-w-2xl">
                    Technologies and tools I use to bring ideas to life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.type}
                        className="group relative overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm transition-all duration-300"
                        onHoverStart={() => setHoveredCategory(category.type)}
                        onHoverEnd={() => setHoveredCategory(null)}
                        initial={false}
                        animate={{
                            borderColor: hoveredCategory === category.type
                                ? 'rgba(251, 146, 60, 0.5)'
                                : 'rgba(120, 120, 128, 0.2)',
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Accent line on hover */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                        <div className="p-6 sm:p-8">
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">
                                        {category.label}
                                    </h3>
                                    <p className="text-xs text-stone-500 dark:text-stone-400">
                                        {category.skills.length} technologies
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                <AnimatePresence mode="sync">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{
                                                scale: 0.8,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.02,
                                                ease: "easeOut"
                                            }}
                                        >
                                            <SkillItem
                                                name={skill.name}
                                                icon={skill.icon}
                                            />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
