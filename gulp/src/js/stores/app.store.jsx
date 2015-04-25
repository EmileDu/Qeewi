import Reflux from 'reflux';
import AppActions from '../actions/app.action.jsx';
import _ from 'lodash';
import shortid from 'shortid';

var AppStore = Reflux.createStore({
	listenables: AppActions,
	init() {
			this.projects = [];
	},

	loadProjects() {
		this.trigger({
			loading: true
		})
	},

	loadProjectsSuccess(projects) {
		this.projects = projects

		this.trigger({
			projects: this.projects,
			loading: false
		})
	},

	loadProjectsError(error) {
		this.trigger({
			error: error,
			loading: false
		})
	},

	onEditProject: function() {

	},

	onAddProject: function() {
		this.updateList([{
			key: shortid.generate(),
			title: "Titre du projet",
			type: "Type de projet",
			version: "1.0.0"
		}].concat(_projects));
	},

	onRemoveProject: function(projectUID) {
		this.updateList(_.filter(_projects, function(project) {
			return project.uid !== projectUID;
		}));
	},

	updateList: function(list) {
		localStorage.setItem(localStorageKey, JSON.stringify(list));
		_projects = list;
		this.trigger(list);
	}
});

export default AppStore;
