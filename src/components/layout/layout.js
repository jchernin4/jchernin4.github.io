import { useNavigate, Outlet } from "react-router-dom";

import "./layout.css";


const Layout = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className="header">
			</div>


			<div>
				{/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
				<div className="tablist">
					<div
						className="tab"
						onClick={() => navigate("/")}
						onKeyDown={() => navigate("/")}
					>
						<p>Home</p>
					</div>
					<div
						className="tab"
						onClick={() => navigate("/about")}
						onKeyDown={() => navigate("/about")}
					>
						<p>About</p>
					</div>
				</div>

				<hr />

				{/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
