import React from "react";

import Page from "../page";
import SkillBox from "../skill-box";

import "./home.css";

const Home = () => (
	<Page header="Home">
		<div className="intro">
			<img className="pfp" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasa-groundhandling.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fplaceholder-person-square.png&f=1&nofb=1&ipt=7785b6e525bdae4731f21fefc5bec1fb78706f18a8ee3d94ef1f4edcfd62c6ca&ipo=images" alt="Blank pfp"/>
			<p className="introtext">
Hello! My name is Jeremy Chernin, I'm a student at The Pennsylvania State University pursing a bachelor's in Computer Science.

I began programming back in November of 2014, when I created an account on a website called Scratch in the 5th grade. Although this was a relatively simple way of coding, it sparked my interest and caused me to branch out into learning JavaScript, specifically Node.js. From there, I learned Java, which I used for a long time to explore a bunch of different topics. The transition to C# was very easy since I was already familiar with Java, and that also helped with learning C++, which I learned shortly after.
			</p>
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
			<SkillBox imageSource="" description="Javalin"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" description="MongoDB"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" description="MySQL"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" description="React"/>
			<SkillBox imageSource="" description="Discord JDA"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" description="Nginx"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" description="Apache"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" description="Gradle"/>
			<SkillBox imageSource="" description="Swing"/>
			<SkillBox imageSource="" description="WPF"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" description="Selenium"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" description="Unity"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" description="Blender"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg" description="JetBrains"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" description="Visual Studio"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg" description="NeoVim"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" description="Git"/>
			<SkillBox imageSource="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" description="GitHub"/>
		</div>
	</Page>
);

export default Home;
