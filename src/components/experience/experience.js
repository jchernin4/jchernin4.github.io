import ExperienceBox from "../experience-box";

import "./experience.css";

function Experience() {
	return (
		<div className="experienceContainer">
			<p className="experienceHeader">Experience</p>
			<ExperienceBox position="Intern" company="Quench Water" date="June-August 2024" description="Quench USA, Inc. provides water-as-a-service solutions to businesses and customers, with over 75% of the Fortune 500 companies using their products. Through this position, I was responsible for automating sales reports using Power BI, providing real-time insights to the sales team. I also automated warranty case reports using Salesforce, reducing the amount of manual entry needed and improving efficiency. Finally, I integrated AI into the company's internal website FAQ section, allowing businesses to quickly access accurate and helpful information."/>
		</div>
	);
}

export default Experience;
