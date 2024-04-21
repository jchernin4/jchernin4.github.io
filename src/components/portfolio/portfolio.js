import { useState } from "react";

import Page from "../page";
import PortfolioBox from "../portfolio-box";

import "./portfolio.css";

function Portfolio() {
	const [activeIndex, setActiveIndex] = useState(0);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<Page header="Portfolio">
			<div className="gallery">
				<PortfolioBox expand={activeIndex === 0} onShow={() => {setActiveIndex(0); setTitle("Poseidon"); setDescription("A tool for Discord to automate tasks for administrators, along with some miscellaneous commands. Used by over 100,000 people at it's peak.");}} date="January 2019" link="https://github.com/jchernin4/Poseidon"/>
				<PortfolioBox expand={activeIndex === 1} onShow={() => {setActiveIndex(1); setTitle("Econ"); setDescription('Another Discord economy bot, but this one was a lot more advanced. It allowed users to "invest" their currency into stocks, which followed real life stock market prices through an algorithm that combined different assets into a made-up one that players could purchase. It also allowed players to gamble their money with games like "roulette" and "coinflip".');}} date="April 2021" link="https://github.com/jchernin4/Econ" />
				<PortfolioBox expand={activeIndex === 2} onShow={() => {setActiveIndex(2); setTitle("Project Zero"); setDescription("A game similar to the game Ravenfield. The player is in control of a large army of AI-controlled soliders, and must capture areas of interest in order to earn points. The twist was that the player could control where the AI bots move to by selecting them on a map and clicking on a point that they want to control. It was meant to be a multiplayer game, but was never finished.");}} date="May 2022" link="https://github.com/jchernin4/Project-Zero"/>
				<PortfolioBox expand={activeIndex === 3} onShow={() => {setActiveIndex(3); setTitle("GreenSolve"); setDescription("A submission for HackPSU 2022, which won in two categories: Sustainability and Most Creative Use of Twilio. This application was focused on connecting people in the same area to work together on green projects such as park cleanups and community gardens by allowing organizers to send out a text message notification about an event to all users that are registered in the same zip code.");}} date="November 2022" link="https://github.com/jchernin4/GreenSolve-HackPSU2022" altLink="https://devpost.com/software/greensolve" imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/285/107/datas/gallery.jpg"/>
				<PortfolioBox expand={activeIndex === 4} onShow={() => {setActiveIndex(4); setTitle("CHiP"); setDescription("Another Discord bot that allowed users to compete in 10 different games against other players for a fake currency, including blackjack, connect4, slots, roulette, and more. Allowed users to buy fictional items such as cars which they could upgrade and race against other players for more currency, or generators which could be upgraded and would passively provide players with more income.");}} date="November 2022" link="https://github.com/jchernin4/CHiP"/>
				<PortfolioBox expand={activeIndex === 5} onShow={() => {setActiveIndex(5); setTitle("Neurosis"); setDescription('A horror puzzle game with a deep story about a teenager with depression who must escape a dream world that is fillied with monsters of his own creation. This game has its own page on the Steam game launcher, but was never finished.');}} date="January 2023" link="https://github.com/jchernin4/Neurosis" altLink="https://store.steampowered.com/app/2102180/Neurosis/"/>
				<PortfolioBox expand={activeIndex === 6} onShow={() => {setActiveIndex(6); setTitle("RIT Brickhack"); setDescription("A submission for RIT's Brickhack hackathon. It is a multiplayer game made in Unity, which let players compete to solve math problems before the other player.");}} date="Febuary 2023" link="https://github.com/jchernin4/RIT-Brickhack" altLink="https://devpost.com/software/mathmaze"/>
				<PortfolioBox expand={activeIndex === 7} onShow={() => {setActiveIndex(7); setTitle("StudyBuddy"); setDescription("A submission for HackPSU Spring 2023, where users could find students in their classes to study with.");}} date="April 2023" link="https://github.com/jchernin4/StudyBuddy" altLink="https://devpost.com/software/studybuddy-6gyz5x" imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/439/050/datas/gallery.jpg"/>
				<PortfolioBox expand={activeIndex === 8} onShow={() => {setActiveIndex(8); setTitle("Zenith"); setDescription("A recoil control script for the game Rust with many features, such as humanization, smoothness, process hiding, and security features like hardware ID detection which made sure an account that purchased access to the script would only be useable on a single computer.");}} date="April 2023" link="https://github.com/jchernin4/Zenith"/>
				<PortfolioBox expand={activeIndex === 9} onShow={() => {setActiveIndex(9); setTitle("The Eden Project"); setDescription("A singleplayer tower defense game where the player is stranded on a planet and must defend themselves from alien enemies and helicopters. They do this by placing turrents to defend their space station while managing different resources like power and iron to craft and upgrade more turrets.");}} date="May 2023" link="https://github.com/jchernin4/TheEdenProject"/>
				<PortfolioBox expand={activeIndex === 10} onShow={() => {setActiveIndex(10); setTitle("Adlite"); setDescription("A submission to HackPSU Fall 2023, which won first place in both the Entrepreneurship and Best Use of Taipy categories. It provided an alternative advertisement solution to traditional ads by instead using a cryptocurrency miner to act as a less invasive option for those that prefer to not have a cluttered webpage.");}} date="October 2023" link="https://github.com/jchernin4/AdLite" altLink="https://devpost.com/software/adlite" imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/635/760/datas/gallery.jpg"/>
				<PortfolioBox expand={activeIndex === 11} onShow={() => {setActiveIndex(11); setTitle("AsciiJack"); setDescription("A console-based blackjack game.");}} date="January 2024" link="https://github.com/jchernin4/asciijack" imageSource="asciijack.png"/>
			</div>

			<p className="title">{title}</p>
			<p className="description">{description}</p>
		</Page>
	);
};

export default Portfolio;
