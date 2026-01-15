import ProjectCard from "@/components/project-card/projectCard";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main
				className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-0 bg-white dark:bg-black sm:items-start space-y-24">
				<div className="flex justify-center items-center flex-col sm:flex-row gap-8">
					<div className="p-4 bg-gray-200">
						<h1 className="text-7xl text-gray-900">Jeremy Chernin</h1>
						<h2 className="text-xl text-gray-700">Senior studying computer science at Penn State University</h2>
					</div>

					<div>
						<h1 className="text-7xl">About Me</h1>
						<p className="text-xl">I&apos;m Jeremy, a software engineer from Greater Philadelphia, Pennsylvania. I&apos;ve been passionate about programming since 2014, focusing on developing APIs, games, and dashboards for personal and commerical use.</p>
					</div>
				</div>

				<div>
					<h1 className="text-7xl">Projects</h1>
					<ProjectCard startDate="July 2025" endDate="Present" title="Warden" description="Description." techStack={["Next.js", "PostgreSQL", "TailwindCSS", "TypeScript"]}/>
					<ProjectCard startDate="June 2024" endDate="March 2025" title="Suited" link="https://suitedapp.com/" description="Suited is a poker bankroll tracker and analytics tracker used by serious poker players to track their performance across different stakes, locations, and times." techStack={["Next.js", "MongoDB", "Jenkins", "TailwindCSS", "TypeScript", "Stripe"]}/>
					<ProjectCard startDate="January 2023" endDate="April 2023" title="Neurosis" link="https://store.steampowered.com/app/2102180/Neurosis/" description="Description." techStack={["Unity", "Blender", "C#"]}/>
				</div>
			</main>
		</div>
	);
}
