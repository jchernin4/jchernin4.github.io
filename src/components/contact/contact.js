import React from "react";

import Page from "../page";

import "./contact.css";

const Contact = () => (
	<Page header="Contact">
		<a href="https://github.com/jchernin4" target="_blank" rel="noreferrer">
 			<img className="contacticon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub logo"/>
		</a>
		<a href="https://www.linkedin.com/in/jeremy-chernin-6a8073251" target="_blank" rel="noreferrer">
 			<img className="contacticon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn logo"/>
		</a>
		<a href="mailto:jeremychernin@gmail.com" target="_blank" rel="noreferrer">
 			<img className="contacticon" src="https://www.svgrepo.com/show/502648/email.svg" alt="Mail icon"/>
		</a>
	</Page>
);

export default Contact;
