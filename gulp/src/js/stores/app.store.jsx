import Reflux from 'reflux';
import AppActions from '../actions/app.action.jsx';
import _ from 'lodash';
import shortid from 'shortid';
import jsondir from 'jsondir';

// import skeleton from '../skeleton.js';
var localStorageKey = 'projects';

var AppStore = Reflux.createStore({
	listenables: AppActions,
	init() {
			this.projects = [];
	},

	loadProject(id) {
		this.trigger({
			loading: true
		})
	},

	loadProjectSuccess(project) {
		this.project = project;

		this.trigger({
			project: this.project,
			loading: false
		})
	},

	loadProjects() {
		this.trigger({
			loading: true
		})
	},

	loadProjectsSuccess(projects) {
		this.projects = projects;

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

	onEditProject() {

	},

	addProject(data) {
		var store = this;
		var qeewiContent = {
			"title": data.title,
			"type": data.type,
			"desc": data.desc,
			"author": data.author,
			"version": "1.0.0"
		};

		jsondir.json2dir({
			"-path": data.path +'/'+ data.title,
			"qeewiconfig": {
				"-type": "f",
				"-name": ".qeewiconfig",
				"-content": JSON.stringify(qeewiContent)
			},
			"package": {
				"-type": "f",
				"-name": "package.json"
			},
			"gulp": {
				"-type": "f",
				"-name": "gulpfile.js"
			},
			"src": {
				"-type": "d",
				"index": {
					"-type": "f",
					"-name": "index.html"
				},
				"css": {
					"-type": "d"
				},
				"js": {
					"-type": "d"
				},
				"fonts": {
					"-type": "d"
				},
				"images": {
					"-type": "d"
				}
			},
			"dist": {
				"-type": "d"
			}
		}, function(err, result) {
			if (err) throw err;
			store.updateList([{
				key: shortid.generate(),
				path: data.path + '/' + data.title
			}].concat(store.projects));
		})
	},

	removeProject(id) {
		this.updateList(_.filter(this.projects, function(project) {
			return project.key !== id;
		}));
	},

	updateList(list) {
		localStorage.setItem(localStorageKey, JSON.stringify(list));
		this.projects = list;
		this.trigger(list);
	},

	isValidable(state) {
		this.trigger({isDisabled: !state});
	}

});

export default AppStore;
