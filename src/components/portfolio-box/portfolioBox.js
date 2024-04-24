import "./portfolioBox.css";

function PortfolioBox({ r, expand, onShow, handleChange, imageSource }) {
	return (
		<div ref={r} className={ expand ? "container expand" : "container" }
			onMouseEnter={onShow}>
			<img className="projectimg" src={imageSource} alt="Couldn't be rendered."/>
		</div>
	);
};

export default PortfolioBox;
