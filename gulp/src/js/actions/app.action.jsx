import Reflux from 'reflux';
import _ from 'lodash';
import shortid from 'shortid';
import fs from 'fs';
import gui from 'nw.gui';


var localStorageKey = 'projects';

var AppActions = Reflux.createActions([
	'addProject',
	'removeProject',
	'exportProject',
	'editProject',
	'loadProjects',
	'loadProjectsSuccess',
	'loadProjectsError',
	'loadProject',
	'loadProjectSuccess',
	'isValidable',
	'compileProject'
]);

AppActions.loadProjects.preEmit = function(data) {
	var loadedList = localStorage.getItem(localStorageKey);
	if (!loadedList) {
		var _projects = [];
	} else {
		var _length = JSON.parse(loadedList).length;
		var _projects = _.map(JSON.parse(loadedList), function(projectConfig) {
			var project = fs.readFileSync(projectConfig.path + '/.qeewi', 'utf-8');
					project = JSON.parse(project.toString('utf8').replace(/^\uFEFF/, ''));
					project.path = projectConfig.path;
					project.key = projectConfig.key;
			return project;
		});
	}
	AppActions.loadProjectsSuccess(_projects, _length);
};

AppActions.loadProject.preEmit = function(id) {

	var loadedList = localStorage.getItem(localStorageKey);
	if (!loadedList) {
		var _project = {};
	} else {
		var project= _.filter(JSON.parse(loadedList), function(projectConfig) {
			return projectConfig.key == id;
		});
		var _project =  fs.readFileSync(project[0].path + '/.qeewi', 'utf-8');
				_project = JSON.parse(_project.toString('utf8').replace(/^\uFEFF/, ''));
				_project.path = project[0].path;
				_project.key = project[0].key;
	}
	AppActions.loadProjectSuccess(_project);
};

export default AppActions;
