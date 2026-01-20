"use client";

export default function ProjectCard({ title, startDate, endDate, link, description, techStack, company, location, image, githubLink }: { title: string; startDate: string; endDate: string; link?: string; description: string; techStack: string[]; company?: string; location?: string; image?: string; githubLink?: string }) {
    const handleCardClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            onClick={link && !githubLink ? handleCardClick : undefined}
            className={`group relative mt-6 ${link && !githubLink ? 'cursor-pointer' : ''}`}
        >
            {/* Timeline connector for work experience */}
            {company && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-400 via-orange-600 to-orange-400 dark:from-orange-600 dark:via-orange-400 dark:to-orange-600 opacity-30" />
            )}

            <div className={`relative overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/50 dark:hover:border-orange-600/50 hover:shadow-xl hover:shadow-orange-500/5 ${company ? 'ml-6' : ''}`}>
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Timeline dot for work experience */}
                {company && (
                    <div className="absolute -left-[30px] top-8 w-3 h-3 rounded-full bg-orange-500 dark:bg-orange-400 ring-4 ring-stone-50 dark:ring-stone-950" />
                )}

                {image && (
                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}

                <div className="p-6">
                    {/* Date badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium tracking-wider uppercase text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                            {startDate} — {endDate}
                        </span>
                        {location && (
                            <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {location}
                            </span>
                        )}
                    </div>

                    {/* Title section */}
                    <div className="mb-4">
                        {company && (
                            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-1">
                                {company}
                            </h3>
                        )}
                        <div className="flex items-center gap-2">
                            {link && !githubLink ? (
                                <p className={`${company ? 'text-lg text-stone-600 dark:text-stone-300' : 'text-xl font-bold text-stone-900 dark:text-stone-50'}`}>
                                    {title}
                                </p>
                            ) : link && githubLink ? (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className={`${company ? 'text-lg text-stone-600 dark:text-stone-300' : 'text-xl font-bold text-stone-900 dark:text-stone-50'} hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2`}
                                >
                                    {title}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ) : (
                                <p className={`${company ? 'text-lg text-stone-600 dark:text-stone-300' : 'text-xl font-bold text-stone-900 dark:text-stone-50'}`}>
                                    {title}
                                </p>
                            )}
                            {link && !githubLink && (
                                <svg className="w-4 h-4 text-stone-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            )}
                        </div>
                    </div>

                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-5">{description}</p>

                    {githubLink && (
                        <div className="mb-5">
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((element: string) => (
                            <span
                                key={element}
                                className="text-xs font-medium rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 py-1.5 px-3 border border-stone-200 dark:border-stone-700 transition-colors group-hover:border-orange-200 dark:group-hover:border-orange-900/50"
                            >
                                {element}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
