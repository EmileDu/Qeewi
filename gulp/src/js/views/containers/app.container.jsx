import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../partials/header.partial.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app" id="app" ref="app">
				<Header ref="app__header"/>
				<div className="app__content" ref="app__content">
						<div className="wrapper">
							<RouteHandler/>
						</div>
				</div>
			</div>
		);
	}
};

App.displayName = 'QeewiApp';

export default App;
