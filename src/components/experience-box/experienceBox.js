import "./experienceBox.css";

function ExperienceBox({position, company, date, description}) {
	return (
		<div className="experienceContainer">
			<div className="experienceBox">
				<p className="experienceTitle">{position} | {company} | {date}</p>
			</div>

			<div className="experienceDescriptionBox">
				<p className="experienceDescription">{description}</p>
			</div>
		</div>
	);
}

export default ExperienceBox;
