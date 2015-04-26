'use strict';

import React from 'react';

class NotFound extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="page">
				<h1>404!</h1>
				Route not found :/
      </div>
		);
	}
}

NotFound.displayName = 'Not Found page';

export default NotFound;
