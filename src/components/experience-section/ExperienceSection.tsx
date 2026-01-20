import InfoCard from "@/components/project-card/InfoCard";

const experiences = [
    {
        startDate: "June 2025",
        endDate: "August 2025",
        title: "Customer Solutions Consultant Intern",
        company: "Boomi",
        location: "Conshohocken, PA",
        description: "Automated structured PDF data extraction, API integrations, anomaly detection, and email routing using Boomi's AI AgentStudio and iPaaS platform, following Agile methodologies for iterative delivery. Engineered a customer support algorithm that ranks ticket urgency using 10+ metrics including ACV, ARR, and churn risk, using Java to validate data and notify technical success teams of rankings & anomalies through Slack and email integrations. Developed an AI-enhanced productivity app that won a company hackathon by extracting action items from emails and meeting transcripts, and automating follow-up tasks like sending emails or making Jira tickets using Boomi's AI.",
        techStack: ["Boomi", "Java", "AI AgentStudio", "iPaaS", "Agile", "Slack API", "Jira"],
    },
    {
        startDate: "June 2024",
        endDate: "August 2024",
        title: "Product & Sales Intern",
        company: "Quench",
        location: "King of Prussia, PA",
        description: "Organized sales data through a Power BI dashboard to automate a monthly sales reporting process saving 2+ hours per request. Partnered with cross-functional teams to customize analytics ensuring the dashboard aligned with the business's needs.",
        techStack: ["Power BI", "Data Analytics", "Sales Operations"],
    },
];

export default function ExperienceSection() {
    return (
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
                {experiences.map((experience) => (
                    <InfoCard
                        key={`${experience.company}-${experience.startDate}`}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        title={experience.title}
                        company={experience.company}
                        location={experience.location}
                        description={experience.description}
                        techStack={experience.techStack}
                    />
                ))}
            </div>
        </section>
    );
}
