import "./timelineBox.css"

const TimelineBox = ({ title, date, link, description }) => (
	<div className="box">
		<strong>{title}</strong>
		<i>{date}</i>
		<i>{link}</i>
		{description}
	</div>
);

export default TimelineBox;
