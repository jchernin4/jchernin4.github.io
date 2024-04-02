import React from "react";

import Page from "../page";

const Resume = () => (
	<Page header="Resume">
		<object data="/resume.pdf" type="application/pdf" width="100%" height="800px">
			<p>Unable to display pdf.</p>
		</object>
	</Page>
);

export default Resume;
