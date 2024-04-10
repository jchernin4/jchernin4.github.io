import React from 'react';

import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="contactcontainer">
				<a className="contactlink" href="https://github.com/jchernin4" target="_blank" rel="noreferrer">
 					<img className="contacticon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub logo"/>
					<p>jchernin4</p>
				</a>
			</div>

			<div className="contactcontainer">
				<a className="contactlink" href="https://www.linkedin.com/in/jeremy-chernin-6a8073251" target="_blank" rel="noreferrer">
 					<img className="contacticon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn logo"/>
					<p>jeremy-chernin-6a8073251</p>
				</a>
			</div>

			<div className="contactcontainer">
				<a className="contactlink" href="mailto:jeremychernin@gmail.com" target="_blank" rel="noreferrer">
 					<img className="contacticon" src="https://www.svgrepo.com/show/502648/email.svg" alt="Mail icon"/>
					<p>jeremychernin@gmail.com</p>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
