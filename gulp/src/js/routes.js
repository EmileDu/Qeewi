import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

import App from './views/containers/app.container.jsx';
import Home from './views/pages/home.page.jsx';
import DashboardProject from './views/pages/dashboardproject.page.jsx';
import NewProject from './views/pages/newproject.page.jsx';
import NotFound from './views/pages/notfound.page.jsx';


var routes = (
	<Route name="App" path="/" handler={ App }>
    <Route name="DahsboardProject" handler={ DashboardProject } />
		<Route name="NewProject" handler={ NewProject } />
		<Route name="Homepage" handler={ Home } />
		<DefaultRoute handler={ Home } />
		<NotFoundRoute Handler={ NotFound } />
	</Route>

);

module.exports = routes;
