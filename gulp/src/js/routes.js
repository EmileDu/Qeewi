'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// route handler components
var App = require('./views/containers/main.container.js');
var DashboardProject = require('./views/pages/dashboardproject.page.js');
var NewProject = require('./views/pages/newproject.page.js');
var Home = require('./views/pages/home.page.js');

module.exports = (
  <Route name="app" path="/" handler={App}>
		<DefaultRoute handler={Home} />
    <Route name="dashboardproject" path="/:project" handler={DashboardProject} />
		<Route name="newproject" path="/new-project" handler={NewProject} />
  </Route>
);
