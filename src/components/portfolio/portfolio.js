import { useState, useEffect, useRef } from "react";

import PortfolioBox from "../portfolio-box";

import "./portfolio.css";

function Portfolio() {
	const [activeIndex, setActiveIndex] = useState(0);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const [link, setLink] = useState("");
	const [altLink, setAltLink] = useState("");

	const ref = useRef(null);

  	useEffect(() => {
		const element = ref.current;
		// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
  		const event = new MouseEvent('mouseover', {
    		view: window,
    		bubbles: true,
    		cancelable: true
  		})

  		// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent  
  		element.dispatchEvent(event)
		return;

  	}, []);

	return (
		<div className="portfolio">
			<p className="title">Projects</p>

			<div className="gallery">
				<PortfolioBox expand={activeIndex === 2} onShow={() => {setActiveIndex(2); setTitle("Project Zero"); setDate("May 2022"); setDescription("A game similar to the game Ravenfield. The player is in control of a large army of AI-controlled soliders, and must capture areas of interest in order to earn points. The twist was that the player could control where the AI bots move to by selecting them on a map and clicking on a point that they want to control. It was meant to be a multiplayer game, but was never finished."); setLink("https://github.com/jchernin4/Project-Zero"); setAltLink("");}} imageSource="ZeroCrop.png"/>
				<PortfolioBox expand={activeIndex === 3} onShow={() => {setActiveIndex(3); setTitle("GreenSolve"); setDate("November 2022"); setDescription("A submission for HackPSU 2022, which won in two categories: Sustainability and Most Creative Use of Twilio. This application was focused on connecting people in the same area to work together on green projects such as park cleanups and community gardens by allowing organizers to send out a text message notification about an event to all users that are registered in the same zip code."); setLink("https://github.com/jchernin4/GreenSolve-HackPSU2022"); setAltLink("https://devpost.com/software/greensolve");}} imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/285/107/datas/gallery.jpg"/>
				<PortfolioBox expand={activeIndex === 5} onShow={() => {setActiveIndex(5); setTitle("Neurosis"); setDate("January 2023"); setDescription('A horror puzzle game with a deep story about a teenager with depression who must escape a dream world that is fillied with monsters of his own creation. This game has its own page on the Steam game launcher, but was never finished.'); setLink("https://github.com/jchernin4/Neurosis"); setAltLink("https://store.steampowered.com/app/2102180/Neurosis/");}} imageSource="https://cdn.akamai.steamstatic.com/steam/apps/2102180/ss_13b0437e606d520abb4cb8605e55efc95f6622c2.600x338.jpg?t=1680819133"/>
				<PortfolioBox expand={activeIndex === 6} onShow={() => {setActiveIndex(6); setTitle("Math Maze"); setDate("February 2023"); setDescription("A submission for RIT's Brickhack hackathon. It is a multiplayer game made in Unity, which let players compete to solve math problems before the other player."); setLink("https://github.com/jchernin4/RIT-Brickhack"); setAltLink("https://devpost.com/software/mathmaze");}} imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/398/969/datas/gallery.jpg"/>
				<PortfolioBox expand={activeIndex === 9} onShow={() => {setActiveIndex(9); setTitle("The Eden Project"); setDate("May 2023"); setDescription("A singleplayer tower defense game where the player is stranded on a planet and must defend themselves from alien enemies and helicopters. They do this by placing turrents to defend their space station while managing different resources like power and iron to craft and upgrade more turrets."); setLink("https://github.com/jchernin4/TheEdenProject");}} imageSource="EdenCrop.png"/>
				<PortfolioBox expand={activeIndex === 10} onShow={() => {setActiveIndex(10); setTitle("Adlite"); setDate("October 2023"); setDescription("A submission to HackPSU Fall 2023, which won first place in both the Entrepreneurship and Best Use of Taipy categories. It provided an alternative advertisement solution to traditional ads by instead using a cryptocurrency miner to act as a less invasive option for those that prefer to not have a cluttered webpage."); setLink("https://github.com/jchernin4/AdLite"); setAltLink("https://devpost.com/software/adlite");}} imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/635/760/datas/gallery.jpg"/>
				<PortfolioBox r={ref} expand={activeIndex === 11} onShow={() => {setActiveIndex(11); setTitle("AsciiJack"); setDate("January 2024"); setDescription("A console-based blackjack game."); setLink("https://github.com/jchernin4/asciijack"); setAltLink("");}} imageSource="asciijack.png"/>
			</div>

			<div className="projectInfo">
				<p className="projectTitle">{title}</p>
				<p className="date">{date}</p>
				<a className="link" href={link} target="_blank" rel="noreferrer">{link}</a><br/>
				<a className="altLink" href={altLink} target="_blank" rel="noreferrer">{altLink}</a>
				<p className="projectDescription">{description}</p>
			</div>
		</div>
	);
};

export default Portfolio;
