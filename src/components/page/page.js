import React from "react";

/*<header className="App-header">{header && <h1>{header}</h1>}</header>*/

const Page = ({ header, children }) => (
	<div className="App">
		<body>{children}</body>
	</div>
);

export default Page;
