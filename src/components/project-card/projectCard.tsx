export default function ProjectCard({ title, startDate, endDate, link, description, techStack }: { title: string; startDate: string; endDate: string; link?: string; description: string; techStack: string[] }) {
    return (
        <div>
            <p>{title}</p>
            <p>{startDate} - {endDate}</p>
            {link && <p>{link}</p>}
            <p>{description}</p>
            <div className="flex flex-row flex-wrap">
                {techStack.map((element: string) => {
                    return (
                        <p key={element} className="rounded-lg bg-neutral-900 text-neutral-100 border-neutral-100 border-2 m-3 py-1 px-3">{element}</p>
                    )
                })}
            </div>
        </div>
    )
}