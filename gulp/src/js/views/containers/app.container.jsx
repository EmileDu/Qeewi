'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../partials/header.partial.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<div className="app__content">
					<div className="wrapper">
						<RouteHandler />
					</div>
				</div>
			</div>
		);
	}
};

App.displayName = 'QeewiApp';

export default App;
