'use strict';

import React from 'react';

class NewProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="page">
				<h1 className="page__title">New Project</h1>
				<p>New Project page</p>
			</div>
		);
	}
}

NewProject.displayName = 'New project page';

export default NewProject;
