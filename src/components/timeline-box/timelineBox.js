import "./timelineBox.css"

const TimelineBox = ({ title, link, description }) => (
	<div className="box">
		<strong>{title}</strong>
		<i>{link}</i>
		{description}
	</div>
);

export default TimelineBox;
