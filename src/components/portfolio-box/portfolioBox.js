import "./portfolioBox.css";

function PortfolioBox({ expand, onShow, title, date, link, altLink, description, imageSource }) {
	return (
		<div className={ expand ? "container expand" : "container" }
			onMouseEnter={onShow}>
			<img className="projectimg" src={imageSource} alt="Couldn't be rendered."/>
		</div>
	);
};

export default PortfolioBox;
