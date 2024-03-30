import React from "react";

const Page = ({ header, children }) => (
	<div className="App">
		<header className="App-header">
			{header && <h1>{header}</h1>}
		</header>

		<body>{children}</body>
	</div>
);

export default Page;
