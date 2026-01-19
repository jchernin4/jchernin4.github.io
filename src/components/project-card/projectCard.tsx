export default function ProjectCard({ title, startDate, endDate, link, description, techStack, company, location, image }: { title: string; startDate: string; endDate: string; link?: string; description: string; techStack: string[]; company?: string; location?: string; image?: string }) {
    const CardWrapper = link ? 'a' : 'div';
    const cardProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <CardWrapper
            {...cardProps}
            className="block rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-lg transition-all duration-200 mt-4 overflow-hidden"
        >
            {image && (
                <div className="w-full h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <div className="flex flex-col gap-1">
                    {company && (
                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">
                            {company}
                        </h3>
                    )}
                    <div className="flex items-center gap-2">
                        <p className={`${company ? 'text-base' : 'text-xl font-semibold'} text-stone-700 dark:text-stone-200`}>
                            {title}
                        </p>
                        {link && (
                            <svg className="w-5 h-5 text-stone-500 dark:text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        )}
                    </div>
                    {location && (
                        <p className="text-sm text-stone-500 dark:text-stone-400">
                            {location}
                        </p>
                    )}
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400 whitespace-nowrap">{startDate} - {endDate}</p>
            </div>
            <p className="text-stone-600 dark:text-stone-300 mb-4">{description}</p>
            <div className="flex flex-row flex-wrap gap-2">
                {techStack.map((element: string) => {
                    return (
                        <span key={element} className="text-sm rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 py-1 px-3">{element}</span>
                    )
                })}
            </div>
            </div>
        </CardWrapper>
    )
}