import React from "react";

import Page from "../page";

import Skills from "../skills";
import Experience from "../experience";
import Portfolio from "../portfolio";

import "./home.css";

const Home = () => (
	<Page header="Home">
		<video width="1000" height="1000" preload loop autoPlay muted playsinline>
			<source src="Earth.webm" type="video/webm"/>
		</video>
		<div className="sectionContainer">
			<div className="introContainer">
				<p className="introTitle">Jeremy Chernin</p>
				<p className="introText">Software developer and rising junior at The Pennsylvania State University pursing a bachelor's in Computer Science.</p>
			</div>
		</div>


		<div className="sectionContainer">
			<Skills/>
		</div>

		<div className="spacer"/>

		<div className="sectionContainer">
			<Experience/>
		</div>

		<div className="spacer"/>
		<div className="spacer"/>

		<div className="sectionContainer">
			<Portfolio/>
		</div>
	</Page>
);

export default Home;
