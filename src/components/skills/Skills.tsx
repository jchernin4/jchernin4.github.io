"use client";

import StackIcon from "tech-stack-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const skillCategories = [
    {
        type: "languages",
        label: "Languages",
        color: "blue",
        skills: [
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
    },
    {
        type: "frameworks",
        label: "Frameworks",
        color: "green",
        skills: [
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
    },
    {
        type: "databases",
        label: "Databases",
        color: "purple",
        skills: [
            {name: "MongoDB", icon: "mongodb"},
            {name: "MySQL", icon: "mysql"},
            {name: "PostgreSQL", icon: "postgresql"},
            {name: "Supabase", icon: "supabase"},
        ],
    },
    {
        type: "tools",
        label: "Tools",
        color: "orange",
        skills: [
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
    },
];

const colorStyles = {
    blue: "border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/40",
    green: "border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 hover:bg-green-100 dark:hover:bg-green-900/40",
    purple: "border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100 dark:hover:bg-purple-900/40",
    orange: "border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/30 hover:bg-orange-100 dark:hover:bg-orange-900/40",
};

function SkillItem({name, icon, color}: { name: string; icon: string | null; color: keyof typeof colorStyles }) {
    return (
        <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${colorStyles[color]}`}>
            {icon ? (
                <StackIcon name={icon} className="w-5 h-5" variant="dark"/>
            ) : null}
            <span className="text-sm text-stone-700 dark:text-stone-300 font-medium">{name}</span>
        </div>
    );
}

function PieSlice({
    category,
    index,
    total,
    hoveredCategory,
    onHover
}: {
    category: typeof skillCategories[0];
    index: number;
    total: number;
    hoveredCategory: string | null;
    onHover: (type: string | null) => void;
}) {
    const sliceAngle = (2 * Math.PI) / total;
    const startAngle = index * sliceAngle - Math.PI / 2;
    const endAngle = startAngle + sliceAngle;
    const innerRadius = 40;
    const outerRadius = 150;
    const isHovered = hoveredCategory === category.type;
    const expandRadius = isHovered ? 165 : outerRadius;

    const createArc = (innerR: number, outerR: number) => {
        const x1 = 200 + innerR * Math.cos(startAngle);
        const y1 = 200 + innerR * Math.sin(startAngle);
        const x2 = 200 + outerR * Math.cos(startAngle);
        const y2 = 200 + outerR * Math.sin(startAngle);
        const x3 = 200 + outerR * Math.cos(endAngle);
        const y3 = 200 + outerR * Math.sin(endAngle);
        const x4 = 200 + innerR * Math.cos(endAngle);
        const y4 = 200 + innerR * Math.sin(endAngle);
        const largeArc = sliceAngle > Math.PI ? 1 : 0;

        return `M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x1} ${y1} Z`;
    };

    const labelAngle = startAngle + sliceAngle / 2;
    const labelRadius = (innerRadius + outerRadius) / 2;
    const labelX = 200 + labelRadius * Math.cos(labelAngle);
    const labelY = 200 + labelRadius * Math.sin(labelAngle);

    return (
        <g>
            <motion.path
                d={createArc(innerRadius, expandRadius)}
                className={`${isHovered ? 'fill-stone-300/50 dark:fill-stone-700/50' : 'fill-stone-200/30 dark:fill-stone-800/30'} stroke-stone-400/60 dark:stroke-stone-600/60 cursor-pointer stroke-[3]`}
                onMouseEnter={() => onHover(category.type)}
                onMouseLeave={() => onHover(null)}
                initial={false}
                animate={{
                    d: createArc(innerRadius, expandRadius),
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    filter: isHovered ? "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" : "none",
                }}
            />
            <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-bold fill-stone-600 dark:fill-stone-400 pointer-events-none select-none"
            >
                {category.label}
            </text>
        </g>
    );
}

export default function Skills() {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    return (
        <section id="skills" className="flex flex-col justify-center items-center w-full max-w-5xl min-h-screen py-20">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-12">Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.type}
                        className="relative p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50 backdrop-blur-sm"
                        onHoverStart={() => setHoveredCategory(category.type)}
                        onHoverEnd={() => setHoveredCategory(null)}
                        initial={false}
                        animate={{
                            scale: hoveredCategory === category.type ? 1.02 : 1,
                            borderColor: hoveredCategory === category.type
                                ? 'rgba(120, 120, 128, 0.4)'
                                : 'rgba(120, 120, 128, 0.2)',
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-6">
                            {category.label}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <AnimatePresence mode="sync">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{
                                            scale: 0,
                                            opacity: 0,
                                            y: 20
                                        }}
                                        animate={{
                                            scale: hoveredCategory === category.type ? 1 : 0.95,
                                            opacity: 1,
                                            y: 0
                                        }}
                                        exit={{
                                            scale: 0,
                                            opacity: 0,
                                            y: 20
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            delay: hoveredCategory === category.type
                                                ? skillIndex * 0.03
                                                : categoryIndex * 0.1 + skillIndex * 0.02,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <SkillItem
                                            name={skill.name}
                                            icon={skill.icon}
                                            color={category.color as keyof typeof colorStyles}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
