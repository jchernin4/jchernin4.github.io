import "./skillBox.css";

const SkillBox = ({ imageSource, description }) => (
	<div className="box">
		<img className="skillimage" src={imageSource}/>
		<p className="description">{description}</p>
	</div>
);

export default SkillBox;
