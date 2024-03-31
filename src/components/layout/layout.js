import { Outlet } from "react-router-dom";

import "./layout.css";

import Header from "../header";

const Layout = () => {
	return (
		<div>
			<Header/>

			<Outlet/>
		</div>
	);
};

export default Layout;
