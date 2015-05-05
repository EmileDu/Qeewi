/**
 * Qeewi - Application to initialize quickly, easily and efficiently a website
 * @version v1.0.0
 * @license ISC
 */
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Router = __webpack_require__(6);
	
	var _Router2 = _interopRequireWildcard(_Router);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _routes = __webpack_require__(38);
	
	var _routes2 = _interopRequireWildcard(_routes);
	
	var _ProjectsData = __webpack_require__(39);
	
	var _ProjectsData2 = _interopRequireWildcard(_ProjectsData);
	
	var _MenuTemplate = __webpack_require__(40);
	
	var _MenuTemplate2 = _interopRequireWildcard(_MenuTemplate);
	
	var _AppMenu = __webpack_require__(56);
	
	var _AppMenu2 = _interopRequireWildcard(_AppMenu);
	
	var app = {};
	app.node = {};
	app.node.fs = __webpack_require__(7);
	app.node.gui = __webpack_require__(8);
	app.node.os = __webpack_require__(9);
	
	var tray;
	
	var isTrayOn = false;
	
	app.init = function () {
		this.initMenu(_MenuTemplate2['default']);
	};
	
	app.initDev = function () {
		if (isTrayOn) {
			tray.remove();
			isTrayOn = false;
		}
		this.initTray();
	};
	
	app.initMenu = function (template) {
		var gui = app.node.gui;
		var win = gui.Window.get();
		var nativeMenuBar = new gui.Menu({ type: 'menubar' });
		nativeMenuBar.createMacBuiltin && nativeMenuBar.createMacBuiltin('Qeewi');
	
		_AppMenu2['default'].extend(nativeMenuBar, template);
		win.menu = nativeMenuBar;
	};
	
	app.initTray = function () {
		tray = new app.node.gui.Tray({ icon: 'icons/tray_icon.png', tooltip: 'Qeewi' });
	
		var trayMenu = new app.node.gui.Menu();
		trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'DevTool', click: function click() {
				app.node.gui.Window.get().showDevTools();
			} }));
		trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'Reload', click: function click() {
				app.node.gui.Window.get().reload();
			} }));
		tray.menu = trayMenu;
	
		isTrayOn = true;
	};
	
	app.node.gui.Window.get().on('loaded', function () {
		// ProjectsData.init();
		app.init();
		_Router2['default'].run(_routes2['default'], function (Handler) {
			_React2['default'].render(_React2['default'].createElement(Handler, null), document.body);
		});
	});
	
	window.ondragover = window.ondrop = function (e) {
		e.preventDefault();return false;
	};

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("nw.gui");

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("os");

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Route$DefaultRoute$NotFoundRoute = __webpack_require__(6);
	
	var _App = __webpack_require__(96);
	
	var _App2 = _interopRequireWildcard(_App);
	
	var _Home = __webpack_require__(97);
	
	var _Home2 = _interopRequireWildcard(_Home);
	
	var _DashboardProject = __webpack_require__(98);
	
	var _DashboardProject2 = _interopRequireWildcard(_DashboardProject);
	
	var _NewProject = __webpack_require__(99);
	
	var _NewProject2 = _interopRequireWildcard(_NewProject);
	
	var _NotFound = __webpack_require__(100);
	
	var _NotFound2 = _interopRequireWildcard(_NotFound);
	
	var routes = _React2["default"].createElement(
		_Route$DefaultRoute$NotFoundRoute.Route,
		{ name: "App", path: "/", handler: _App2["default"] },
		_React2["default"].createElement(_Route$DefaultRoute$NotFoundRoute.Route, { name: "DahsboardProject", path: "/project", handler: _DashboardProject2["default"] }),
		_React2["default"].createElement(_Route$DefaultRoute$NotFoundRoute.Route, { name: "NewProject", path: "/newproject", handler: _NewProject2["default"] }),
		_React2["default"].createElement(_Route$DefaultRoute$NotFoundRoute.Route, { name: "Homepage", path: "/", handler: _Home2["default"] }),
		_React2["default"].createElement(_Route$DefaultRoute$NotFoundRoute.DefaultRoute, { handler: _Home2["default"] }),
		_React2["default"].createElement(_Route$DefaultRoute$NotFoundRoute.NotFoundRoute, { Handler: _NotFound2["default"] })
	);
	
	module.exports = routes;

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _shortid = __webpack_require__(5);
	
	var _shortid2 = _interopRequireWildcard(_shortid);
	
	var projects = [{ key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test' }, { key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test2' }, { key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test3' }, { key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test4' }];
	
	module.exports = {
		init: function init() {
			localStorage.clear();
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	};

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var gui = __webpack_require__(8);
	
	var menu = {
		'': {
			Préférences: {
				click: function click() {
					window.alert('click Example App -> "example item"');
				},
				key: ',' }
		},
		Aide: {
			'Conditions d\'utilisation': {
				click: function click() {
					window.alert('condition d\'utilisation');
				}
			},
			Documentation: {
				click: function click() {
					window.alert('Documentation');
				}
			},
			separator2: 'separator',
			'Reporter un bug': {
				click: function click() {
					window.alert('Report un bug');
				}
			}
		},
		Fenêtre: {
			separator: 'separator',
			Inspector: {
				click: function click() {
					var win = gui.Window.get();
					if (win.isDevToolsOpen()) {
						win.closeDevTools();
					} else {
						win.showDevTools();
					}
				},
				key: 'i'
			},
			Reload: {
				click: function click() {
					gui.Window.get().reloadDev();
				},
				key: 'r'
			}
		}
	};
	
	module.exports = menu;

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	var gui = window.nwDispatcher.nwGui || __webpack_require__(8);
	
	function Object_forEach (object, callback) {
	  for (var key in object) {
	    if (object.hasOwnProperty(key)) callback(key, object[key]);
	  }
	};
	
	var AppMenu = {
	  /**
	   * Append properties to application menu
	   */
	  extend: function(nativeMenuBar, newMenu) {
	    Object_forEach(newMenu, function (submenuName, submenu) {
	      var nativeSubmenu;
	      nativeMenuBar.items.forEach(function(es) {
	        if (es.label == submenuName) nativeSubmenu = es.submenu;
	      });
	      if (!nativeSubmenu) {
	        nativeSubmenu = new gui.Menu();
	        var position = nativeMenuBar.items.length - 1;
	        nativeMenuBar.insert(new gui.MenuItem({label: submenuName, submenu: nativeSubmenu}), position);
	      }
	      Object_forEach(submenu, function (itemName, callback) {
	        if (typeof callback == 'string') {
	          nativeSubmenu.append(new gui.MenuItem({ type: callback }));
	        } else {
	          var menuItem;
	          if (typeof callback == 'object') {
	            var options = {label: itemName};
	            Object_forEach(callback, function (key, value) {
	              options[key] = value;
	            });
	            menuItem = new gui.MenuItem(options);
	          } else {
	            menuItem = new gui.MenuItem({label: itemName});
	            menuItem.click = callback;
	          }
	          nativeSubmenu.append(menuItem);
	        }
	      });
	    });
	  },
	
	  createAndExtend: function (menuObject) {
	    var nativeMenuBar = new gui.Menu({type: "menubar"});
	    nativeMenuBar.createMacBuiltin && nativeMenuBar.createMacBuiltin("AppMenu");
	
	    AppMenu.extend(nativeMenuBar, menuObject);
	    gui.Window.get().menu = nativeMenuBar;
	  },
	
	  menuItem: function (menuName, itemName) {
	    var menu = gui.Window.get().menu;
	    var result;
	    menu.items.forEach(function(es) {
	      if (es.label == menuName) {
	        es.submenu.items.forEach(function(item) {
	          if (item.label == itemName) result = item;
	        });
	      }
	    });
	    return result;
	  },
	
	  callMenuItem: function (menuName, itemName) {
	    var item = this.menuItem(menuName, itemName);
	    if (item) item.click();
	  },
	
	  disableItem: function (menuName, itemName) {
	    var item = this.menuItem(menuName, itemName);
	    if (item) {
	      item.enabled = false;
	    } else {
	      console.log("can not find menu item: '" + menuName + " -> " + itemName);
	    }
	  },
	
	  enableItem: function (menuName, itemName) {
	    var item = this.menuItem(menuName, itemName);
	    if (item) {
	      item.enabled = true;
	    } else {
	      console.log("can not find menu item: '" + menuName + " -> " + itemName);
	    }
	  },
	};
	
	module.exports = AppMenu;

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _RouteHandler = __webpack_require__(6);
	
	var _Header = __webpack_require__(171);
	
	var _Header2 = _interopRequireWildcard(_Header);
	
	var App = (function (_React$Component) {
		function App(props) {
			_classCallCheck(this, App);
	
			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
		}
	
		_inherits(App, _React$Component);
	
		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'div',
					{ className: 'app', id: 'app', ref: 'app' },
					_React2['default'].createElement(_Header2['default'], { ref: 'app__header' }),
					_React2['default'].createElement(
						'div',
						{ className: 'app__content', ref: 'app__content' },
						_React2['default'].createElement(
							'div',
							{ className: 'wrapper' },
							_React2['default'].createElement(_RouteHandler.RouteHandler, null)
						)
					)
				);
			}
		}]);
	
		return App;
	})(_React2['default'].Component);
	
	;
	
	App.displayName = 'QeewiApp';
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _ProjectsList = __webpack_require__(172);
	
	var _ProjectsList2 = _interopRequireWildcard(_ProjectsList);
	
	var _AppStore = __webpack_require__(173);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(174);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var Home = (function (_React$Component) {
		function Home(props) {
			_classCallCheck(this, Home);
	
			_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
			this.state = {
				projects: [],
				loading: false
			};
		}
	
		_inherits(Home, _React$Component);
	
		_createClass(Home, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				document.title = 'Qeewi';
				this.unsubscribe = _AppStore2['default'].listen(this.onStatusChange.bind(this));
				_AppActions2['default'].loadProjects();
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unsubscribe();
			}
		}, {
			key: 'onStatusChange',
			value: function onStatusChange(state) {
				this.setState(state);
			}
		}, {
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'div',
					{ className: 'page' },
					_React2['default'].createElement(
						'h1',
						{ className: 'page__title' },
						'Home'
					),
					_React2['default'].createElement(_ProjectsList2['default'], this.state)
				);
			}
		}]);
	
		return Home;
	})(_React2['default'].Component);
	
	;
	
	Home.displayName = 'Home page';
	
	exports['default'] = Home;
	module.exports = exports['default'];

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _AppStore = __webpack_require__(173);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(174);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var _Image = __webpack_require__(175);
	
	var _Image2 = _interopRequireWildcard(_Image);
	
	var project = {};
	var projectID;
	var id;
	
	var router;
	
	var DashboardProject = (function (_React$Component) {
		function DashboardProject(props) {
			_classCallCheck(this, DashboardProject);
	
			_get(Object.getPrototypeOf(DashboardProject.prototype), 'constructor', this).call(this, props);
			this.state = { project: {} };
		}
	
		_inherits(DashboardProject, _React$Component);
	
		_createClass(DashboardProject, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				router = this.context.router;
				id = router.getCurrentQuery().id;
				projectID = router.getCurrentQuery().projectID;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.unsubscribe = _AppStore2['default'].listen(this.onStatusChange.bind(this));
				_AppActions2['default'].loadProject(projectID);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unsubscribe();
			}
		}, {
			key: 'onStatusChange',
			value: function onStatusChange(state) {
				this.setState(state);
				document.title = 'Qeewi | ' + this.state.project.title;
			}
		}, {
			key: 'render',
			value: function render() {
				var project = this.state.project;
				var file = project.thumbportrait || 'images/' + id + '_portrait';
				return _React2['default'].createElement(
					'div',
					{ className: 'page dashboard' },
					_React2['default'].createElement(
						'h1',
						{ className: 'page__title' },
						'Dashboard Project ',
						project.title
					),
					_React2['default'].createElement(_Image2['default'], {
						file: file,
						format: 'png',
						className: 'dashboard__thumb',
						alt: 'screenshot du projet',
						width: '391',
						height: '576',
						responsiveOption: ['1x', '2x'] }),
					_React2['default'].createElement(
						'div',
						{ className: 'dashboard__detail' },
						_React2['default'].createElement(
							'h2',
							{ className: 'dashboard__title' },
							project.title
						),
						_React2['default'].createElement(
							'p',
							{ className: 'dashboard__type' },
							project.type,
							' ',
							_React2['default'].createElement(
								'span',
								{ className: 'dashboard__version' },
								project.version
							)
						),
						_React2['default'].createElement(
							'p',
							{ className: 'dashboard__desc' },
							project.desc
						)
					)
				);
			}
		}]);
	
		return DashboardProject;
	})(_React2['default'].Component);
	
	DashboardProject.displayName = 'Dashboard Project page';
	DashboardProject.contextTypes = { router: _React2['default'].PropTypes.func };
	
	exports['default'] = DashboardProject;
	module.exports = exports['default'];

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Input = __webpack_require__(176);
	
	var _Input2 = _interopRequireWildcard(_Input);
	
	var _Dropzone = __webpack_require__(177);
	
	var _Dropzone2 = _interopRequireWildcard(_Dropzone);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _AppStore = __webpack_require__(173);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(174);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var requiredInput;
	var formValidateButton;
	var router;
	
	var NewProject = (function (_React$Component) {
		function NewProject(props) {
			_classCallCheck(this, NewProject);
	
			_get(Object.getPrototypeOf(NewProject.prototype), 'constructor', this).call(this, props);
			this.onChange = this.onChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.getFormData = this.getFormData.bind(this);
		}
	
		_inherits(NewProject, _React$Component);
	
		_createClass(NewProject, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				router = this.context.router;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				document.title = 'Qeewi | Nouveau projet';
				requiredInput = this.refs.newprojectform.getDOMNode().querySelectorAll('[required]');
				this.refs.inputPath.getDOMNode().setAttribute('nwdirectory', true);
				this.refs.inputPath.getDOMNode().setAttribute('directory', true);
			}
		}, {
			key: 'onChange',
			value: function onChange() {
				var isValidatable = false;
				var flag = false;
				_import2['default'].map(requiredInput, function (input) {
					if (_import2['default'].isEmpty(_import2['default'].trim(input.value))) {
						flag = true;
						return false;
					}
				});
				if (!flag) {
					isValidatable = true;
				};
				_AppActions2['default'].isValidable(isValidatable);
			}
		}, {
			key: 'getFormData',
			value: function getFormData() {
				var form = document.querySelector('#newprojectform');
				var data = form.querySelectorAll('input, textarea, button');
				return data;
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit() {
				console.log('submited');
				var data = this.getFormData();
				console.log(data);
				// AppActions.compileProject(isValidatable);
			}
		}, {
			key: 'render',
			value: function render() {
				if (router.getCurrentQuery().path !== undefined) {
					var pathValue = router.getCurrentQuery().path;
				} else {
					var pathValue = '';
				}
				return _React2['default'].createElement(
					'div',
					{ className: 'page', ref: 'newprojectpage' },
					_React2['default'].createElement(
						'h1',
						{ className: 'page__title' },
						'New Project'
					),
					_React2['default'].createElement(
						'form',
						{ ref: 'newprojectform', id: 'newprojectform', onChange: this.onChange, onSubmit: this.onSubmit },
						_React2['default'].createElement(
							'fieldset',
							{ className: 'form-section', id: 'infogen' },
							_React2['default'].createElement(
								'legend',
								{ className: 'form-section__title' },
								'Informations Générales'
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--8col input--shit2col',
										type: 'text',
										name: 'input-name',
										id: 'input-name',
										required: true },
									'Nom du projet'
								)
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--8col input--shit2col input--2row',
										type: 'textarea',
										name: 'input-desc',
										id: 'input-desc',
										required: false,
										maxlength: '400' },
									'Description du project'
								)
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--shit2col',
										type: 'text',
										name: 'input-keyword',
										id: 'input-keyword',
										required: false },
									'Mot-Clés'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col',
										type: 'text',
										name: 'input-author',
										id: 'input-author',
										required: false },
									'Auteur'
								)
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--shit6col input--dropzone',
										type: 'file',
										name: 'input-favicon',
										id: 'input-favicon',
										accept: 'image/*',
										required: false },
									_React2['default'].createElement(
										_Dropzone2['default'],
										{ className: 'input__label__content dropzone' },
										'Favicon'
									)
								)
							)
						),
						_React2['default'].createElement(
							'fieldset',
							{ className: 'form-section' },
							_React2['default'].createElement(
								'legend',
								{ className: 'form-section__title' },
								'Pré-configuration'
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--radio',
										type: 'radio',
										name: 'input-preconfig',
										value: 'siteweb',
										id: 'input-preconfig-siteweb' },
									'Site Web'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--radio',
										type: 'radio',
										name: 'input-preconfig',
										value: 'webapp',
										id: 'input-preconfig-webapp' },
									'Web Application'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--radio',
										type: 'radio',
										name: 'input-preconfig',
										value: 'prototype',
										id: 'input-preconfig-prototype' },
									'Prototype'
								)
							)
						),
						_React2['default'].createElement(
							'fieldset',
							{ className: 'form-section' },
							_React2['default'].createElement(
								'legend',
								{ className: 'form-section__title' },
								'Stylesheet'
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--radio',
										type: 'radio',
										name: 'input-resetcss',
										value: 'reset.css',
										id: 'input-resetcss-reset' },
									'Reset.css'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--radio',
										type: 'radio',
										name: 'input-resetcss',
										value: 'normalize.css',
										id: 'input-resetcss-normalize' },
									'Normalize.css'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--4col input--dropzone input--radio',
										type: 'file',
										name: 'input-resetcss',
										id: 'input-favicon',
										accept: 'image/*' },
									_React2['default'].createElement(
										_Dropzone2['default'],
										{ className: 'input__label__content dropzone' },
										'Reset personnel'
									)
								)
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--3col input--radio',
										type: 'radio',
										name: 'input-preprocss',
										value: 'SASS',
										id: 'input-preprocss-sass' },
									'SASS'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--3col input--radio',
										type: 'radio',
										name: 'input-preprocss',
										value: 'SCSS',
										id: 'input-preprocss-scss' },
									'SCSS'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--3col input--radio',
										type: 'radio',
										name: 'input-preprocss',
										value: 'LESS',
										id: 'input-preprocss-less' },
									'LESS'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--3col input--radio',
										type: 'radio',
										name: 'input-preprocss',
										value: 'Stylus',
										id: 'input-preprocss-stylus' },
									'Stylus'
								)
							)
						),
						_React2['default'].createElement(
							'fieldset',
							{ className: 'form-section' },
							_React2['default'].createElement(
								'legend',
								{ className: 'form-section__title' },
								'Javascript'
							),
							_React2['default'].createElement(
								'div',
								{ className: 'row' },
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--3col input--radio',
										type: 'radio',
										name: 'input-preprojs',
										value: 'CoffeeScript',
										id: 'input-preprojs-coffescript' },
									'CoffeeScript'
								),
								_React2['default'].createElement(
									_Input2['default'],
									{
										className: 'form-section__input input input--3col input--radio',
										type: 'radio',
										name: 'input-preprojs',
										value: 'LiveScript',
										id: 'input-preprojs-livescript' },
									'LiveScript'
								)
							)
						),
						_React2['default'].createElement(
							'fieldset',
							{ className: 'form-section' },
							_React2['default'].createElement(
								'legend',
								{ className: 'form-section__title' },
								'Typographie'
							)
						),
						_React2['default'].createElement('input', { type: 'file', ref: 'inputPath', id: 'newprojectpath', className: 'form-section__input input input--hidden', value: pathValue, onChange: this.handleSubmit }),
						_React2['default'].createElement(
							'button',
							{ type: 'submit', id: 'newprojectsubmit', className: 'form-section__input input input--hidden' },
							'Submit'
						)
					)
				);
			}
		}]);
	
		return NewProject;
	})(_React2['default'].Component);
	
	NewProject.displayName = 'New project page';
	NewProject.contextTypes = { router: _React2['default'].PropTypes.func.isRequired };
	
	exports['default'] = NewProject;
	module.exports = exports['default'];

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var NotFound = (function (_React$Component) {
		function NotFound() {
			_classCallCheck(this, NotFound);
	
			_get(Object.getPrototypeOf(NotFound.prototype), 'constructor', this).call(this);
		}
	
		_inherits(NotFound, _React$Component);
	
		_createClass(NotFound, [{
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'div',
					{ className: 'page' },
					_React2['default'].createElement(
						'h1',
						null,
						'404!'
					),
					'Route not found :/'
				);
			}
		}]);
	
		return NotFound;
	})(_React2['default'].Component);
	
	NotFound.displayName = 'Not Found page';
	
	exports['default'] = NotFound;
	module.exports = exports['default'];

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(6);
	
	var _SettingsModal = __webpack_require__(226);
	
	var _SettingsModal2 = _interopRequireWildcard(_SettingsModal);
	
	// import Search from '../../components/search.component.jsx';
	// import FormNavigation from '../../components/formNavigation.component.jsx';
	
	var _FormValidate = __webpack_require__(227);
	
	var _FormValidate2 = _interopRequireWildcard(_FormValidate);
	
	var _FormClose = __webpack_require__(228);
	
	var _FormClose2 = _interopRequireWildcard(_FormClose);
	
	var _Return = __webpack_require__(229);
	
	var _Return2 = _interopRequireWildcard(_Return);
	
	var _UpdateProject = __webpack_require__(230);
	
	var _UpdateProject2 = _interopRequireWildcard(_UpdateProject);
	
	var _EditProject = __webpack_require__(231);
	
	var _EditProject2 = _interopRequireWildcard(_EditProject);
	
	var _DeleteProject = __webpack_require__(232);
	
	var _DeleteProject2 = _interopRequireWildcard(_DeleteProject);
	
	var _ExportProject = __webpack_require__(233);
	
	var _ExportProject2 = _interopRequireWildcard(_ExportProject);
	
	var Header = (function (_React$Component) {
		function Header() {
			_classCallCheck(this, Header);
	
			_get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this);
		}
	
		_inherits(Header, _React$Component);
	
		_createClass(Header, [{
			key: 'render',
			value: function render() {
				var router = this.context.router;
	
				var path = router.getCurrentPath();
				path = path.split('?');
				var navigation = [];
				switch (path[0]) {
					case '/':
						break;
					case '/newproject':
						navigation.push(_React2['default'].createElement(_FormValidate2['default'], null), _React2['default'].createElement(_FormClose2['default'], null));
						break;
					case '/project':
						navigation.push(_React2['default'].createElement(_Return2['default'], null), _React2['default'].createElement(_EditProject2['default'], null), _React2['default'].createElement(_UpdateProject2['default'], null), _React2['default'].createElement(_DeleteProject2['default'], null), _React2['default'].createElement(_ExportProject2['default'], null));
						break;
					default:
						break;
				}
				return _React2['default'].createElement(
					'header',
					{ className: 'app__header header' },
					_React2['default'].createElement(_SettingsModal2['default'], null),
					navigation
				);
			}
		}]);
	
		return Header;
	})(_React2['default'].Component);
	
	Header.displayName = 'Header';
	Header.contextTypes = { router: _React2['default'].PropTypes.func.isRequired };
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Project = __webpack_require__(234);
	
	var _Project2 = _interopRequireWildcard(_Project);
	
	var _NewProject = __webpack_require__(235);
	
	var _NewProject2 = _interopRequireWildcard(_NewProject);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var ProjectsList = (function (_React$Component) {
		function ProjectsList() {
			_classCallCheck(this, ProjectsList);
	
			_get(Object.getPrototypeOf(ProjectsList.prototype), 'constructor', this).call(this);
		}
	
		_inherits(ProjectsList, _React$Component);
	
		_createClass(ProjectsList, [{
			key: 'render',
			value: function render() {
				var i = 0;
				var projects = _import2['default'].map(this.props.projects, function (project) {
					i++;
					if (i > 5) {
						i = 1;
					}
					return _React2['default'].createElement(_Project2['default'], { key: project.key, project: project, id: i });
				});
				return _React2['default'].createElement(
					'ul',
					{ className: 'projects-list' },
					_React2['default'].createElement(_NewProject2['default'], null),
					projects
				);
			}
		}]);
	
		return ProjectsList;
	})(_React2['default'].Component);
	
	;
	
	ProjectsList.displayName = 'ProjectsList';
	
	ProjectsList.propTypes = {
		projects: _React2['default'].PropTypes.arrayOf(_React2['default'].PropTypes.object)
	};
	
	exports['default'] = ProjectsList;
	module.exports = exports['default'];

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _Reflux = __webpack_require__(1);
	
	var _Reflux2 = _interopRequireWildcard(_Reflux);
	
	var _AppActions = __webpack_require__(174);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _shortid = __webpack_require__(5);
	
	var _shortid2 = _interopRequireWildcard(_shortid);
	
	var AppStore = _Reflux2['default'].createStore({
		listenables: _AppActions2['default'],
		init: function init() {
			this.projects = [];
		},
	
		loadProject: function loadProject(id) {
			this.trigger({
				loading: true
			});
		},
	
		loadProjectSuccess: function loadProjectSuccess(project) {
			this.project = project;
	
			this.trigger({
				project: this.project,
				loading: false
			});
		},
	
		loadProjects: function loadProjects() {
			this.trigger({
				loading: true
			});
		},
	
		loadProjectsSuccess: function loadProjectsSuccess(projects) {
			this.projects = projects;
	
			this.trigger({
				projects: this.projects,
				loading: false
			});
		},
	
		loadProjectsError: function loadProjectsError(error) {
			this.trigger({
				error: error,
				loading: false
			});
		},
	
		onEditProject: function onEditProject() {},
	
		onAddProject: function onAddProject() {
			this.updateList([{
				key: _shortid2['default'].generate(),
				title: 'Titre du projet',
				type: 'Type de projet',
				version: '1.0.0'
			}].concat(_projects));
		},
	
		onRemoveProject: function onRemoveProject(projectUID) {
			this.updateList(_import2['default'].filter(_projects, function (project) {
				return project.uid !== projectUID;
			}));
		},
	
		updateList: function updateList(list) {
			localStorage.setItem(localStorageKey, JSON.stringify(list));
			_projects = list;
			this.trigger(list);
		},
	
		isValidable: function isValidable(state) {
			this.trigger({ isDisabled: !state });
		},
	
		compileProject: function compileProject(data) {
			console.log(data);
		}
	});
	
	exports['default'] = AppStore;
	module.exports = exports['default'];

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _Reflux = __webpack_require__(1);
	
	var _Reflux2 = _interopRequireWildcard(_Reflux);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _shortid = __webpack_require__(5);
	
	var _shortid2 = _interopRequireWildcard(_shortid);
	
	var _fs = __webpack_require__(7);
	
	var _fs2 = _interopRequireWildcard(_fs);
	
	var localStorageKey = 'projects';
	
	var AppActions = _Reflux2['default'].createActions(['onAddProject', // Called by button in Home Page
	'onRemoveProject', // Called by rightClick on project
	'onEditProject', 'loadProjects', 'loadProjectsSuccess', 'loadProjectsError', 'loadProject', 'loadProjectSuccess', 'isValidable']);
	
	AppActions.loadProjects.preEmit = function (data) {
		var loadedList = localStorage.getItem(localStorageKey);
		if (!loadedList) {
			var _projects = [];
		} else {
			var _projects = _import2['default'].map(JSON.parse(loadedList), function (projectConfig) {
				var project = _fs2['default'].readFileSync(projectConfig.path + '/.qeewiconfig', 'utf-8');
				project = JSON.parse(project.toString('utf8').replace(/^\uFEFF/, ''));
				project.path = projectConfig.path;
				project.key = projectConfig.key;
				return project;
			});
		}
		AppActions.loadProjectsSuccess(_projects);
	};
	
	AppActions.loadProject.preEmit = function (id) {
	
		var loadedList = localStorage.getItem(localStorageKey);
		if (!loadedList) {
			var _project = {};
		} else {
			var project = _import2['default'].filter(JSON.parse(loadedList), function (projectConfig) {
				return projectConfig.key == id;
			});
			var _project = _fs2['default'].readFileSync(project[0].path + '/.qeewiconfig', 'utf-8');
			_project = JSON.parse(_project.toString('utf8').replace(/^\uFEFF/, ''));
			_project.path = project[0].path;
			_project.key = project[0].key;
		}
		AppActions.loadProjectSuccess(_project);
	};
	
	exports['default'] = AppActions;
	module.exports = exports['default'];

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(225);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _ClassNames = __webpack_require__(256);
	
	var _ClassNames2 = _interopRequireWildcard(_ClassNames);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var Image = (function (_React$Component) {
		function Image(props) {
			_classCallCheck(this, Image);
	
			_get(Object.getPrototypeOf(Image.prototype), 'constructor', this).call(this, props);
		}
	
		_inherits(Image, _React$Component);
	
		_createClass(Image, [{
			key: 'srcSet',
			value: function srcSet(option, file, format) {
				var srcset = _import2['default'].map(option, function (opt) {
					return file + '_' + opt + '.' + format + ' ' + opt;
				});
				return _import2['default'](srcset).toString();
			}
		}, {
			key: 'render',
			value: function render() {
				var src = this.props.file + '_1x.' + this.props.format;
				return _React2['default'].createElement('img', { className: _ClassNames2['default'](this.props.className),
					alt: this.props.alt,
					width: this.props.width,
					height: this.props.height,
					src: src,
					srcSet: this.srcSet(this.props.responsiveOption, this.props.file, this.props.format) });
			}
		}]);
	
		return Image;
	})(_React2['default'].Component);
	
	Image.displayName = 'Image';
	
	exports['default'] = Image;
	module.exports = exports['default'];

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _import = __webpack_require__(2);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _ClassNames = __webpack_require__(256);
	
	var _ClassNames2 = _interopRequireWildcard(_ClassNames);
	
	var Input = (function (_React$Component) {
		function Input(props) {
			_classCallCheck(this, Input);
	
			_get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props);
			this.state = { isFilled: false };
			this.handleChange = this.handleChange.bind(this);
		}
	
		_inherits(Input, _React$Component);
	
		_createClass(Input, [{
			key: 'handleChange',
			value: function handleChange(ev) {
				if (!_import2['default'].isEmpty(_import2['default'].trim(ev.target.value))) {
					console.log(!_import2['default'].isEmpty(_import2['default'].trim(ev.target.value)));
					this.setState({ isFilled: true });
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var id = this.props.id || 'input-' + this.props.type;
				var className = _ClassNames2['default'](this.props.className);
				var inputClassName = _ClassNames2['default']('input__field', { 'input__field--filled': this.state.isFilled });
	
				var field = [];
				var input = [];
	
				switch (this.props.type) {
					case 'checkbox':
						input.push(_React2['default'].createElement('input', {
							type: this.props.type,
							name: this.props.name,
							value: this.props.value,
							className: inputClassName,
							id: id,
							ref: id }));
						break;
					case 'radio':
						input.push(_React2['default'].createElement('input', {
							type: this.props.type,
							name: this.props.name,
							value: this.props.value,
							className: inputClassName,
							id: id,
							ref: id }));
						break;
					case 'file':
						input.push(_React2['default'].createElement('input', {
							type: this.props.type,
							name: this.props.name,
							className: inputClassName,
							id: id,
							ref: id,
							required: this.props.required,
							accept: this.props.accept,
							onInput: this.handleChange }));
						break;
					case 'text':
						input.push(_React2['default'].createElement('input', {
							type: this.props.type,
							className: inputClassName,
							id: id,
							ref: id,
							required: this.props.required,
							onInput: this.handleChange }));
						break;
					case 'textarea':
						input.push(_React2['default'].createElement('textarea', {
							className: inputClassName,
							id: id,
							ref: id,
							required: this.props.required,
							onInput: this.handleChange }));
						break;
					case 'search':
						break;
					default:
						input.push(_React2['default'].createElement('input', {
							type: this.props.type,
							className: inputClassName,
							id: id,
							ref: id,
							required: this.props.required,
							onInput: this.handleChange }));
						break;
				};
	
				switch (this.props.type) {
					case 'file':
						field.push({ input: input }, _React2['default'].createElement(
							'label',
							{ className: 'input__label', htmlFor: id },
							this.props.children
						));
						break;
					default:
						field.push({ input: input }, _React2['default'].createElement(
							'label',
							{ className: 'input__label', htmlFor: id },
							_React2['default'].createElement(
								'span',
								{ className: 'input__label__content' },
								this.props.children
							)
						));
						break;
				};
	
				return _React2['default'].createElement(
					'div',
					{ className: className },
					field
				);
			}
		}]);
	
		return Input;
	})(_React2['default'].Component);
	
	Input.displayName = 'Input';
	
	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var _ClassNames = __webpack_require__(256);
	
	var _ClassNames2 = _interopRequireWildcard(_ClassNames);
	
	var DropZone = (function (_React$Component) {
		function DropZone(props) {
			_classCallCheck(this, DropZone);
	
			_get(Object.getPrototypeOf(DropZone.prototype), 'constructor', this).call(this, props);
			this.state = { isDraging: props.isDraging || false, path: props.path || undefined };
			this.handleDragOver = this.handleDragOver.bind(this);
			this.handleDragLeave = this.handleDragLeave.bind(this);
			this.handleDrop = this.handleDrop.bind(this);
		}
	
		_inherits(DropZone, _React$Component);
	
		_createClass(DropZone, [{
			key: 'handleDragOver',
			value: function handleDragOver(ev) {
				ev.preventDefault();
				// if(!ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
				// 	this.refs.dropzone.refs.instruction.getDOMNode().value = 'Tu dois drop un dossier';
				// }
				this.setState({ isDraging: true });
			}
		}, {
			key: 'handleDragLeave',
			value: function handleDragLeave(ev) {
				this.setState({ isDraging: false });
			}
		}, {
			key: 'handleDrop',
			value: function handleDrop(ev) {
				console.log('coucou');
				ev.preventDefault();
				if (ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
					this.setState({ path: ev.dataTransfer.files[0].path });
				}
				this.setState({ isDraging: false });
			}
		}, {
			key: 'render',
			value: function render() {
				var className = _ClassNames2['default'](this.props.className, { 'dropzone--active': this.state.isDraging });
				return _React2['default'].createElement(
					'div',
					{ className: className,
						onDragOver: this.props.onDragOver || this.handleDragOver,
						onDragLeave: this.props.onDragLeave || this.handleDragLeave,
						onDrop: this.props.onDrop || this.handleDrop },
					this.props.children
				);
			}
		}]);
	
		return DropZone;
	})(_React2['default'].Component);
	
	;
	
	DropZone.displayName = 'Dropzone';
	
	exports['default'] = DropZone;
	module.exports = exports['default'];

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(257);


/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Modal = __webpack_require__(4);
	
	var _Modal2 = _interopRequireWildcard(_Modal);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var Element = document.body;
	
	var SettingsModal = (function (_React$Component) {
		function SettingsModal() {
			_classCallCheck(this, SettingsModal);
	
			_get(Object.getPrototypeOf(SettingsModal.prototype), 'constructor', this).call(this);
			_Modal2['default'].setAppElement(Element);
			this.state = { modalIsOpen: false };
			this.openModal = this.openModal.bind(this);
			this.closeModal = this.closeModal.bind(this);
		}
	
		_inherits(SettingsModal, _React$Component);
	
		_createClass(SettingsModal, [{
			key: 'openModal',
			value: function openModal() {
				this.setState({ modalIsOpen: true });
			}
		}, {
			key: 'closeModal',
			value: function closeModal() {
				this.setState({ modalIsOpen: false });
			}
		}, {
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'div',
					{ className: 'modal' },
					_React2['default'].createElement(
						'button',
						{ className: 'header__button header__button--settings button', onClick: this.openModal },
						_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-cog', link: 'images/Icons/svgdefs.svg' }),
						_React2['default'].createElement(
							'span',
							{ className: 'button__label' },
							'Préférences'
						)
					),
					_React2['default'].createElement(
						_Modal2['default'],
						{ isOpen: this.state.modalIsOpen, onRequestClose: this.closeModal },
						_React2['default'].createElement(
							'button',
							{ onClick: this.closeModal },
							'Fermer'
						)
					)
				);
			}
		}]);
	
		return SettingsModal;
	})(_React2['default'].Component);
	
	SettingsModal.displayName = 'Settings Modals';
	
	exports['default'] = SettingsModal;
	module.exports = exports['default'];

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _AppStore = __webpack_require__(173);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(174);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var FormValidate = (function (_React$Component) {
		function FormValidate() {
			_classCallCheck(this, FormValidate);
	
			_get(Object.getPrototypeOf(FormValidate.prototype), 'constructor', this).call(this);
			this.state = { isDisabled: true };
			this.handleClick = this.handleClick.bind(this);
		}
	
		_inherits(FormValidate, _React$Component);
	
		_createClass(FormValidate, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.unsubscribe = _AppStore2['default'].listen(this.isValidable.bind(this));
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unsubscribe();
			}
		}, {
			key: 'isValidable',
			value: function isValidable(state) {
				this.setState(state);
			}
		}, {
			key: 'handleClick',
			value: function handleClick() {
				console.log(document.querySelector('#newprojectpath').value);
				document.querySelector('#newprojectpath').click();
			}
		}, {
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'button',
					{ className: 'header__button button', disabled: this.state.isDisabled, onClick: this.handleClick },
					_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-circle-check', link: 'images/Icons/svgdefs.svg' }),
					_React2['default'].createElement(
						'span',
						{ className: 'button__label' },
						'Valider'
					)
				);
			}
		}]);
	
		return FormValidate;
	})(_React2['default'].Component);
	
	FormValidate.displayName = 'Form validation button';
	
	exports['default'] = FormValidate;
	module.exports = exports['default'];

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(6);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var FormClose = (function (_React$Component) {
		function FormClose() {
			_classCallCheck(this, FormClose);
	
			_get(Object.getPrototypeOf(FormClose.prototype), 'constructor', this).call(this);
		}
	
		_inherits(FormClose, _React$Component);
	
		_createClass(FormClose, [{
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					_Link.Link,
					{ className: 'header__button button', to: 'Homepage' },
					_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-circle-cross', link: 'images/Icons/svgdefs.svg' }),
					_React2['default'].createElement(
						'span',
						{ className: 'button__label' },
						'Annuler'
					)
				);
			}
		}]);
	
		return FormClose;
	})(_React2['default'].Component);
	
	FormClose.displayName = 'Form close button';
	
	exports['default'] = FormClose;
	module.exports = exports['default'];

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Router = __webpack_require__(6);
	
	var _Router2 = _interopRequireWildcard(_Router);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var Return = (function (_React$Component) {
		function Return() {
			_classCallCheck(this, Return);
	
			_get(Object.getPrototypeOf(Return.prototype), 'constructor', this).call(this);
			this.onClick = this.onClick.bind(this);
		}
	
		_inherits(Return, _React$Component);
	
		_createClass(Return, [{
			key: 'onClick',
			value: function onClick() {
				var router = this.context.router;
	
				router.transitionTo('Homepage');
			}
		}, {
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'button',
					{ className: 'header__button button', onClick: this.onClick },
					_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-back', link: 'images/Icons/svgdefs.svg' }),
					_React2['default'].createElement(
						'span',
						{ className: 'button__label' },
						'Retour'
					)
				);
			}
		}]);
	
		return Return;
	})(_React2['default'].Component);
	
	Return.displayName = 'Return';
	Return.contextTypes = { router: _React2['default'].PropTypes.func.isRequired };
	
	exports['default'] = Return;
	module.exports = exports['default'];

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var UpdateProject = (function (_React$Component) {
		function UpdateProject() {
			_classCallCheck(this, UpdateProject);
	
			_get(Object.getPrototypeOf(UpdateProject.prototype), 'constructor', this).call(this);
		}
	
		_inherits(UpdateProject, _React$Component);
	
		_createClass(UpdateProject, [{
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'button',
					{ className: 'header__button button', onClick: this.onClick },
					_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-reload', link: 'images/Icons/svgdefs.svg' }),
					_React2['default'].createElement(
						'span',
						{ className: 'button__label' },
						'Mettre à jour le projet'
					)
				);
			}
		}]);
	
		return UpdateProject;
	})(_React2['default'].Component);
	
	UpdateProject.displayName = 'Update Project Button';
	
	exports['default'] = UpdateProject;
	module.exports = exports['default'];

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Router = __webpack_require__(6);
	
	var _Router2 = _interopRequireWildcard(_Router);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var EditProject = (function (_React$Component) {
		function EditProject() {
			_classCallCheck(this, EditProject);
	
			_get(Object.getPrototypeOf(EditProject.prototype), 'constructor', this).call(this);
		}
	
		_inherits(EditProject, _React$Component);
	
		_createClass(EditProject, [{
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'button',
					{ className: 'header__button button', onClick: this.onClick },
					_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-edit', link: 'images/Icons/svgdefs.svg' }),
					_React2['default'].createElement(
						'span',
						{ className: 'button__label' },
						'Éditer le projet'
					)
				);
			}
		}]);
	
		return EditProject;
	})(_React2['default'].Component);
	
	EditProject.displayName = 'Edit Project Button';
	
	exports['default'] = EditProject;
	module.exports = exports['default'];

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var DeleteProject = (function (_React$Component) {
		function DeleteProject() {
			_classCallCheck(this, DeleteProject);
	
			_get(Object.getPrototypeOf(DeleteProject.prototype), 'constructor', this).call(this);
		}
	
		_inherits(DeleteProject, _React$Component);
	
		_createClass(DeleteProject, [{
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'button',
					{ className: 'header__button button', onClick: this.onClick },
					_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-circle-minus', link: 'images/Icons/svgdefs.svg' }),
					_React2['default'].createElement(
						'span',
						{ className: 'button__label' },
						'Supprimer le projet'
					)
				);
			}
		}]);
	
		return DeleteProject;
	})(_React2['default'].Component);
	
	DeleteProject.displayName = 'Delete Project Button';
	
	exports['default'] = DeleteProject;
	module.exports = exports['default'];

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var ExportProject = (function (_React$Component) {
		function ExportProject() {
			_classCallCheck(this, ExportProject);
	
			_get(Object.getPrototypeOf(ExportProject.prototype), 'constructor', this).call(this);
		}
	
		_inherits(ExportProject, _React$Component);
	
		_createClass(ExportProject, [{
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'button',
					{ className: 'header__button button', onClick: this.onClick },
					_React2['default'].createElement(_Icon2['default'], { className: 'button__icon', size: '32', icon: 'icon-esc', link: 'images/Icons/svgdefs.svg' }),
					_React2['default'].createElement(
						'span',
						{ className: 'button__label' },
						'Exporter le projet'
					)
				);
			}
		}]);
	
		return ExportProject;
	})(_React2['default'].Component);
	
	ExportProject.displayName = 'Export Project Button';
	
	exports['default'] = ExportProject;
	module.exports = exports['default'];

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(6);
	
	var _Image = __webpack_require__(175);
	
	var _Image2 = _interopRequireWildcard(_Image);
	
	var Project = (function (_React$Component) {
		function Project() {
			_classCallCheck(this, Project);
	
			_get(Object.getPrototypeOf(Project.prototype), 'constructor', this).call(this);
		}
	
		_inherits(Project, _React$Component);
	
		_createClass(Project, [{
			key: 'render',
			value: function render() {
				var project = this.props.project;
				var file = project.thumb || 'images/' + this.props.id;
				return _React2['default'].createElement(
					'li',
					{ className: 'projects-list__item project' },
					_React2['default'].createElement(
						_Link.Link,
						{ to: 'DahsboardProject', query: { projectID: project.key, id: this.props.id } },
						_React2['default'].createElement(_Image2['default'], {
							file: file,
							format: 'png',
							className: 'project__thumb',
							alt: 'screenshot du projet',
							width: '212',
							height: '144',
							responsiveOption: ['1x', '2x'] }),
						_React2['default'].createElement(
							'div',
							{ className: 'project__detail' },
							_React2['default'].createElement(
								'h2',
								{ className: 'project__title' },
								project.title
							),
							_React2['default'].createElement(
								'p',
								{ className: 'project__type' },
								project.type,
								_React2['default'].createElement(
									'span',
									{ className: 'project__version' },
									project.version
								)
							)
						)
					)
				);
			}
		}]);
	
		return Project;
	})(_React2['default'].Component);
	
	;
	
	Project.displayName = 'Project';
	
	exports['default'] = Project;
	module.exports = exports['default'];

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(3);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(6);
	
	var _Icon = __webpack_require__(236);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var _DropZone = __webpack_require__(177);
	
	var _DropZone2 = _interopRequireWildcard(_DropZone);
	
	var NewProject = (function (_React$Component) {
		function NewProject(props) {
			_classCallCheck(this, NewProject);
	
			_get(Object.getPrototypeOf(NewProject.prototype), 'constructor', this).call(this, props);
			this.handleDragOver = this.handleDragOver.bind(this);
			this.handleDragLeave = this.handleDragLeave.bind(this);
			this.handleDrop = this.handleDrop.bind(this);
			this.state = { isDraging: false, path: undefined };
		}
	
		_inherits(NewProject, _React$Component);
	
		_createClass(NewProject, [{
			key: 'handleDragOver',
			value: function handleDragOver(ev) {
				ev.preventDefault();
				this.setState({ isDraging: true });
			}
		}, {
			key: 'handleDragLeave',
			value: function handleDragLeave(ev) {
				ev.preventDefault();
				this.setState({ isDraging: false });
			}
		}, {
			key: 'handleDrop',
			value: function handleDrop(ev) {
				ev.preventDefault();
				if (ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
					this.setState({ path: ev.dataTransfer.files[0].path }, function () {
						var router = this.context.router;
	
						router.transitionTo('NewProject', null, { path: this.state.path });
					});
				}
				this.setState({ isDraging: false });
			}
		}, {
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'li',
					{ className: 'projects-list__item project valign-parent' },
					_React2['default'].createElement(
						_DropZone2['default'],
						{
							className: 'valign-child dropzone',
							ref: 'projectsdropzone',
							isDraging: this.state.isDraging,
							path: this.state.path,
							onDrop: this.handleDrop
						},
						_React2['default'].createElement(
							_Link.Link,
							{ to: 'NewProject' },
							_React2['default'].createElement(_Icon2['default'], { className: 'dropzone__icon', size: '32', icon: 'icon-plus', link: 'images/Icons/svgdefs.svg' }),
							_React2['default'].createElement(
								'h2',
								{ className: 'dropzone__label' },
								'Nouveau projet'
							),
							_React2['default'].createElement(
								'p',
								{ className: 'dropzone__instruction', ref: 'instruction' },
								'(Drop ton dossier ici)'
							)
						)
					)
				);
			}
		}]);
	
		return NewProject;
	})(_React2['default'].Component);
	
	;
	
	NewProject.displayName = 'NewProject DragDrop Field';
	NewProject.contextTypes = { router: _React2['default'].PropTypes.func.isRequired };
	
	exports['default'] = NewProject;
	module.exports = exports['default'];

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _React = __webpack_require__(225);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _ClassNames = __webpack_require__(256);
	
	var _ClassNames2 = _interopRequireWildcard(_ClassNames);
	
	var Icon = (function (_React$Component) {
		function Icon(props) {
			_classCallCheck(this, Icon);
	
			_get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).call(this, props);
		}
	
		_inherits(Icon, _React$Component);
	
		_createClass(Icon, [{
			key: 'createMarkup',
			value: function createMarkup() {
				var iconUrl = this.props.link + '#' + this.props.icon;
				return { __html: '<use xlink:href="' + iconUrl + '"></use>' };
			}
		}, {
			key: 'render',
			value: function render() {
				var className = _ClassNames2['default'](this.props.className);
				return _React2['default'].createElement('svg', { className: className, viewBox: '0 0 32 32', dangerouslySetInnerHTML: this.createMarkup() });
			}
		}]);
	
		return Icon;
	})(_React2['default'].Component);
	
	Icon.displayName = 'Icon';
	
	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	function classNames() {
		var classes = '';
		var arg;
	
		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}
			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}
	
	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}
	
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactWithAddons
	 */
	
	/**
	 * This module exists purely in the open source project, and is meant as a way
	 * to create a separate standalone build of React. This build has "addons", or
	 * functionality we've built and think might be useful but doesn't have a good
	 * place to live inside React core.
	 */
	
	'use strict';
	
	var LinkedStateMixin = __webpack_require__(266);
	var React = __webpack_require__(11);
	var ReactComponentWithPureRenderMixin =
	  __webpack_require__(267);
	var ReactCSSTransitionGroup = __webpack_require__(268);
	var ReactFragment = __webpack_require__(106);
	var ReactTransitionGroup = __webpack_require__(269);
	var ReactUpdates = __webpack_require__(156);
	
	var cx = __webpack_require__(168);
	var cloneWithProps = __webpack_require__(270);
	var update = __webpack_require__(271);
	
	React.addons = {
	  CSSTransitionGroup: ReactCSSTransitionGroup,
	  LinkedStateMixin: LinkedStateMixin,
	  PureRenderMixin: ReactComponentWithPureRenderMixin,
	  TransitionGroup: ReactTransitionGroup,
	
	  batchedUpdates: ReactUpdates.batchedUpdates,
	  classSet: cx,
	  cloneWithProps: cloneWithProps,
	  createFragment: ReactFragment.create,
	  update: update
	};
	
	if ("production" !== process.env.NODE_ENV) {
	  React.addons.Perf = __webpack_require__(150);
	  React.addons.TestUtils = __webpack_require__(272);
	}
	
	module.exports = React;


/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedStateMixin
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactLink = __webpack_require__(275);
	var ReactStateSetters = __webpack_require__(276);
	
	/**
	 * A simple mixin around ReactLink.forState().
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update. Note: you may want to use keyOf()
	   * if you're using Google Closure Compiler advanced mode.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function(key) {
	    return new ReactLink(
	      this.state[key],
	      ReactStateSetters.createStateKeySetter(this, key)
	    );
	  }
	};
	
	module.exports = LinkedStateMixin;


/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(206);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;


/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(11);
	
	var assign = __webpack_require__(74);
	
	var ReactTransitionGroup = React.createFactory(
	  __webpack_require__(269)
	);
	var ReactCSSTransitionGroupChild = React.createFactory(
	  __webpack_require__(277)
	);
	
	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',
	
	  propTypes: {
	    transitionName: React.PropTypes.string.isRequired,
	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool
	  },
	
	  getDefaultProps: function() {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },
	
	  _wrapChild: function(child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return ReactCSSTransitionGroupChild(
	      {
	        name: this.props.transitionName,
	        appear: this.props.transitionAppear,
	        enter: this.props.transitionEnter,
	        leave: this.props.transitionLeave
	      },
	      child
	    );
	  },
	
	  render: function() {
	    return (
	      ReactTransitionGroup(
	        assign({}, this.props, {childFactory: this._wrapChild})
	      )
	    );
	  }
	});
	
	module.exports = ReactCSSTransitionGroup;


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(11);
	var ReactTransitionChildMapping = __webpack_require__(278);
	
	var assign = __webpack_require__(74);
	var cloneWithProps = __webpack_require__(270);
	var emptyFunction = __webpack_require__(162);
	
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function() {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function() {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(
	      nextProps.children
	    );
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(
	        prevChildMapping,
	        nextChildMapping
	      )
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function(key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(
	        this._handleDoneAppearing.bind(this, key)
	      );
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function(key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function(key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(
	        this._handleDoneEntering.bind(this, key)
	      );
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function(key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function(key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function(key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      var newChildren = assign({}, this.state.children);
	      delete newChildren[key];
	      this.setState({children: newChildren});
	    }
	  },
	
	  render: function() {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(cloneWithProps(
	          this.props.childFactory(child),
	          {ref: key, key: key}
	        ));
	      }
	    }
	    return React.createElement(
	      this.props.component,
	      this.props,
	      childrenToRender
	    );
	  }
	});
	
	module.exports = ReactTransitionGroup;


/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule cloneWithProps
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(63);
	var ReactPropTransferer = __webpack_require__(279);
	
	var keyOf = __webpack_require__(115);
	var warning = __webpack_require__(87);
	
	var CHILDREN_PROP = keyOf({children: null});
	
	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {ReactElement} child child element you'd like to clone
	 * @param {object} props props you'd like to modify. className and style will be
	 * merged automatically.
	 * @return {ReactElement} a clone of child with props merged in.
	 */
	function cloneWithProps(child, props) {
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      !child.ref,
	      'You are calling cloneWithProps() on a child with a ref. This is ' +
	      'dangerous because you\'re creating a new child which will not be ' +
	      'added as a ref to its parent.'
	    ) : null);
	  }
	
	  var newProps = ReactPropTransferer.mergeProps(props, child.props);
	
	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
	      child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }
	
	  // The current API doesn't retain _owner and _context, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return ReactElement.createElement(child.type, newProps);
	}
	
	module.exports = cloneWithProps;


/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	 /* global hasOwnProperty:true */
	
	'use strict';
	
	var assign = __webpack_require__(74);
	var keyOf = __webpack_require__(115);
	var invariant = __webpack_require__(84);
	var hasOwnProperty = {}.hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({$push: null});
	var COMMAND_UNSHIFT = keyOf({$unshift: null});
	var COMMAND_SPLICE = keyOf({$splice: null});
	var COMMAND_SET = keyOf({$set: null});
	var COMMAND_MERGE = keyOf({$merge: null});
	var COMMAND_APPLY = keyOf({$apply: null});
	
	var ALL_COMMANDS_LIST = [
	  COMMAND_PUSH,
	  COMMAND_UNSHIFT,
	  COMMAND_SPLICE,
	  COMMAND_SET,
	  COMMAND_MERGE,
	  COMMAND_APPLY
	];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function(command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  ) : invariant(Array.isArray(value)));
	  var specValue = spec[command];
	  ("production" !== process.env.NODE_ENV ? invariant(
	    Array.isArray(specValue),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    specValue
	  ) : invariant(Array.isArray(specValue)));
	}
	
	function update(value, spec) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof spec === 'object',
	    'update(): You provided a key path to update() that did not contain one ' +
	    'of %s. Did you forget to include {%s: ...}?',
	    ALL_COMMANDS_LIST.join(', '),
	    COMMAND_SET
	  ) : invariant(typeof spec === 'object'));
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Object.keys(spec).length === 1,
	      'Cannot have more than one key in an object with %s',
	      COMMAND_SET
	    ) : invariant(Object.keys(spec).length === 1));
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    ("production" !== process.env.NODE_ENV ? invariant(
	      mergeObj && typeof mergeObj === 'object',
	      'update(): %s expects a spec of type \'object\'; got %s',
	      COMMAND_MERGE,
	      mergeObj
	    ) : invariant(mergeObj && typeof mergeObj === 'object'));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      nextValue && typeof nextValue === 'object',
	      'update(): %s expects a target of type \'object\'; got %s',
	      COMMAND_MERGE,
	      nextValue
	    ) : invariant(nextValue && typeof nextValue === 'object'));
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function(item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function(item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Array.isArray(value),
	      'Expected %s target to be an array; got %s',
	      COMMAND_SPLICE,
	      value
	    ) : invariant(Array.isArray(value)));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Array.isArray(spec[COMMAND_SPLICE]),
	      'update(): expected spec of %s to be an array of arrays; got %s. ' +
	      'Did you forget to wrap your parameters in an array?',
	      COMMAND_SPLICE,
	      spec[COMMAND_SPLICE]
	    ) : invariant(Array.isArray(spec[COMMAND_SPLICE])));
	    spec[COMMAND_SPLICE].forEach(function(args) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        Array.isArray(args),
	        'update(): expected spec of %s to be an array of arrays; got %s. ' +
	        'Did you forget to wrap your parameters in an array?',
	        COMMAND_SPLICE,
	        spec[COMMAND_SPLICE]
	      ) : invariant(Array.isArray(args)));
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof spec[COMMAND_APPLY] === 'function',
	      'update(): expected spec of %s to be a function; got %s.',
	      COMMAND_APPLY,
	      spec[COMMAND_APPLY]
	    ) : invariant(typeof spec[COMMAND_APPLY] === 'function'));
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTestUtils
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(104);
	var EventPluginHub = __webpack_require__(189);
	var EventPropagators = __webpack_require__(185);
	var React = __webpack_require__(11);
	var ReactElement = __webpack_require__(63);
	var ReactEmptyComponent = __webpack_require__(154);
	var ReactBrowserEventEmitter = __webpack_require__(153);
	var ReactCompositeComponent = __webpack_require__(222);
	var ReactInstanceHandles = __webpack_require__(68);
	var ReactInstanceMap = __webpack_require__(110);
	var ReactMount = __webpack_require__(69);
	var ReactUpdates = __webpack_require__(156);
	var SyntheticEvent = __webpack_require__(190);
	
	var assign = __webpack_require__(74);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	function Event(suffix) {}
	
	/**
	 * @class ReactTestUtils
	 */
	
	/**
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function(instance) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return React.render(instance, div);
	  },
	
	  isElement: function(element) {
	    return ReactElement.isValidElement(element);
	  },
	
	  isElementOfType: function(inst, convenienceConstructor) {
	    return (
	      ReactElement.isValidElement(inst) &&
	      inst.type === convenienceConstructor
	    );
	  },
	
	  isDOMComponent: function(inst) {
	    // TODO: Fix this heuristic. It's just here because composites can currently
	    // pretend to be DOM components.
	    return !!(inst && inst.tagName && inst.getDOMNode);
	  },
	
	  isDOMComponentElement: function(inst) {
	    return !!(inst &&
	              ReactElement.isValidElement(inst) &&
	              !!inst.tagName);
	  },
	
	  isCompositeComponent: function(inst) {
	    return typeof inst.render === 'function' &&
	           typeof inst.setState === 'function';
	  },
	
	  isCompositeComponentWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponent(inst) &&
	             (inst.constructor === type));
	  },
	
	  isCompositeComponentElement: function(inst) {
	    if (!ReactElement.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return (
	      typeof prototype.render === 'function' &&
	      typeof prototype.setState === 'function'
	    );
	  },
	
	  isCompositeComponentElementWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponentElement(inst) &&
	             (inst.constructor === type));
	  },
	
	  getRenderedChildOfCompositeComponent: function(inst) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return null;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    return internalInstance._renderedComponent.getPublicInstance();
	  },
	
	  findAllInRenderedTree: function(inst, test) {
	    if (!inst) {
	      return [];
	    }
	    var ret = test(inst) ? [inst] : [];
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      var internalInstance = ReactInstanceMap.get(inst);
	      var renderedChildren = internalInstance
	        ._renderedComponent
	        ._renderedChildren;
	      var key;
	      for (key in renderedChildren) {
	        if (!renderedChildren.hasOwnProperty(key)) {
	          continue;
	        }
	        if (!renderedChildren[key].getPublicInstance) {
	          continue;
	        }
	        ret = ret.concat(
	          ReactTestUtils.findAllInRenderedTree(
	            renderedChildren[key].getPublicInstance(),
	            test
	          )
	        );
	      }
	    } else if (ReactTestUtils.isCompositeComponent(inst)) {
	      ret = ret.concat(
	        ReactTestUtils.findAllInRenderedTree(
	          ReactTestUtils.getRenderedChildOfCompositeComponent(inst),
	          test
	        )
	      );
	    }
	    return ret;
	  },
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function(root, className) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      var instClassName = inst.props.className;
	      return ReactTestUtils.isDOMComponent(inst) && (
	        (instClassName && (' ' + instClassName + ' ').indexOf(' ' + className + ' ') !== -1)
	      );
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function(root, className) {
	    var all =
	      ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match ' +
	        '(found: ' + all.length + ') for class:' + className
	      );
	    }
	    return all[0];
	  },
	
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function(root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isDOMComponent(inst) &&
	            inst.tagName === tagName.toUpperCase();
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function(root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for tag:' + tagName);
	    }
	    return all[0];
	  },
	
	
	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function(root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isCompositeComponentWithType(
	        inst,
	        componentType
	      );
	    });
	  },
	
	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function(root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(
	      root,
	      componentType
	    );
	    if (all.length !== 1) {
	      throw new Error(
	        'Did not find exactly one match for componentType:' + componentType
	      );
	    }
	    return all[0];
	  },
	
	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function(module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || "div";
	
	    module.prototype.render.mockImplementation(function() {
	      return React.createElement(
	        mockTagName,
	        null,
	        this.props.children
	      );
	    });
	
	    return this;
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on an `Element` node.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function(topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(
	      topLevelType,
	      fakeNativeEvent
	    );
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on the `ReactDOMComponent` `comp`.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`.
	   * @param comp {!ReactDOMComponent}
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function(
	      topLevelType,
	      comp,
	      fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(
	      topLevelType,
	      comp.getDOMNode(),
	      fakeNativeEvent
	    );
	  },
	
	  nativeTouchData: function(x, y) {
	    return {
	      touches: [
	        {pageX: x, pageY: y}
	      ]
	    };
	  },
	
	  createRenderer: function() {
	    return new ReactShallowRenderer();
	  },
	
	  Simulate: null,
	  SimulateNative: {}
	};
	
	/**
	 * @class ReactShallowRenderer
	 */
	var ReactShallowRenderer = function() {
	  this._instance = null;
	};
	
	ReactShallowRenderer.prototype.getRenderOutput = function() {
	  return (
	    (this._instance && this._instance._renderedComponent &&
	     this._instance._renderedComponent._renderedOutput)
	    || null
	  );
	};
	
	var NoopInternalComponent = function(element) {
	  this._renderedOutput = element;
	  this._currentElement = element === null || element === false ?
	    ReactEmptyComponent.emptyElement :
	    element;
	};
	
	NoopInternalComponent.prototype = {
	
	  mountComponent: function() {
	  },
	
	  receiveComponent: function(element) {
	    this._renderedOutput = element;
	    this._currentElement = element === null || element === false ?
	      ReactEmptyComponent.emptyElement :
	      element;
	  },
	
	  unmountComponent: function() {
	  }
	
	};
	
	var ShallowComponentWrapper = function() { };
	assign(
	  ShallowComponentWrapper.prototype,
	  ReactCompositeComponent.Mixin, {
	    _instantiateReactComponent: function(element) {
	      return new NoopInternalComponent(element);
	    },
	    _replaceNodeWithMarkupByID: function() {},
	    _renderValidatedComponent:
	      ReactCompositeComponent.Mixin.
	        _renderValidatedComponentWithoutOwnerOrContext
	  }
	);
	
	ReactShallowRenderer.prototype.render = function(element, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
	  this._render(element, transaction, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	};
	
	ReactShallowRenderer.prototype.unmount = function() {
	  if (this._instance) {
	    this._instance.unmountComponent();
	  }
	};
	
	ReactShallowRenderer.prototype._render = function(element, transaction, context) {
	  if (!this._instance) {
	    var rootID = ReactInstanceHandles.createReactRootID();
	    var instance = new ShallowComponentWrapper(element.type);
	    instance.construct(element);
	
	    instance.mountComponent(rootID, transaction, context);
	
	    this._instance = instance;
	  } else {
	    this._instance.receiveComponent(element, transaction, context);
	  }
	};
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function(domComponentOrNode, eventData) {
	    var node;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = domComponentOrNode.getDOMNode();
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }
	
	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(
	      ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType],
	      ReactMount.getID(node),
	      fakeNativeEvent
	    );
	    assign(event, eventData);
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	
	    ReactUpdates.batchedUpdates(function() {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue();
	    });
	  };
	}
	
	function buildSimulators() {
	  ReactTestUtils.Simulate = {};
	
	  var eventType;
	  for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element || ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}
	
	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function() {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function() {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};
	
	buildSimulators();
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */
	
	function makeNativeSimulator(eventType) {
	  return function(domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    } else if (!!domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    }
	  };
	}
	
	var eventType;
	for (eventType in topLevelTypes) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ?
	    eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element || ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] =
	    makeNativeSimulator(eventType);
	}
	
	module.exports = ReactTestUtils;


/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLink
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   this._handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */
	
	var React = __webpack_require__(11);
	
	/**
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}
	
	/**
	 * Creates a PropType that enforces the ReactLink API and optionally checks the
	 * type of the value being passed inside the link. Example:
	 *
	 * MyComponent.propTypes = {
	 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
	 * }
	 */
	function createLinkTypeChecker(linkType) {
	  var shapes = {
	    value: typeof linkType === 'undefined' ?
	      React.PropTypes.any.isRequired :
	      linkType.isRequired,
	    requestChange: React.PropTypes.func.isRequired
	  };
	  return React.PropTypes.shape(shapes);
	}
	
	ReactLink.PropTypes = {
	  link: createLinkTypeChecker
	};
	
	module.exports = ReactLink;


/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactStateSetters
	 */
	
	'use strict';
	
	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(component, funcReturningState) {
	    return function(a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },
	
	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};
	
	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}
	
	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },
	
	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};
	
	module.exports = ReactStateSetters;


/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(11);
	
	var CSSCore = __webpack_require__(281);
	var ReactTransitionEvents = __webpack_require__(282);
	
	var onlyChild = __webpack_require__(76);
	var warning = __webpack_require__(87);
	
	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	var NO_EVENT_TIMEOUT = 5000;
	
	var noEventListener = null;
	
	
	if ("production" !== process.env.NODE_ENV) {
	  noEventListener = function() {
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'transition(): tried to perform an animation without ' +
	      'an animationend or transitionend event after timeout (' +
	      '%sms). You should either disable this ' +
	      'transition in JS or add a CSS animation/transition.',
	      NO_EVENT_TIMEOUT
	    ) : null);
	  };
	}
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  transition: function(animationType, finishCallback) {
	    var node = this.getDOMNode();
	    var className = this.props.name + '-' + animationType;
	    var activeClassName = className + '-active';
	    var noEventTimeout = null;
	
	    var endListener = function(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	      if ("production" !== process.env.NODE_ENV) {
	        clearTimeout(noEventTimeout);
	      }
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, endListener);
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    ReactTransitionEvents.addEndEventListener(node, endListener);
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);
	
	    if ("production" !== process.env.NODE_ENV) {
	      noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
	    }
	  },
	
	  queueClass: function(className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },
	
	  flushClassNameQueue: function() {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(
	        CSSCore.addClass.bind(CSSCore, this.getDOMNode())
	      );
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function() {
	    this.classNameQueue = [];
	  },
	
	  componentWillUnmount: function() {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	  },
	
	  componentWillAppear: function(done) {
	    if (this.props.appear) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function(done) {
	    if (this.props.enter) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function(done) {
	    if (this.props.leave) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  render: function() {
	    return onlyChild(this.props.children);
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;


/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var ReactChildren = __webpack_require__(58);
	var ReactFragment = __webpack_require__(106);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around ReactChildren.map().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function(children) {
	    if (!children) {
	      return children;
	    }
	    return ReactFragment.extract(ReactChildren.map(children, function(child) {
	      return child;
	    }));
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function(prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
	            pendingNextKey
	          );
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;


/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTransferer
	 */
	
	'use strict';
	
	var assign = __webpack_require__(74);
	var emptyFunction = __webpack_require__(162);
	var joinClasses = __webpack_require__(283);
	
	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function(props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}
	
	var transferStrategyMerge = createTransferStrategy(function(a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});
	
	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};
	
	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }
	
	    var transferStrategy = TransferStrategies[thisKey];
	
	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}
	
	/**
	 * ReactPropTransferer are capable of transferring props to another component
	 * using a `transferPropsTo` method.
	 *
	 * @class ReactPropTransferer
	 */
	var ReactPropTransferer = {
	
	  /**
	   * Merge two props objects using TransferStrategies.
	   *
	   * @param {object} oldProps original props (they take precedence)
	   * @param {object} newProps new props to merge in
	   * @return {object} a new object containing both sets of props merged.
	   */
	  mergeProps: function(oldProps, newProps) {
	    return transferInto(assign({}, oldProps), newProps);
	  }
	
	};
	
	module.exports = ReactPropTransferer;


/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */
	
	var invariant = __webpack_require__(84);
	
	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSSCore.addClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));
	
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSSCore.removeClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));
	
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className
	          .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
	          .replace(/\s+/g, ' ') // multiple spaces to one
	          .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSS.hasClass takes only a single class name.'
	    ) : invariant(!/\s/.test(className)));
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }
	
	};
	
	module.exports = CSSCore;


/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(77);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;


/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	function joinClasses(className/*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;


/***/ }

});
//# sourceMappingURL=bundle.js.map