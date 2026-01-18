export default function ProjectCard({ title, startDate, endDate, link, description, techStack }: { title: string; startDate: string; endDate: string; link?: string; description: string; techStack: string[] }) {
    const CardWrapper = link ? 'a' : 'div';
    const cardProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <CardWrapper
            {...cardProps}
            className="block p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-lg transition-all duration-200 mt-4"
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">{title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">{startDate} - {endDate}</p>
            </div>
            <p className="text-stone-600 dark:text-stone-300 mb-4">{description}</p>
            <div className="flex flex-row flex-wrap gap-2">
                {techStack.map((element: string) => {
                    return (
                        <span key={element} className="text-sm rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 py-1 px-3">{element}</span>
                    )
                })}
            </div>
        </CardWrapper>
    )
}