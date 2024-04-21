import React from "react";

import Page from "../page";
import SkillBox from "../skill-box";

import Portfolio from "../portfolio";

import "./home.css";

const Home = () => (
	<Page header="Home">
		<div className="intro">
			<div className="introContainer">
				<p className="introtitle">
					Jeremy Chernin
				</p>
				<p className="introtext">
					Software developer and rising junior at The Pennsylvania State University pursing a bachelor's in Computer Science.
				</p>
			</div>
		</div>

		<h1 className="skilltitle">Languages</h1>

		<div className="skillscontainer">
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" description="Java"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" description="C#"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" description="C++"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" description="JavaScript"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" description="HTML"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" description="CSS"/>
		</div>
		
		<h1 className="skilltitle">Tools</h1>

		<div className="skillscontainer">
			<SkillBox imageSource="https://avatars.githubusercontent.com/u/28701086?s=200&v=4" description="Javalin"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" description="MongoDB"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" description="MySQL"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" description="React"/>
			<SkillBox imageSource="https://raw.githubusercontent.com/discord-jda/JDA/assets/assets/readme/logo.png" description="Discord JDA"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" description="Nginx"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" description="Apache"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" description="Gradle"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" description="Swing"/>
			<SkillBox imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-06f957e72756783fd7d73ff3e1b04a85_qhd.jpg&f=1&nofb=1&ipt=1b32cc047d3cba23a25bdde80203a2420552c346afb5ec900aa18aca0dea2bf9&ipo=images" description="WPF"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" description="Selenium"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" description="Unity"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" description="Blender"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg" description="JetBrains"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" description="Git"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" description="Visual Studio"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg" description="NeoVim"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" description="GitHub"/>
		</div>

		<Portfolio/>
	</Page>
);

export default Home;
