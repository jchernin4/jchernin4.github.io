import "./portfolioBox.css";

function PortfolioBox({ title, date, link, altLink, description, imageSource }) {
	return (
		<div className="container">
			<img className="projectimg" src={imageSource} alt="Couldn't be rendered."/>
		</div>
	);
};

export default PortfolioBox;
