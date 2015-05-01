import Reflux from 'reflux';
import _ from 'lodash';
import shortid from 'shortid';
import fs from 'fs';


var localStorageKey = 'projects';

var AppActions = Reflux.createActions([
	'onAddProject',					// Called by button in Home Page
	'onRemoveProject',			// Called by rightClick on project
	'onEditProject',
	'loadProjects',
	'loadProjectsSuccess',
	'loadProjectsError'
]);

AppActions.loadProjects.preEmit = function(data) {
	var loadedList = localStorage.getItem(localStorageKey);
	if (!loadedList) {
		var _projects = [];
	} else {
		var _projects = _.map(JSON.parse(loadedList), function(projectConfig) {
			var project = fs.readFileSync(projectConfig.path + '/.qeewiconfig', 'utf-8')
					project = JSON.parse(project.toString('utf8').replace(/^\uFEFF/, ''));
					project.path = projectConfig.path;
					project.key = projectConfig.key;
			return project;
		});
	}
	AppActions.loadProjectsSuccess(_projects);
};

export default AppActions;
