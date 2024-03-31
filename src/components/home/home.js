import React from "react";

import Page from "../page";
import SkillBox from "../skill-box";

import "./home.css";

const Home = () => (
	<Page header="Home">
		<div className="intro">
			<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasa-groundhandling.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fplaceholder-person-square.png&f=1&nofb=1&ipt=7785b6e525bdae4731f21fefc5bec1fb78706f18a8ee3d94ef1f4edcfd62c6ca&ipo=images"/>
			<p className="introtext">
Hello! My name is Jeremy Chernin, I'm a student at The Pennsylvania State University pursing a bachelor's in Computer Science.

I began programming back in November of 2014, when I created an account on a website called Scratch in the 5th grade. Although this was a relatively simple way of coding, it sparked my interest and caused me to branch out into learning JavaScript, specifically Node.js. From there, I learned Java, which I used for a long time to explore a bunch of different topics. The transition to C# was very easy since I was already familiar with Java, and that also helped with learning C++, which I learned shortly after.
			</p>
		</div>

		<h1>Languages</h1>

		<div className="skillscontainer">
			<SkillBox imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F198-1984828_java-icon-transparent-hd-png-download.png&f=1&nofb=1&ipt=e0d13090a87d8818676207feab4328e81d00e3f64164bece1550b9280a3ff5cb&ipo=images" description="Java"/>
			<SkillBox imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fcsharp-icon-1755x2048-5r3ugs1f.png&f=1&nofb=1&ipt=8aabdfbfde4562235a9a12f371f92980565bb706c02ff7a868f582b76d739d18&ipo=images" description="C#"/>
			<SkillBox imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F694%2F533%2Fpng-transparent-the-c-programming-language-internet-explorer-miscellaneous-blue-cdr.png&f=1&nofb=1&ipt=543baef22e84b5bcfb04ecd2738199a50beeb4f3e98e90a89d67ea7e301f7285&ipo=images" description="C++"/>
			<SkillBox imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.britefish.net%2Fwp-content%2Fuploads%2F2019%2F06%2Flogo-javascript-2.png&f=1&nofb=1&ipt=ed46c2924fe6aaf092e6a6d02a816d2e0986f1ac53a673442195e067429dc35b&ipo=images" description="Javascript"/>
			<SkillBox imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fhtml5-logo-png%2Fhtml5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png&f=1&nofb=1&ipt=33ce704a0ad323a85d9a54595a722d9a7fe607cda4e5293b1119ea835d46fddb&ipo=images" description="HTML"/>
			<SkillBox imageSource="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fcss-3%2Flogo-css-3-2048.png&f=1&nofb=1&ipt=6447d769bf3bbe88d9bcf48c7e276b72da08edbab770c75ec889fa3b57c23b7b&ipo=images" description="CSS"/>
		</div>
		<p>

Some of the tools I've used:

    Languages: Java, C#, C++, JavaScript, HTML, CSS, PHP

    Packages/Tools
        Javalin - Java HTTP server
        MongoDB and MySQL - Database
        React - Component-based website building tool for JavaScript/HTML/CSS
        Discord JDA - Java Discord API wrapper
        Nginx and Apache - HTTP and reverse proxy server
        Gradle - Java build tool
        JavaFX/Swing JFrames - Java GUI
        WPF - C# GUI
        Selenium - Browser automation
        FabricMC, Bukkit, and Forge - Minecraft mod development toolchain
        Unity - Game engine
        Blender - 3D modelling/animation
        JetBrains IDEs (Rider, Intellij, CLion, WebStorm)
        Visual Studio IDEs (VSCode, Visual Studio)
        NeoVim - Text editor
        Git/GitHub - Version control

    Larger Concepts
        APIs (creating my own and implementing others')
        Networking
            TCP/UDP protocols
            HTTP protocol
            Proxying
            IRC
            Routing over Tor network
        Cybersecurity
        Cryptocurrency
        Databases
        Game programming/hacking
        OCR (image-to-text processing)
        Web scraping
        Task automation
        Investment automation/analysis
</p>
	</Page>
);

export default Home;
