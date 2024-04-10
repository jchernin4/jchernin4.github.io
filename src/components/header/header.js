import React from 'react';
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav">
				<NavLink to="/" className="logo">
					Jeremy Chernin
				</NavLink>

				<div className="menu">
					<ul className="navlist">
						<li className="navitem">
							<NavLink className="navlink" to="/">Home</NavLink>
						</li>
						<li className="navitem">
							<NavLink className="navlink" to="/timeline">Timeline</NavLink>
						</li>
						<li className="navitem">
							<NavLink className="navlink" to="/resume">Resume</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
