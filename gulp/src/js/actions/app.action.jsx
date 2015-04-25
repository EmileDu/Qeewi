import Reflux from 'reflux';
import _ from 'lodash';
import shortid from 'shortid';

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
		var _projects = [{
			key : shortid.generate(),
			title: "Titre du projet",
			type: "Type de projet",
			version: "1.0.0"
		}];
	} else {
		var _projects = _.map(JSON.parse(loadedList), function(project) {
			return project;
		});
	}
	// var _projects = ['1','2','3'];
	AppActions.loadProjectsSuccess(_projects);
};

export default AppActions;
