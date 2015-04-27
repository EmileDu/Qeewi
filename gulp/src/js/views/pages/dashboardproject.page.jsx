'use strict';

import React from 'react';

class DashboardProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="page">
				<h1 className="page__title">Dashboard Project</h1>
				<p>Dashboard Project page</p>
			</div>
		);
	}
}

DashboardProject.displayName = 'Dashboard Project page';

export default DashboardProject;
