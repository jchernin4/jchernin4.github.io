import React from "react";

import Page from "../page";

import Skills from "../skills";
import Portfolio from "../portfolio";

import "./home.css";

const Home = () => (
	<Page header="Home">
		<div className="sectionContainer">
			<div className="introContainer">
				<p className="introTitle">Jeremy Chernin</p>
				<p className="introText">Software developer and rising junior at The Pennsylvania State University pursing a bachelor's in Computer Science.</p>
			</div>
		</div>


		<div className="sectionContainer">
			<Skills/>
		</div>

		<div className="sectionContainer">
			<Portfolio/>
		</div>
	</Page>
);

export default Home;
