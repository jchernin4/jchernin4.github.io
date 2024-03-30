import "./timeline.css"

const Timeline = () => (
	<div class="timeline">
		<TimelineBox c="left" title="Blue Demon" date="January 2019" link="https://github.com/jchernin4/BlueDemon" description='My first time using Git and Github. A friend and I worked on an algorithm for a turn-based strategy game called "Fruit Bots", where it competed against other algorithms to collect fruits.'/>
		<TimelineBox c="right" title="Poseidon" date="January 2019" link="https://github.com/jchernin4/Poseidon" description="A tool for Discord to automate tasks for administrators, along with some miscellaneous commands. Used by over 100,000 people at it's peak."/>
	</div> 
);

const TimelineBox = ({ c, title, date, link, description }) => (
	<div className={`container ${c}`}>
		<div className="content">
			<p>
				<strong>{title}</strong><br/>
				<i>{date}</i><br/>
				<a href={link} target="_blank" rel="noreferrer">{link}</a><br/>
				{description}
			</p>
		</div>
	</div>
);

Timeline.TimelineBox = TimelineBox;

export default Timeline;
