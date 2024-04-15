import Page from "../page";
import PortfolioBox from "../portfolio-box";

import "./portfolio.css";

const Portfolio = () => {
	<Page header="Portfolio">
		<p>This is a test</p>
		<PortfolioBox title="Poseidon" date="January 2019" link="https://github.com/jchernin4/Poseidon" description="A tool for Discord to automate tasks for administrators, along with some miscellaneous commands. Used by over 100,000 people at it's peak."/> <PortfolioBox title="Econ" date="April 2021" link="https://github.com/jchernin4/Econ" description='Another Discord economy bot, but this one was a lot more advanced. It allowed users to "invest" their currency into stocks, which followed real life stock market prices through an algorithm that combined different assets into a made-up one that players could purchase. It also allowed players to gamble their money with games like "roulette" and "coinflip".'/>

		<PortfolioBox title="Project Zero" date="May 2022" link="https://github.com/jchernin4/Project-Zero" description="A game similar to the game Ravenfield. The player is in control of a large army of AI-controlled soliders, and must capture areas of interest in order to earn points. The twist was that the player could control where the AI bots move to by selecting them on a map and clicking on a point that they want to control. It was meant to be a multiplayer game, but was never finished."/>
		<PortfolioBox title="GreenSolve" date="November 2022" link="https://github.com/jchernin4/GreenSolve-HackPSU2022" altLink="https://devpost.com/software/greensolve" description="A submission for HackPSU 2022, which won in two categories: Sustainability and Most Creative Use of Twilio. This application was focused on connecting people in the same area to work together on green projects such as park cleanups and community gardens by allowing organizers to send out a text message notification about an event to all users that are registered in the same zip code." imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/285/107/datas/gallery.jpg"/>
		<PortfolioBox title="CHiP" date="November 2022" link="https://github.com/jchernin4/CHiP" description="Another Discord bot that allowed users to compete in 10 different games against other players for a fake currency, including blackjack, connect4, slots, roulette, and more. Allowed users to buy fictional items such as cars which they could upgrade and race against other players for more currency, or generators which could be upgraded and would passively provide players with more income."/>

		<PortfolioBox title="Neurosis" date="January 2023" link="https://github.com/jchernin4/Neurosis" altLink="https://store.steampowered.com/app/2102180/Neurosis/" description='A horror puzzle game with a deep story about a teenager with depression who must escape a dream world that is fillied with monsters of his own creation. This game has its own page on the Steam game launcher, but was never finished.' videoSource="https://cdn.akamai.steamstatic.com/steam/apps/256938162/movie480_vp9.webm?t=1680185327"/>
		<PortfolioBox title="RIT Brickhack" date="Febuary 2023" link="https://github.com/jchernin4/RIT-Brickhack" altLink="https://devpost.com/software/mathmaze" description="A submission for RIT's Brickhack hackathon. It is a multiplayer game made in Unity, which let players compete to solve math problems before the other player." youtubeSource="gsRvnLCrsZ8"/>
		<PortfolioBox title="StudyBuddy" date="April 2023" link="https://github.com/jchernin4/StudyBuddy" altLink="https://devpost.com/software/studybuddy-6gyz5x" description="A submission for HackPSU Spring 2023, where users could find students in their classes to study with." imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/439/050/datas/gallery.jpg"/>
		<PortfolioBox title="Zenith" date="April 2023" link="https://github.com/jchernin4/Zenith" description="A recoil control script for the game Rust with many features, such as humanization, smoothness, process hiding, and security features like hardware ID detection which made sure an account that purchased access to the script would only be useable on a single computer."/>
		<PortfolioBox title="The Eden Project" date="May 2023" link="https://github.com/jchernin4/TheEdenProject" description="A singleplayer tower defense game where the player is stranded on a planet and must defend themselves from alien enemies and helicopters. They do this by placing turrents to defend their space station while managing different resources like power and iron to craft and upgrade more turrets."/>
		<PortfolioBox title="Adlite" date="October 2023" link="https://github.com/jchernin4/AdLite" altLink="https://devpost.com/software/adlite" description="A submission to HackPSU Fall 2023, which won first place in both the Entrepreneurship and Best Use of Taipy categories. It provided an alternative advertisement solution to traditional ads by instead using a cryptocurrency miner to act as a less invasive option for those that prefer to not have a cluttered webpage." imageSource="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/635/760/datas/gallery.jpg"/>


		<PortfolioBox title="AsciiJack" date="January 2024" link="https://github.com/jchernin4/asciijack" description="A console-based blackjack game."/>
	</Page>
};

export default Portfolio;
