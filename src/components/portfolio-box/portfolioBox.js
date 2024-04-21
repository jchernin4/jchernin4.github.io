import "./portfolioBox.css";

function PortfolioBox({ expand, onShow, handleChange, date, link, altLink, imageSource }) {
	return (
		<div className={ expand ? "container expand" : "container" }
			onMouseEnter={onShow}>
			<img className="projectimg" src={imageSource} alt="Couldn't be rendered."/>
		</div>
	);
};

export default PortfolioBox;
