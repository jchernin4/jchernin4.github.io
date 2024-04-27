import ExperienceBox from "../experience-box";

import "./experience.css";

function Experience() {
	return (
		<div className="experienceContainer">
			<p className="experienceHeader">Experience</p>
			<ExperienceBox position="Intern" company="Quench Water" date="June-August 2024" description="This is a test description"/>
		</div>
	);
}

export default Experience;
