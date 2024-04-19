import "./portfolioBox.css";

function PortfolioBox({ title, date, link, altLink, description, videoSource, youtubeSource, imageSource }) {
	if (youtubeSource != null) {
		return (
			<div className="container">
				<div className="content">
					<p>
						<strong>{title}</strong><br/>
						<i>{date}</i><br/>
						<a href={link} target="_blank" rel="noreferrer">{link}</a><br/>
						{altLink !== null ? <><a href={altLink} target="_blank" rel="noreferrer">{altLink}</a><br/><br/></> : null}
						{description}
						<iframe className="projectiframe" title={youtubeSource} src={`https://www.youtube.com/embed/${youtubeSource}?autoplay=1&mute=1&controls=0&loop=1`}/>
					</p>
				</div>
			</div>
		);


	} else if (videoSource != null) {
		return (
			<div className="container">
				<div className="content">
					<p>
						<strong>{title}</strong><br/>
						<i>{date}</i><br/>
						<a href={link} target="_blank" rel="noreferrer">{link}</a><br/>
						{altLink !== null ? <><a href={altLink} target="_blank" rel="noreferrer">{altLink}</a><br/><br/></> : null}
						{description}
						<video className="projectvideo" width="320" height="240" autoPlay muted loop>
							<source src={videoSource} type="video/webm"/>
							Your browser does not support the video tag.
						</video>
					</p>
				</div>
			</div>
		);

	} else if (imageSource != null) {
		return (
			<div className="container">
				<div className="content">
					<p>
						<strong>{title}</strong><br/>
						<i>{date}</i><br/>
						<a href={link} target="_blank" rel="noreferrer">{link}</a><br/>
						{altLink !== null ? <><a href={altLink} target="_blank" rel="noreferrer">{altLink}</a><br/><br/></> : null}
						{description}
						<img className="projectimg" src={imageSource} alt="Couldn't be rendered."/>
					</p>
				</div>
			</div>
		);

	} else {
		return (
			<div className="container">
				<div className="content">
					<p>
						<strong>{title}</strong><br/>
						<i>{date}</i><br/>
						<a href={link} target="_blank" rel="noreferrer">{link}</a><br/>
						{altLink !== null ? <><a href={altLink} target="_blank" rel="noreferrer">{altLink}</a><br/><br/></> : null}
						{description}
					</p>
				</div>
			</div>
		);
	}

};

export default PortfolioBox;
