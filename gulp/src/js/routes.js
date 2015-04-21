'use strict';

import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

import App from './views/containers/app.container.jsx';
import Home from './views/pages/home.page.jsx';
import DashboardProject from './views/pages/dashboardproject.page.jsx';
import NewProject from './views/pages/newproject.page.jsx';
import NotFound from './views/pages/notfound.page.jsx';


var routes = (
	<Route name="app" path="/" handler={ App }>
    <Route name="dashboardproject" path="/:project" handler={ DashboardProject } />
		<Route name="newproject" path="/new-project" handler={ NewProject } />
		<Route name="home" handler={ Home } />
		<DefaultRoute handler={ Home } />
		<NotFoundRoute Handler={ NotFound } />
	</Route>

);

export default routes;
