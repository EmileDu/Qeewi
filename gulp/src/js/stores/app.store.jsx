import Reflux from 'reflux';
import AppActions from '../actions/app.action.jsx';
import _ from 'lodash';
import shortid from 'shortid';
import jsondir from 'jsondir';
import fs from 'fs';
import gui from 'nw.gui';
import archiver from 'archiver';
import Handlebars from 'Handlebars';

var localStorageKey = 'projects';
var appDataTemplate = gui.App.dataPath+'/data/templates/';

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

	loadProjectsSuccess(projects, length) {
		this.projects = projects;

		this.trigger({
			projects: this.projects,
			length: length,
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

	ajaxCall(url, callback) {
		var err = '';
		var data = '';
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onload = function(){
			data = request.responseText;
			if (typeof callback == 'function') {
				callback('success', err, data);
			}
		}

		request.onerror = function() {
			err = request.responseText;
			if (typeof callback == 'function') {
				callback('error', err, data);
			}
		}

		request.send();
	},

	clean(string) {
		string = 	string.replace(/&quot;/g, '"')
										.replace(/&amp;#x27;/g, "'")
										.replace(/&#x27;/g, "'")
										.replace(/&lt;/g, '<')
										.replace(/&gt;/g, '>');

		return string;
	},

	addProject(data) {
		var store = this;
		var qeewiTpl,
				packageTpl,
				gulpfileTpl,
				indexTpl,
				skeletonTpl;

		qeewiTpl = {
			"title": data.title,
			"type": data.type,
			"desc": data.desc,
			"author": data.author,
			"version": "1.0.0",
			"thumb": data.thumb,
			"keywords": data.keywords,
			"option": {
				"resetcss": data.resetcss,
				"preprocss": data.preprocss,
				"preprojs": data.preprojs
			}
		};

		packageTpl = {
			"name":data.title,
			"version": "1.0.0",
			"description": data.desc,
			"author": data.author,
			"license": "ISC",
			"scripts": {
				"install": "npm install"
			},
			"dependencies": {

			},
			"devDependencies": {
				"del": "^1.1.1",
				"gulp": "^3.8.11",
				"gulp-load-plugins": "^0.10.0",
				"gulp-autoprefixer": "^1.0.1",
				"run-sequence": "^1.0.1"
			}
		};

		skeletonTpl = {
			"-path": data.path + '/' + data.title,
			"qeewi": {
				"-type": "f",
				"-name": ".qeewi",
				"-content": JSON.stringify(qeewiTpl)
			},
			"package": {
				"-type": "f",
				"-name": "package.json",
				"-content": JSON.stringify(packageTpl)
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
				"-type": "d",
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
			}
		};
		console.log(skeletonTpl);
		jsondir.json2dir(skeletonTpl, function(err, result) {
			console.log('coucou');
			if (err) throw err;
			console.log(result);
			store.updateList([{
				key: shortid.generate(),
				path: data.path + '/' + data.title
			}].concat(store.projects));
		});

	},

	exportProject(id) {
		var projet = _.find(this.projects, function(project) {
			return project.key == id;
		});
		var output = fs.createWriteStream('~/Desktop/'+projet.title+'.zip');
		var archive = archiver('zip');

		output.on('close', function() {
			console.log(archive.pointer() + ' total bytes');
			console.log('archiver has been finalized and the output file descriptor has closed.');
		});

		archive.on('error', function(err){
    	throw err;
		});

		archive.pipe(output);
		archive.directory('~'+projet.path);
		archive.finalize();
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
