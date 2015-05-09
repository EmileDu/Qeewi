/**
 * Qeewi - Application to initialize quickly, easily and efficiently a website
 * @version v1.0.0
 * @license ISC
 */
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Router = __webpack_require__(2);
	
	var _Router2 = _interopRequireWildcard(_Router);
	
	var _import = __webpack_require__(5);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _routes = __webpack_require__(92);
	
	var _routes2 = _interopRequireWildcard(_routes);
	
	var _ProjectsData = __webpack_require__(93);
	
	var _ProjectsData2 = _interopRequireWildcard(_ProjectsData);
	
	var _MenuTemplate = __webpack_require__(94);
	
	var _MenuTemplate2 = _interopRequireWildcard(_MenuTemplate);
	
	var _AppMenu = __webpack_require__(162);
	
	var _AppMenu2 = _interopRequireWildcard(_AppMenu);
	
	var app = {};
	app.node = {};
	app.node.fs = __webpack_require__(37);
	app.node.gui = __webpack_require__(38);
	app.node.os = __webpack_require__(39);
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("nw.gui");

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("os");

/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Route$DefaultRoute$NotFoundRoute = __webpack_require__(2);
	
	var _App = __webpack_require__(167);
	
	var _App2 = _interopRequireWildcard(_App);
	
	var _Home = __webpack_require__(168);
	
	var _Home2 = _interopRequireWildcard(_Home);
	
	var _DashboardProject = __webpack_require__(169);
	
	var _DashboardProject2 = _interopRequireWildcard(_DashboardProject);
	
	var _NewProject = __webpack_require__(170);
	
	var _NewProject2 = _interopRequireWildcard(_NewProject);
	
	var _NotFound = __webpack_require__(171);
	
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _shortid = __webpack_require__(6);
	
	var _shortid2 = _interopRequireWildcard(_shortid);
	
	var projects = [{ key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test' }, { key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test2' }, { key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test3' }, { key: _shortid2['default'].generate(), path: '/Users/emileduval/Desktop/test4' }];
	
	module.exports = {
		init: function init() {
			localStorage.clear();
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var gui = __webpack_require__(38);
	
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
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var gui = window.nwDispatcher.nwGui || __webpack_require__(38);
	
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
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _RouteHandler = __webpack_require__(2);
	
	var _Header = __webpack_require__(223);
	
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
/* 168 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _ProjectsList = __webpack_require__(224);
	
	var _ProjectsList2 = _interopRequireWildcard(_ProjectsList);
	
	var _AppStore = __webpack_require__(220);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(221);
	
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
/* 169 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _import = __webpack_require__(5);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _AppStore = __webpack_require__(220);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(221);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var _Image = __webpack_require__(225);
	
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
/* 170 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Dropzone = __webpack_require__(219);
	
	var _Dropzone2 = _interopRequireWildcard(_Dropzone);
	
	var _import = __webpack_require__(5);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _AppStore = __webpack_require__(220);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(221);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var _Input = __webpack_require__(222);
	
	var _Input2 = _interopRequireWildcard(_Input);
	
	var _ClassNames = __webpack_require__(243);
	
	var _ClassNames2 = _interopRequireWildcard(_ClassNames);
	
	var requiredInput;
	var formValidateButton;
	var router;
	
	var NewProject = (function (_React$Component) {
		function NewProject(props) {
			_classCallCheck(this, NewProject);
	
			_get(Object.getPrototypeOf(NewProject.prototype), 'constructor', this).call(this, props);
			this.state = { isPanelOpen: false };
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.handleOpenPanel = this.handleOpenPanel.bind(this);
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
			key: 'handleChange',
			value: function handleChange() {
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
			key: 'getInputValue',
			value: function getInputValue(list, identifier) {
				var value = _import2['default'].result(_import2['default'].find(list, function (item) {
					return item.name == identifier;
				}), 'value');
				if (value == undefined) {
					return false;
				}
				return value;
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit() {
				var formData = this.getFormData();
				formData = _import2['default'].filter(formData, function (input) {
					return input.value != '';
				});
				formData = _import2['default'].filter(formData, function (input) {
					if (input.type == 'radio') {
						return input.checked;
					} else {
						return input;
					}
				});
	
				var data = {
					path: this.getInputValue(formData, 'input-path') || '',
					title: this.getInputValue(formData, 'input-title') || '',
					type: this.getInputValue(formData, 'input-preconfig') || 'Site Web',
					desc: this.getInputValue(formData, 'input-desc') || '',
					author: this.getInputValue(formData, 'input-author') || ''
				};
	
				_AppActions2['default'].addProject(data);
				var router = this.context.router;
	
				router.transitionTo('Homepage');
			}
		}, {
			key: 'handleOpenPanel',
			value: function handleOpenPanel() {
				if (this.state.isPanelOpen) {
					this.setState({ isPanelOpen: false });
				} else {
					this.setState({ isPanelOpen: true });
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var classPanel = _ClassNames2['default']('form-section', 'form-panel', { 'form-panel--open': this.state.isPanelOpen });
	
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
						{ ref: 'newprojectform', id: 'newprojectform', onChange: this.handleChange },
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
										name: 'input-title',
										id: 'input-title',
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
							'div',
							{ className: classPanel },
							_React2['default'].createElement(
								'button',
								{ className: 'form-panel__button', onClick: this.handleOpenPanel },
								'Plus d\'option'
							),
							_React2['default'].createElement(
								'fieldset',
								null,
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
											value: 'Site Web',
											id: 'input-preconfig-siteweb',
											checked: true },
										'Site Web'
									),
									_React2['default'].createElement(
										_Input2['default'],
										{
											className: 'form-section__input input input--4col input--radio',
											type: 'radio',
											name: 'input-preconfig',
											value: 'Web Application',
											id: 'input-preconfig-webapp' },
										'Web Application'
									),
									_React2['default'].createElement(
										_Input2['default'],
										{
											className: 'form-section__input input input--4col input--radio',
											type: 'radio',
											name: 'input-preconfig',
											value: 'Prototype',
											id: 'input-preconfig-prototype' },
										'Prototype'
									)
								)
							)
						),
						_React2['default'].createElement('input', { type: 'file', ref: 'inputPath', id: 'input-path', name: 'input-path', className: 'form-section__input input input--hidden', onChange: this.handleSubmit })
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
/* 171 */
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
	
	var _React = __webpack_require__(1);
	
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
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(252);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var _ClassNames = __webpack_require__(243);
	
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
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _Reflux = __webpack_require__(4);
	
	var _Reflux2 = _interopRequireWildcard(_Reflux);
	
	var _AppActions = __webpack_require__(221);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var _import = __webpack_require__(5);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _shortid = __webpack_require__(6);
	
	var _shortid2 = _interopRequireWildcard(_shortid);
	
	var _jsondir = __webpack_require__(265);
	
	var _jsondir2 = _interopRequireWildcard(_jsondir);
	
	// import skeleton from '../skeleton.js';
	var localStorageKey = 'projects';
	
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
	
		addProject: function addProject(data) {
			var store = this;
			var qeewiContent = {
				title: data.title,
				type: data.type,
				desc: data.desc,
				author: data.author,
				version: '1.0.0'
			};
	
			_jsondir2['default'].json2dir({
				'-path': data.path + '/' + data.title,
				qeewiconfig: {
					'-type': 'f',
					'-name': '.qeewiconfig',
					'-content': JSON.stringify(qeewiContent)
				},
				'package': {
					'-type': 'f',
					'-name': 'package.json'
				},
				gulp: {
					'-type': 'f',
					'-name': 'gulpfile.js'
				},
				src: {
					'-type': 'd',
					index: {
						'-type': 'f',
						'-name': 'index.html'
					},
					css: {
						'-type': 'd'
					},
					js: {
						'-type': 'd'
					},
					fonts: {
						'-type': 'd'
					},
					images: {
						'-type': 'd'
					}
				},
				dist: {
					'-type': 'd'
				}
			}, function (err, result) {
				if (err) throw err;
				store.updateList([{
					key: _shortid2['default'].generate(),
					path: data.path + '/' + data.title
				}].concat(store.projects));
			});
		},
	
		removeProject: function removeProject(id) {
			this.updateList(_import2['default'].filter(this.projects, function (project) {
				return project.key !== id;
			}));
		},
	
		updateList: function updateList(list) {
			localStorage.setItem(localStorageKey, JSON.stringify(list));
			this.projects = list;
			this.trigger(list);
		},
	
		isValidable: function isValidable(state) {
			this.trigger({ isDisabled: !state });
		}
	
	});
	
	exports['default'] = AppStore;
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _Reflux = __webpack_require__(4);
	
	var _Reflux2 = _interopRequireWildcard(_Reflux);
	
	var _import = __webpack_require__(5);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _shortid = __webpack_require__(6);
	
	var _shortid2 = _interopRequireWildcard(_shortid);
	
	var _fs = __webpack_require__(37);
	
	var _fs2 = _interopRequireWildcard(_fs);
	
	var localStorageKey = 'projects';
	
	var AppActions = _Reflux2['default'].createActions(['addProject', // Called by button in Home Page
	'removeProject', // Called by rightClick on project
	'editProject', 'loadProjects', 'loadProjectsSuccess', 'loadProjectsError', 'loadProject', 'loadProjectSuccess', 'isValidable', 'compileProject']);
	
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
/* 222 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _import = __webpack_require__(5);
	
	var _import2 = _interopRequireWildcard(_import);
	
	var _ClassNames = __webpack_require__(243);
	
	var _ClassNames2 = _interopRequireWildcard(_ClassNames);
	
	var id;
	var className;
	var classInput;
	var input;
	var field;
	var value;
	
	var Input = (function (_React$Component) {
		function Input(props) {
			_classCallCheck(this, Input);
	
			_get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props);
			this.state = { value: '', isFilled: false };
			this.handleChange = this.handleChange.bind(this);
		}
	
		_inherits(Input, _React$Component);
	
		_createClass(Input, [{
			key: 'handleChange',
			value: function handleChange(ev) {
				this.setState({ value: ev.target.value });
				if (!_import2['default'].isEmpty(_import2['default'].trim(ev.target.value))) {
					this.setState({ isFilled: true });
				}
			}
		}, {
			key: 'getInputType',
			value: function getInputType(type) {
				var input = [];
				switch (type) {
					case 'checkbox':
						input.push(_React2['default'].createElement('input', {
							key: id,
							type: this.props.type,
							name: this.props.name,
							value: this.props.value,
							className: 'input__field',
							id: id,
							ref: id }));
						break;
					case 'radio':
						input.push(_React2['default'].createElement('input', {
							key: id,
							type: this.props.type,
							name: this.props.name,
							value: this.props.value,
							className: 'input__field',
							id: id,
							ref: id,
							checked: this.props.checked }));
						break;
					case 'file':
						input.push(_React2['default'].createElement('input', {
							key: id,
							type: this.props.type,
							name: this.props.name,
							className: classInput,
							id: id,
							ref: id,
							required: this.props.required,
							accept: this.props.accept,
							onInput: this.handleChange }));
						break;
					case 'text':
						input.push(_React2['default'].createElement('input', {
							type: this.props.type,
							className: classInput,
							id: id,
							name: this.props.name,
							ref: id,
							value: value,
							required: this.props.required,
							onChange: this.handleChange }));
						break;
					case 'textarea':
						input.push(_React2['default'].createElement('textarea', {
							key: id,
							className: classInput,
							id: id,
							name: this.props.name,
							ref: id,
							value: value,
							required: this.props.required,
							onInput: this.handleChange }));
						break;
					case 'search':
						break;
					default:
						input.push(_React2['default'].createElement('input', {
							key: id,
							type: this.props.type,
							className: classInput,
							id: id,
							ref: id,
							value: value,
							required: this.props.required,
							onInput: this.handleChange }));
						break;
				}
				return input;
			}
		}, {
			key: 'getFieldMarkup',
			value: function getFieldMarkup(type) {
				var field = [];
				switch (type) {
					case 'file':
						field.push({ input: input }, _React2['default'].createElement(
							'label',
							{
								key: id,
								className: 'input__label',
								htmlFor: id },
							this.props.children
						));
						break;
					default:
						field.push({ input: input }, _React2['default'].createElement(
							'label',
							{
								key: id,
								className: 'input__label',
								htmlFor: id },
							_React2['default'].createElement(
								'span',
								{ className: 'input__label__content' },
								this.props.children
							)
						));
						break;
				}
				return field;
			}
		}, {
			key: 'render',
			value: function render() {
				id = this.props.id || 'input-' + this.props.type;
				className = _ClassNames2['default'](this.props.className);
				classInput = _ClassNames2['default']('input__field', { 'input__field--filled': this.state.isFilled });
				value = this.state.value;
				input = this.getInputType(this.props.type);
				field = this.getFieldMarkup(this.props.type);
	
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
/* 223 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(2);
	
	var _SettingsModal = __webpack_require__(255);
	
	var _SettingsModal2 = _interopRequireWildcard(_SettingsModal);
	
	// import Search from '../../components/search.component.jsx';
	// import FormNavigation from '../../components/formNavigation.component.jsx';
	
	var _FormValidate = __webpack_require__(256);
	
	var _FormValidate2 = _interopRequireWildcard(_FormValidate);
	
	var _FormClose = __webpack_require__(257);
	
	var _FormClose2 = _interopRequireWildcard(_FormClose);
	
	var _Return = __webpack_require__(258);
	
	var _Return2 = _interopRequireWildcard(_Return);
	
	var _UpdateProject = __webpack_require__(259);
	
	var _UpdateProject2 = _interopRequireWildcard(_UpdateProject);
	
	var _EditProject = __webpack_require__(260);
	
	var _EditProject2 = _interopRequireWildcard(_EditProject);
	
	var _DeleteProject = __webpack_require__(261);
	
	var _DeleteProject2 = _interopRequireWildcard(_DeleteProject);
	
	var _ExportProject = __webpack_require__(262);
	
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
						navigation.push(_React2['default'].createElement(_FormValidate2['default'], { key: 'formValidate' }), _React2['default'].createElement(_FormClose2['default'], { key: 'formClose' }));
						break;
					case '/project':
						navigation.push(_React2['default'].createElement(_Return2['default'], { key: 'return' }), _React2['default'].createElement(_EditProject2['default'], { key: 'editProject' }), _React2['default'].createElement(_UpdateProject2['default'], { key: 'updateProject' }), _React2['default'].createElement(_DeleteProject2['default'], { key: 'deleteProject' }), _React2['default'].createElement(_ExportProject2['default'], { key: 'exportProject' }));
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
/* 224 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Project = __webpack_require__(253);
	
	var _Project2 = _interopRequireWildcard(_Project);
	
	var _NewProject = __webpack_require__(254);
	
	var _NewProject2 = _interopRequireWildcard(_NewProject);
	
	var _import = __webpack_require__(5);
	
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
/* 225 */
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
	
	var _React = __webpack_require__(247);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _ClassNames = __webpack_require__(243);
	
	var _ClassNames2 = _interopRequireWildcard(_ClassNames);
	
	var _import = __webpack_require__(5);
	
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
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	function classNames () {
		'use strict';
	
		var classes = '';
	
		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;
	
			var argType = typeof arg;
	
			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;
	
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
	
			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}
	
		return classes.substr(1);
	}
	
	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}
	
	/* global define */
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267);


/***/ },
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */
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
	
	var _React = __webpack_require__(247);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _ClassNames = __webpack_require__(243);
	
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
/* 253 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(2);
	
	var _Image = __webpack_require__(225);
	
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
/* 254 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(2);
	
	var _Icon = __webpack_require__(252);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var _DropZone = __webpack_require__(219);
	
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
/* 255 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Modal = __webpack_require__(3);
	
	var _Modal2 = _interopRequireWildcard(_Modal);
	
	var _Icon = __webpack_require__(252);
	
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
/* 256 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _AppStore = __webpack_require__(220);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(221);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var _Icon = __webpack_require__(252);
	
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
				document.querySelector('#input-path').click();
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
/* 257 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Link = __webpack_require__(2);
	
	var _Icon = __webpack_require__(252);
	
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
/* 258 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Router = __webpack_require__(2);
	
	var _Router2 = _interopRequireWildcard(_Router);
	
	var _Icon = __webpack_require__(252);
	
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
/* 259 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(252);
	
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
/* 260 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Router = __webpack_require__(2);
	
	var _Router2 = _interopRequireWildcard(_Router);
	
	var _Icon = __webpack_require__(252);
	
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
/* 261 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(252);
	
	var _Icon2 = _interopRequireWildcard(_Icon);
	
	var _AppStore = __webpack_require__(220);
	
	var _AppStore2 = _interopRequireWildcard(_AppStore);
	
	var _AppActions = __webpack_require__(221);
	
	var _AppActions2 = _interopRequireWildcard(_AppActions);
	
	var router;
	var projectID;
	
	var DeleteProject = (function (_React$Component) {
		function DeleteProject() {
			_classCallCheck(this, DeleteProject);
	
			_get(Object.getPrototypeOf(DeleteProject.prototype), 'constructor', this).call(this);
		}
	
		_inherits(DeleteProject, _React$Component);
	
		_createClass(DeleteProject, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				router = this.context.router;
				projectID = router.getCurrentQuery().projectID;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'handleClick',
			value: function handleClick() {
				_AppActions2['default'].removeProject(projectID);
				router.transitionTo('Homepage');
			}
		}, {
			key: 'render',
			value: function render() {
				return _React2['default'].createElement(
					'button',
					{ className: 'header__button button', onClick: this.handleClick },
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
	DeleteProject.contextTypes = { router: _React2['default'].PropTypes.func.isRequired };
	
	exports['default'] = DeleteProject;
	module.exports = exports['default'];

/***/ },
/* 262 */
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
	
	var _React = __webpack_require__(1);
	
	var _React2 = _interopRequireWildcard(_React);
	
	var _Icon = __webpack_require__(252);
	
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
/* 263 */,
/* 264 */,
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @name jsondir
	 * @description Convert JSON objects to directories and back again.
	 *
	 * @author Daniel Imhoff
	 */
	
	'use strict';
	
	var PATH = __webpack_require__(269);
	var FS = __webpack_require__(280);
	var xtend = __webpack_require__(273);
	var rimraf = __webpack_require__(281);
	
	var File = __webpack_require__(270).File;
	
	var knownAttributes = Object.freeze([
	  '-name',
	  '-type',
	  '-path',
	  '-mode',
	  '-umask',
	  '-owner',
	  '-group',
	  '-dest',
	  '-content',
	  '-inherit',
	  '-dynamic'
	]);
	
	var inheritableAttributes = Object.freeze([
	  'inherit',
	  'dynamic',
	  'mode',
	  'umask',
	  'owner',
	  'group'
	]);
	
	/**
	 * Split up given object into children and valid attributes that are ready for
	 * the File constructor.
	 *
	 * @param  {object} options
	 * @param  {object} parentAttributes Normalized attributes of the parent.
	 * @return {object}
	 */
	var normalizeOptions = function(options, parentAttributes) {
	  var opts = {
	    attributes: {
	      dynamic: {}
	    },
	    children: {}
	  };
	
	  if (typeof options === 'object') {
	    for (var i in options) {
	      // If the starting character is a hyphen, the option is an attribute,
	      // because having files prepended with a hyphen in Unix is a terrible
	      // idea: http://www.dwheeler.com/essays/fixing-unix-linux-filenames.html#dashes
	      if (i.indexOf('-') === 0) {
	        var a = i.substring(1);
	
	        if (knownAttributes.indexOf(i) === -1) {
	          throw new Error("Unknown attribute '" + a + "' in object.");
	        }
	
	        if (typeof options[i] === 'function') {
	          opts.attributes.dynamic[a] = options[i];
	        }
	
	        opts.attributes[a] = options[i];
	      }
	      else {
	        opts.children[i] = options[i];
	      }
	    }
	
	    if ('owner' in opts.attributes && opts.attributes.owner !== process.env.USER && process.env.USER !== 'root') {
	      throw new Error("Must be run as root if owner differs from you.");
	    }
	
	    if ('inherit' in opts.attributes) {
	      if (typeof opts.attributes.inherit === 'string') {
	        opts.attributes.inherit = [opts.attributes.inherit, 'inherit'];
	      }
	
	      opts.attributes.inherit.forEach(function(inheritedAttribute) {
	        if (inheritableAttributes.indexOf(inheritedAttribute) === -1) {
	          throw new Error("Unknown inheritable attribute '" + inheritedAttribute + "' in object.");
	        }
	
	        if (typeof opts.attributes[inheritedAttribute] === 'function' && opts.attributes.inherit.indexOf('dynamic') === -1) {
	          opts.attributes.inherit.push('dynamic');
	        }
	      });
	    }
	
	    if (!('path' in opts.attributes)) {
	      if (typeof parentAttributes === 'object') {
	        opts.attributes.path = parentAttributes.path + File.DIRECTORY_SEPARATOR + opts.attributes.name;
	      }
	      else {
	        opts.attributes.path = '.';
	      }
	    }
	
	    if (!('type' in opts.attributes)) {
	      if ('dest' in opts.attributes) {
	        opts.attributes.type = 'l';
	      }
	      else if (Object.keys(opts.children).length > 0) {
	        opts.attributes.type = 'd';
	      }
	      else {
	        opts.attributes.type = '-';
	      }
	    }
	  }
	
	  return opts;
	};
	
	/**
	 * Construct a readable object from a File.
	 *
	 * @param  {File} file
	 * @param  {object} options
	 * @return {object}
	 */
	var createFileNode = function(file, options) {
	  options = options || {};
	
	  var node = {
	    "-path": file.getPath()
	  };
	
	  switch (file.getType()) {
	  case File.Types.file:
	    node['-type'] = '-';
	
	    if (options.content) {
	      node['-content'] = file.getContent();
	    }
	
	    break;
	  case File.Types.directory:
	    node['-type'] = 'd';
	
	    break;
	  case File.Types.symlink:
	    node['-type'] = 'l';
	    node['-dest'] = file.getDest();
	
	    break;
	  }
	
	  return node;
	};
	
	/**
	 * Converts a formatted, structured object to a directory structure.
	 *
	 * @param  {object} json
	 * @param  {object} options
	 * @param  {Function} callback
	 */
	var json2dir = function(json, options, callback) {
	  if (typeof callback !== 'function') {
	    callback = typeof options === 'function' ? options : function() {};
	    options = {};
	  }
	
	  options = xtend({
	    ignoreExists: false,
	    overwrite: false,
	    nuke: false
	  }, options);
	
	  if (options.overwrite || options.nuke) {
	    options.ignoreExists = true;
	  }
	
	  // Keeps track of the number of child keys in the object. When pending
	  // is 0, we know the object has been exhausted.
	  var pending = 1;
	
	  /**
	   * Recursive function which recurses through the object and asynchronously
	   * creates the directory structure based upon normalized options.
	   *
	   * @param  {object} json
	   * @param  {object} parentAttributes
	   */
	  var _json2dir = function(json, parentAttributes) {
	    if (pending === 0) return callback();
	
	    if (typeof json === 'object') {
	      // Validate and normalize the options into children and attributes.
	      var normalizedOptions = normalizeOptions(json, parentAttributes),
	          childKeys = Object.keys(normalizedOptions.children);
	
	      var afterCreate = function(err) {
	        if (err && (!(err instanceof File.FileExistsException) || !options.ignoreExists)) throw err;
	
	        // When IO is finished for this file, we mark it as done and check to
	        // see if there are no pending files.
	        if (--pending === 0) return callback();
	
	        // For each of the children parsed, call this function.
	        childKeys.forEach(function(name) {
	          // normalizeOptions() needs the key of the child object, which is the name.
	          if (!('-name' in normalizedOptions.children[name])) {
	            normalizedOptions.children[name]['-name'] = name;
	          }
	
	          // If there are any inherited attributes of the parent, we need to add
	          // them to the child object.
	          if ('inherit' in normalizedOptions.attributes && normalizedOptions.attributes.inherit.length > 0) {
	            if (normalizedOptions.attributes.inherit.indexOf('inherit') === -1) {
	              normalizedOptions.attributes.inherit.push('inherit');
	            }
	
	            var removeLater = [];
	
	            normalizedOptions.attributes.inherit.forEach(function(inheritedAttribute) {
	              // Allow child to override inherited attribute.
	              if ('-' + inheritedAttribute in normalizedOptions.children[name]) {
	                // Remember to take these attributes out.
	                if (inheritedAttribute in normalizedOptions.attributes.dynamic) {
	                  removeLater.push(inheritedAttribute);
	                }
	              }
	              else {
	                // I should really use Underscore.
	                if (Array.isArray(normalizedOptions.attributes[inheritedAttribute])) {
	                  normalizedOptions.children[name]['-' + inheritedAttribute] = normalizedOptions.attributes[inheritedAttribute].slice();
	                }
	                else if (typeof normalizedOptions.attributes[inheritedAttribute] === 'object') {
	                  normalizedOptions.children[name]['-' + inheritedAttribute] = xtend(normalizedOptions.attributes[inheritedAttribute]);
	                }
	                else {
	                  normalizedOptions.children[name]['-' + inheritedAttribute] = normalizedOptions.attributes[inheritedAttribute];
	                }
	              }
	            });
	
	            removeLater.forEach(function(attribute) {
	              delete normalizedOptions.children[name]['-dynamic'][attribute];
	              normalizedOptions.children[name]['-inherit'].splice(normalizedOptions.children[name]['-inherit'].indexOf(attribute), 1);
	            });
	          }
	
	          // Recurse, given the unnormalized options of the child and normalized
	          // attributes of the parent.
	          _json2dir(normalizedOptions.children[name], normalizedOptions.attributes);
	        });
	      };
	
	      // First count the number of children.
	      pending += childKeys.length;
	
	      try {
	        for (var i in normalizedOptions.attributes) {
	          if (i in normalizedOptions.attributes.dynamic) {
	            normalizedOptions.attributes[i] = normalizedOptions.attributes.dynamic[i](normalizedOptions.attributes);
	          }
	        }
	
	        // Create the File object given the set of attributes parsed which
	        // represents the file in question.
	        var f = new File(normalizedOptions.attributes);
	
	        if (f.doesExist()) {
	          if (options.overwrite && f.getType() !== File.Types.directory) {
	            f.remove(function(err) {
	              if (err) return callback(err);
	              // Need to refresh object after its removal.
	              f = new File(normalizedOptions.attributes);
	              f.create(afterCreate);
	            });
	          }
	          else {
	            afterCreate();
	          }
	        }
	        else {
	          f.create(afterCreate);
	        }
	      }
	      catch (err) {
	        return callback(err);
	      }
	    }
	  };
	
	  // Scary stuff.
	  if (options.nuke) {
	    if (!('-path' in json)) {
	      return callback(new Error("'-path' attribute required for 'nuke' option."));
	    }
	
	    if (PATH.resolve(json['-path']) === process.env.PWD) {
	      return callback(new Error("'-path' must differ from current working directory."));
	    }
	    else {
	      rimraf(PATH.resolve(json['-path']), function(err) {
	        if (err) return callback(err);
	        _json2dir(json);
	      });
	    }
	  }
	  else {
	    _json2dir(json);
	  }
	};
	
	/**
	 * Converts a given directory structure to a formatted, structured object.
	 *
	 * @param  {string} path
	 * @param  {object} options
	 * @param  {Function} callback
	 */
	var dir2json = function(path, options, callback) {
	  if (typeof callback !== 'function') {
	    callback = typeof options === 'function' ? options : function() {};
	    options = {};
	  }
	
	  options = xtend({
	    content: true
	  }, options);
	
	  var file, json;
	
	  /**
	   * Recursive function which recurses through the directory structure and
	   * creates the object.
	   *
	   * @param  {object} jsonPart
	   * @param  {Function} done
	   */
	  var _dir2json = function(jsonPart, done) {
	    FS.readdir(jsonPart['-path'], function(err, results) {
	      if (err) return done(err);
	
	      // Keeps a total of files pending appendation to the object.
	      var pending = results.length;
	
	      // If there are no files in this directory, we're done on this path.
	      if (pending === 0) return done(null, json);
	
	      // For each of the files/directories in this directory, call this function.
	      results.forEach(function(file) {
	        try {
	          var f = new File({ "path": jsonPart['-path'] + File.DIRECTORY_SEPARATOR + file, "exists": true });
	
	          // Insert the file as a readable file node into the object.
	          jsonPart[file] = createFileNode(f, options);
	
	          // If the file is a directory, we have more work to do.
	          if (f.getType() === File.Types.directory) {
	            // Recurse, creating a new callback for the next level of files.
	            _dir2json(jsonPart[file], function(err) {
	              if (err) throw err;
	              if (--pending === 0) return done(null, json);
	            });
	          }
	          else {
	            if (--pending === 0) return done(null, json);
	          }
	        }
	        catch (err) {
	          return done(err);
	        }
	      });
	    });
	  };
	
	  try {
	    // Construction of new origin object.
	    file = new File({ "path": path, "exists": true });
	    json = createFileNode(file, options);
	  }
	  catch (err) {
	    return callback(err);
	  }
	
	  if (file.getType() === File.Types.directory) {
	    _dir2json(json, callback);
	  }
	  else {
	    return callback(null, json);
	  }
	};
	
	module.exports = {
	  json2dir: json2dir,
	  dir2json: dir2json,
	  File: File
	};


/***/ },
/* 266 */,
/* 267 */
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
	
	var LinkedStateMixin = __webpack_require__(271);
	var React = __webpack_require__(27);
	var ReactComponentWithPureRenderMixin =
	  __webpack_require__(272);
	var ReactCSSTransitionGroup = __webpack_require__(274);
	var ReactFragment = __webpack_require__(111);
	var ReactTransitionGroup = __webpack_require__(275);
	var ReactUpdates = __webpack_require__(153);
	
	var cx = __webpack_require__(100);
	var cloneWithProps = __webpack_require__(276);
	var update = __webpack_require__(277);
	
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
	  React.addons.Perf = __webpack_require__(146);
	  React.addons.TestUtils = __webpack_require__(278);
	}
	
	module.exports = React;


/***/ },
/* 268 */,
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("path");

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileOverview Contains the File class.
	 *
	 * @author Daniel Imhoff
	 */
	
	'use strict';
	
	var PATH = __webpack_require__(269);
	var FS = __webpack_require__(280);
	var mkdirp = __webpack_require__(284);
	var uidNumber = __webpack_require__(291);
	
	var Exception = function(message) {
	  this.message = message;
	  this.name = 'Exception';
	};
	
	Exception.prototype = Object.create(Error.prototype);
	
	/**
	 * A File represents any regular, directory, or symlink file.
	 *
	 * @param {object} options
	 */
	var File = function(options) {
	  options = options || {};
	
	  this.path = PATH.resolve(PATH.normalize(options.path));
	  this.exists = FS.existsSync(this.path);
	  this.umask = 'umask' in options ? options.umask : File.UMASK;
	
	  if (this.exists) {
	    this.stats = this.getStats();
	    this.type = this.getType();
	    this.mode = this.stats.mode & 511; // 511 == 0777
	    this.uid = this.stats.uid;
	    this.gid = this.stats.gid;
	  }
	  else {
	    this.owner = options.owner;
	    this.group = options.group;
	
	    if ('exists' in options && options.exists) {
	      throw new File.FileMissingException('File was expected to exist, but does not.');
	    }
	
	    if ('type' in options) {
	      if (options.type in File.Types) {
	        this.type = File.Types[options.type];
	      }
	      else {
	        throw new File.UnknownFileTypeException('Unknown file type: ' + options.type + '.');
	      }
	    }
	    else {
	      throw new File.MissingRequiredParameterException('"type" is required for nonexistent files.');
	    }
	
	    switch (this.type) {
	    case File.Types.file:
	      this.content = 'content' in options ? options.content : '';
	
	      break;
	    case File.Types.symlink:
	      if ('dest' in options) {
	        this.dest = options.dest;
	      }
	      else {
	        throw new File.MissingRequiredParameterException('"dest" is a required option for symlink files.');
	      }
	
	      break;
	    }
	
	    this.mode = File.interpretMode(options.mode, options.type, this.umask);
	  }
	};
	
	File.UnknownFileTypeException = function(message) {
	  Exception.call(this, message || 'Unknown file type.');
	};
	
	File.UnknownFileTypeException.prototype = Object.create(Exception.prototype);
	
	File.FileExistsException = function(message) {
	  Exception.call(this, message || 'File already exists.');
	};
	
	File.FileExistsException.prototype = Object.create(Exception.prototype);
	
	File.FileMissingException = function(message) {
	  Exception.call(this, message || 'File does not exist.');
	};
	
	File.FileMissingException.prototype = Object.create(Exception.prototype);
	
	File.MissingRequiredParameterException = function(message) {
	  Exception.call(this, message || 'Missing required parameter.');
	};
	
	File.MissingRequiredParameterException.prototype = Object.create(Exception.prototype);
	
	File.IncorrectFileTypeException = function(message) {
	  Exception.call(this, message || 'Incorrect file type.');
	};
	
	File.IncorrectFileTypeException.prototype = Object.create(Exception.prototype);
	
	File.UMASK = process.umask();
	File.DIRECTORY_SEPARATOR = PATH.sep;
	
	File.Types = Object.freeze({
	  'file': 0,
	  'f': 0,
	  '-': 0,
	  'directory': 1,
	  'dir': 1,
	  'd': 1,
	  'symbolic link': 2,
	  'symlink': 2,
	  'l': 2
	});
	
	/**
	 * Given an interpretable string or number, this function will return the
	 * decimal format representing the permission mode on Unix systems. If mode is
	 * omitted, type is required. In that case, it returns the default permission
	 * mode for that file type with a given umask (or 022 if not specified).
	 *
	 * @param  {mixed} mode Examples: 'rw-r--r--', 'rwxr-xr-x', 0644, 0755
	 * @param  {string} type Valid strings found in File.Types.
	 * @param  {number} umask
	 * @return {number} Decimal representation of permission mode.
	 */
	File.interpretMode = function(mode, type, umask) {
	  switch (typeof mode) {
	  case 'undefined':
	    if (typeof type !== 'undefined' && type in File.Types) {
	      type = File.Types[type];
	
	      if (typeof umask === 'undefined') {
	        umask = File.UMASK;
	      }
	
	      if (type === File.Types.symlink) {
	        return 511; // 511 == 0777
	      }
	
	      return (type === File.Types.directory ? 511 : 438) - umask; // 511 == 0777, 438 == 0666
	    }
	
	    break;
	  case 'string':
	    switch (mode.length) {
	    case 10:
	      mode = mode.substring(1);
	      /* falls through */
	    case 9:
	      var modeParts = mode.match(/[r-][w-][xstST-]/g),
	          decMode = 0;
	
	      if (!modeParts || modeParts.length !== 3) {
	        return false;
	      }
	
	      for (var power = 0; power <= 2; ++power) {
	        var modePartsChars = modeParts[2 - power].split(''),
	            decModeAddition = 0;
	
	        if (modePartsChars[0] === 'r') {
	          decModeAddition += 4;
	        }
	
	        if (modePartsChars[1] === 'w') {
	          decModeAddition += 2;
	        }
	
	        if (['x', 's', 't', 'S', 'T'].indexOf(modePartsChars[2]) !== -1) {
	          // uppercase indicates the x bit is not set
	          if (/[a-z]/.test(modePartsChars[2])) {
	            decModeAddition += 1;
	          }
	
	          switch (modePartsChars[2].toLowerCase()) {
	          case 's': // setuid/setgid bit
	            switch (power) {
	            case 2:
	              decMode += 4 * Math.pow(8, 3); // setuid flag in high-order octal digit
	              break;
	            case 1:
	              decMode += 2 * Math.pow(8, 3); // setgid flag in high-order octal digit
	              break;
	            }
	
	            break;
	          case 't': // sticky bit
	            decMode += Math.pow(8, 3); // sticky flag in high-order octal digit
	            break;
	          }
	        }
	
	        decMode += decModeAddition * Math.pow(8, power);
	      }
	
	      return decMode;
	    case 3:
	      var octal = parseInt(mode, 8);
	
	      if (!isNaN(octal) && octal >= 0 && octal <= 511) {
	        return octal;
	      }
	
	      break;
	    }
	
	    break;
	  case 'number':
	    if (mode >= 0 && mode <= 511) { // 511 == 0777
	      return mode; // Seems good to me.
	    }
	
	    break;
	  }
	
	  return false;
	};
	
	/**
	 * Returns the FS.Stats object associated with this File.
	 *
	 * @return {FS.Stats}
	 */
	File.prototype.getStats = function() {
	  if (typeof this.stats === 'undefined') {
	    if (!this.exists) {
	      throw new File.FileMissingException('Cannot get stats of nonexistent file.');
	    }
	
	    this.stats = FS.lstatSync(this.path);
	  }
	
	  return this.stats;
	};
	
	/**
	 * Returns the file type of this File the File.Types enumeration.
	 *
	 * @return {number}
	 */
	File.prototype.getType = function() {
	  if (typeof this.type === 'undefined') {
	    if (typeof this.stats === 'undefined') {
	      this.stats = this.getStats();
	    }
	
	    if (this.stats.isFile()) {
	      this.type = File.Types.file;
	    }
	    else if (this.stats.isDirectory()) {
	      this.type = File.Types.directory;
	    }
	    else if (this.stats.isSymbolicLink()) {
	      this.type = File.Types.symlink;
	    }
	  }
	
	  return this.type;
	};
	
	/**
	 * Returns the file path.
	 *
	 * @return {string}
	 */
	File.prototype.getPath = function() {
	  return this.path;
	};
	
	/**
	 * Returns whether or not this file exists.
	 *
	 * @return {bool}
	 */
	File.prototype.doesExist = function() {
	  return this.exists;
	};
	
	/**
	 * Returns the contents of the file.
	 *
	 * @return {string}
	 */
	File.prototype.getContent = function() {
	  if (this.type !== File.Types.file) {
	    throw new File.IncorrectFileTypeException('Cannot get content of nonnormal file.');
	  }
	
	  if (typeof this.content === 'undefined') {
	    this.content = FS.readFileSync(this.path, { encoding: 'utf8' });
	  }
	
	  return this.content;
	};
	
	/**
	 * Returns the destination of the file.
	 *
	 * @return {string}
	 */
	File.prototype.getDest = function() {
	  if (this.type !== File.Types.symlink) {
	    throw new File.IncorrectFileTypeException('Cannot get destination of nonsymlink file.');
	  }
	
	  if (typeof this.dest === 'undefined') {
	    this.dest = FS.readlinkSync(this.path);
	  }
	
	  return this.dest;
	};
	
	/**
	 * Creates this File on the filesystem using given information.
	 *
	 * @param  {Function} callback
	 */
	File.prototype.create = function(callback) {
	  if (this.exists) {
	    return callback(new File.FileExistsException("File already exists."));
	  }
	
	  var self = this;
	
	  var done = function(err) {
	    if (err) return callback(err);
	    self.exists = true;
	    callback();
	  };
	
	  var op = function() {
	    switch (self.type) {
	    case File.Types.file:
	      FS.writeFile(self.path, self.content, function(err) {
	        if (err) return callback(err);
	        self.chmod(function(err) {
	          if (err) return callback(err);
	          self.chown(done);
	        });
	      });
	
	      break;
	    case File.Types.directory:
	      FS.mkdir(self.path, function(err) {
	        if (err) return callback(err);
	        self.chmod(function(err) {
	          if (err) return callback(err);
	          self.chown(done);
	        });
	      });
	
	      break;
	    case File.Types.symlink:
	      FS.symlink(self.dest, self.path, done);
	
	      break;
	    }
	  };
	
	  var pos = this.path.lastIndexOf(File.DIRECTORY_SEPARATOR);
	
	  if (pos !== -1) {
	    mkdirp(this.path.substring(0, pos), function(err) {
	      if (err) return callback(err);
	      op();
	    });
	  }
	  else {
	    op();
	  }
	};
	
	/**
	 * Removes the file.
	 *
	 * @param  {Function} callback
	 */
	File.prototype.remove = function(callback) {
	  var self = this;
	
	  var done = function(err) {
	    if (err) return callback(err);
	    self.exists = false;
	    callback();
	  };
	
	  if (this.type === File.Types.directory) {
	    FS.rmdir(this.path, done);
	  }
	  else {
	    FS.unlink(this.path, done);
	  }
	};
	
	/**
	 * Changes the permissions mode of this file to stored data.
	 *
	 * @param  {Function} callback
	 */
	File.prototype.chmod = function(callback) {
	  FS.chmod(this.path, this.mode, function(err) {
	    if (err) callback(err);
	    callback();
	  });
	};
	
	/**
	 * Changes the owner and group of this file to stored data using the uidNumber
	 * package.
	 *
	 * @param  {Function} callback
	 */
	File.prototype.chown = function(callback) {
	  var self = this;
	
	  if ('owner' in this || 'group' in this) {
	    uidNumber('owner' in this ? this.owner : process.getuid(), 'group' in this ? this.group : process.getgid(), function(err, uid, gid) {
	      if (err) callback(err);
	      FS.chown(self.path, uid, gid, function(err) {
	        if (err) callback(err);
	        callback();
	      });
	    });
	  }
	  else {
	    callback();
	  }
	};
	
	module.exports.File = File;
	


/***/ },
/* 271 */
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
	
	var ReactLink = __webpack_require__(282);
	var ReactStateSetters = __webpack_require__(283);
	
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
/* 272 */
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
	
	var shallowEqual = __webpack_require__(207);
	
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
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var Keys = __webpack_require__(293)
	var hasKeys = __webpack_require__(285)
	
	module.exports = extend
	
	function extend() {
	    var target = {}
	
	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]
	
	        if (!hasKeys(source)) {
	            continue
	        }
	
	        var keys = Keys(source)
	
	        for (var j = 0; j < keys.length; j++) {
	            var name = keys[j]
	            target[name] = source[name]
	        }
	    }
	
	    return target
	}


/***/ },
/* 274 */
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
	
	var React = __webpack_require__(27);
	
	var assign = __webpack_require__(35);
	
	var ReactTransitionGroup = React.createFactory(
	  __webpack_require__(275)
	);
	var ReactCSSTransitionGroupChild = React.createFactory(
	  __webpack_require__(290)
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
/* 275 */
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
	
	var React = __webpack_require__(27);
	var ReactTransitionChildMapping = __webpack_require__(286);
	
	var assign = __webpack_require__(35);
	var cloneWithProps = __webpack_require__(276);
	var emptyFunction = __webpack_require__(96);
	
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
/* 276 */
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
	var ReactPropTransferer = __webpack_require__(289);
	
	var keyOf = __webpack_require__(109);
	var warning = __webpack_require__(44);
	
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
/* 277 */
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
	
	var assign = __webpack_require__(35);
	var keyOf = __webpack_require__(109);
	var invariant = __webpack_require__(40);
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
/* 278 */
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
	
	var EventConstants = __webpack_require__(101);
	var EventPluginHub = __webpack_require__(182);
	var EventPropagators = __webpack_require__(178);
	var React = __webpack_require__(27);
	var ReactElement = __webpack_require__(63);
	var ReactEmptyComponent = __webpack_require__(151);
	var ReactBrowserEventEmitter = __webpack_require__(150);
	var ReactCompositeComponent = __webpack_require__(212);
	var ReactInstanceHandles = __webpack_require__(68);
	var ReactInstanceMap = __webpack_require__(103);
	var ReactMount = __webpack_require__(69);
	var ReactUpdates = __webpack_require__(153);
	var SyntheticEvent = __webpack_require__(183);
	
	var assign = __webpack_require__(35);
	
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
/* 279 */,
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// Monkey-patching the fs module.
	// It's ugly, but there is simply no other way to do this.
	var fs = module.exports = __webpack_require__(37)
	
	var assert = __webpack_require__(287)
	
	// fix up some busted stuff, mostly on windows and old nodes
	__webpack_require__(292)
	
	// The EMFILE enqueuing stuff
	
	var util = __webpack_require__(288)
	
	function noop () {}
	
	var debug = noop
	if (util.debuglog)
	  debug = util.debuglog('gfs')
	else if (/\bgfs\b/i.test(process.env.NODE_DEBUG || ''))
	  debug = function() {
	    var m = util.format.apply(util, arguments)
	    m = 'GFS: ' + m.split(/\n/).join('\nGFS: ')
	    console.error(m)
	  }
	
	if (/\bgfs\b/i.test(process.env.NODE_DEBUG || '')) {
	  process.on('exit', function() {
	    debug('fds', fds)
	    debug(queue)
	    assert.equal(queue.length, 0)
	  })
	}
	
	
	var originalOpen = fs.open
	fs.open = open
	
	function open(path, flags, mode, cb) {
	  if (typeof mode === "function") cb = mode, mode = null
	  if (typeof cb !== "function") cb = noop
	  new OpenReq(path, flags, mode, cb)
	}
	
	function OpenReq(path, flags, mode, cb) {
	  this.path = path
	  this.flags = flags
	  this.mode = mode
	  this.cb = cb
	  Req.call(this)
	}
	
	util.inherits(OpenReq, Req)
	
	OpenReq.prototype.process = function() {
	  originalOpen.call(fs, this.path, this.flags, this.mode, this.done)
	}
	
	var fds = {}
	OpenReq.prototype.done = function(er, fd) {
	  debug('open done', er, fd)
	  if (fd)
	    fds['fd' + fd] = this.path
	  Req.prototype.done.call(this, er, fd)
	}
	
	
	var originalReaddir = fs.readdir
	fs.readdir = readdir
	
	function readdir(path, cb) {
	  if (typeof cb !== "function") cb = noop
	  new ReaddirReq(path, cb)
	}
	
	function ReaddirReq(path, cb) {
	  this.path = path
	  this.cb = cb
	  Req.call(this)
	}
	
	util.inherits(ReaddirReq, Req)
	
	ReaddirReq.prototype.process = function() {
	  originalReaddir.call(fs, this.path, this.done)
	}
	
	ReaddirReq.prototype.done = function(er, files) {
	  if (files && files.sort)
	    files = files.sort()
	  Req.prototype.done.call(this, er, files)
	  onclose()
	}
	
	
	var originalClose = fs.close
	fs.close = close
	
	function close (fd, cb) {
	  debug('close', fd)
	  if (typeof cb !== "function") cb = noop
	  delete fds['fd' + fd]
	  originalClose.call(fs, fd, function(er) {
	    onclose()
	    cb(er)
	  })
	}
	
	
	var originalCloseSync = fs.closeSync
	fs.closeSync = closeSync
	
	function closeSync (fd) {
	  try {
	    return originalCloseSync(fd)
	  } finally {
	    onclose()
	  }
	}
	
	
	// Req class
	function Req () {
	  // start processing
	  this.done = this.done.bind(this)
	  this.failures = 0
	  this.process()
	}
	
	Req.prototype.done = function (er, result) {
	  var tryAgain = false
	  if (er) {
	    var code = er.code
	    var tryAgain = code === "EMFILE"
	    if (process.platform === "win32")
	      tryAgain = tryAgain || code === "OK"
	  }
	
	  if (tryAgain) {
	    this.failures ++
	    enqueue(this)
	  } else {
	    var cb = this.cb
	    cb(er, result)
	  }
	}
	
	var queue = []
	
	function enqueue(req) {
	  queue.push(req)
	  debug('enqueue %d %s', queue.length, req.constructor.name, req)
	}
	
	function onclose() {
	  var req = queue.shift()
	  if (req) {
	    debug('process', req.constructor.name, req)
	    req.process()
	  }
	}


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = rimraf
	rimraf.sync = rimrafSync
	
	var assert = __webpack_require__(287)
	var path = __webpack_require__(269)
	var fs = __webpack_require__(37)
	
	// for EMFILE handling
	var timeout = 0
	exports.EMFILE_MAX = 1000
	exports.BUSYTRIES_MAX = 3
	
	var isWindows = (process.platform === "win32")
	
	function defaults (options) {
	  var methods = [
	    'unlink',
	    'chmod',
	    'stat',
	    'rmdir',
	    'readdir'
	  ]
	  methods.forEach(function(m) {
	    options[m] = options[m] || fs[m]
	    m = m + 'Sync'
	    options[m] = options[m] || fs[m]
	  })
	}
	
	function rimraf (p, options, cb) {
	  if (typeof options === 'function') {
	    cb = options
	    options = {}
	  }
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  defaults(options)
	
	  if (!cb) throw new Error("No callback passed to rimraf()")
	
	  var busyTries = 0
	  rimraf_(p, options, function CB (er) {
	    if (er) {
	      if (isWindows && (er.code === "EBUSY" || er.code === "ENOTEMPTY") &&
	          busyTries < exports.BUSYTRIES_MAX) {
	        busyTries ++
	        var time = busyTries * 100
	        // try again, with the same exact callback as this one.
	        return setTimeout(function () {
	          rimraf_(p, options, CB)
	        }, time)
	      }
	
	      // this one won't happen if graceful-fs is used.
	      if (er.code === "EMFILE" && timeout < exports.EMFILE_MAX) {
	        return setTimeout(function () {
	          rimraf_(p, options, CB)
	        }, timeout ++)
	      }
	
	      // already gone
	      if (er.code === "ENOENT") er = null
	    }
	
	    timeout = 0
	    cb(er)
	  })
	}
	
	// Two possible strategies.
	// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
	// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
	//
	// Both result in an extra syscall when you guess wrong.  However, there
	// are likely far more normal files in the world than directories.  This
	// is based on the assumption that a the average number of files per
	// directory is >= 1.
	//
	// If anyone ever complains about this, then I guess the strategy could
	// be made configurable somehow.  But until then, YAGNI.
	function rimraf_ (p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  options.unlink(p, function (er) {
	    if (er) {
	      if (er.code === "ENOENT")
	        return cb(null)
	      if (er.code === "EPERM")
	        return (isWindows)
	          ? fixWinEPERM(p, options, er, cb)
	          : rmdir(p, options, er, cb)
	      if (er.code === "EISDIR")
	        return rmdir(p, options, er, cb)
	    }
	    return cb(er)
	  })
	}
	
	function fixWinEPERM (p, options, er, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	  if (er)
	    assert(er instanceof Error)
	
	  options.chmod(p, 666, function (er2) {
	    if (er2)
	      cb(er2.code === "ENOENT" ? null : er)
	    else
	      options.stat(p, function(er3, stats) {
	        if (er3)
	          cb(er3.code === "ENOENT" ? null : er)
	        else if (stats.isDirectory())
	          rmdir(p, options, er, cb)
	        else
	          options.unlink(p, cb)
	      })
	  })
	}
	
	function fixWinEPERMSync (p, options, er) {
	  assert(p)
	  assert(options)
	  if (er)
	    assert(er instanceof Error)
	
	  try {
	    options.chmodSync(p, 666)
	  } catch (er2) {
	    if (er2.code === "ENOENT")
	      return
	    else
	      throw er
	  }
	
	  try {
	    var stats = options.statSync(p)
	  } catch (er3) {
	    if (er3.code === "ENOENT")
	      return
	    else
	      throw er
	  }
	
	  if (stats.isDirectory())
	    rmdirSync(p, options, er)
	  else
	    options.unlinkSync(p)
	}
	
	function rmdir (p, options, originalEr, cb) {
	  assert(p)
	  assert(options)
	  if (originalEr)
	    assert(originalEr instanceof Error)
	  assert(typeof cb === 'function')
	
	  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
	  // if we guessed wrong, and it's not a directory, then
	  // raise the original error.
	  options.rmdir(p, function (er) {
	    if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
	      rmkids(p, options, cb)
	    else if (er && er.code === "ENOTDIR")
	      cb(originalEr)
	    else
	      cb(er)
	  })
	}
	
	function rmkids(p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  options.readdir(p, function (er, files) {
	    if (er)
	      return cb(er)
	    var n = files.length
	    if (n === 0)
	      return options.rmdir(p, cb)
	    var errState
	    files.forEach(function (f) {
	      rimraf(path.join(p, f), options, function (er) {
	        if (errState)
	          return
	        if (er)
	          return cb(errState = er)
	        if (--n === 0)
	          options.rmdir(p, cb)
	      })
	    })
	  })
	}
	
	// this looks simpler, and is strictly *faster*, but will
	// tie up the JavaScript thread and fail on excessively
	// deep directory trees.
	function rimrafSync (p, options) {
	  options = options || {}
	  defaults(options)
	
	  assert(p)
	  assert(options)
	
	  try {
	    options.unlinkSync(p)
	  } catch (er) {
	    if (er.code === "ENOENT")
	      return
	    if (er.code === "EPERM")
	      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
	    if (er.code !== "EISDIR")
	      throw er
	    rmdirSync(p, options, er)
	  }
	}
	
	function rmdirSync (p, options, originalEr) {
	  assert(p)
	  assert(options)
	  if (originalEr)
	    assert(originalEr instanceof Error)
	
	  try {
	    options.rmdirSync(p)
	  } catch (er) {
	    if (er.code === "ENOENT")
	      return
	    if (er.code === "ENOTDIR")
	      throw originalEr
	    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
	      rmkidsSync(p, options)
	  }
	}
	
	function rmkidsSync (p, options) {
	  assert(p)
	  assert(options)
	  options.readdirSync(p).forEach(function (f) {
	    rimrafSync(path.join(p, f), options)
	  })
	  options.rmdirSync(p, options)
	}


/***/ },
/* 282 */
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
	
	var React = __webpack_require__(27);
	
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
/* 283 */
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
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var path = __webpack_require__(269);
	var fs = __webpack_require__(37);
	
	module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;
	
	function mkdirP (p, mode, f, made) {
	    if (typeof mode === 'function' || mode === undefined) {
	        f = mode;
	        mode = 0777 & (~process.umask());
	    }
	    if (!made) made = null;
	
	    var cb = f || function () {};
	    if (typeof mode === 'string') mode = parseInt(mode, 8);
	    p = path.resolve(p);
	
	    fs.mkdir(p, mode, function (er) {
	        if (!er) {
	            made = made || p;
	            return cb(null, made);
	        }
	        switch (er.code) {
	            case 'ENOENT':
	                mkdirP(path.dirname(p), mode, function (er, made) {
	                    if (er) cb(er, made);
	                    else mkdirP(p, mode, cb, made);
	                });
	                break;
	
	            // In the case of any other error, just see if there's a dir
	            // there already.  If so, then hooray!  If not, then something
	            // is borked.
	            default:
	                fs.stat(p, function (er2, stat) {
	                    // if the stat fails, then that's super weird.
	                    // let the original error be the failure reason.
	                    if (er2 || !stat.isDirectory()) cb(er, made)
	                    else cb(null, made);
	                });
	                break;
	        }
	    });
	}
	
	mkdirP.sync = function sync (p, mode, made) {
	    if (mode === undefined) {
	        mode = 0777 & (~process.umask());
	    }
	    if (!made) made = null;
	
	    if (typeof mode === 'string') mode = parseInt(mode, 8);
	    p = path.resolve(p);
	
	    try {
	        fs.mkdirSync(p, mode);
	        made = made || p;
	    }
	    catch (err0) {
	        switch (err0.code) {
	            case 'ENOENT' :
	                made = sync(path.dirname(p), mode, made);
	                sync(p, mode, made);
	                break;
	
	            // In the case of any other error, just see if there's a dir
	            // there already.  If so, then hooray!  If not, then something
	            // is borked.
	            default:
	                var stat;
	                try {
	                    stat = fs.statSync(p);
	                }
	                catch (err1) {
	                    throw err0;
	                }
	                if (!stat.isDirectory()) throw err0;
	                break;
	        }
	    }
	
	    return made;
	};


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = hasKeys
	
	function hasKeys(source) {
	    return source !== null &&
	        (typeof source === "object" ||
	        typeof source === "function")
	}


/***/ },
/* 286 */
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
	var ReactFragment = __webpack_require__(111);
	
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
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("assert");

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("util");

/***/ },
/* 289 */
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
	
	var assign = __webpack_require__(35);
	var emptyFunction = __webpack_require__(96);
	var joinClasses = __webpack_require__(296);
	
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
/* 290 */
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
	
	var React = __webpack_require__(27);
	
	var CSSCore = __webpack_require__(298);
	var ReactTransitionEvents = __webpack_require__(299);
	
	var onlyChild = __webpack_require__(75);
	var warning = __webpack_require__(44);
	
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
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = uidNumber
	
	// This module calls into get-uid-gid.js, which sets the
	// uid and gid to the supplied argument, in order to find out their
	// numeric value.  This can't be done in the main node process,
	// because otherwise node would be running as that user from this
	// point on.
	
	var child_process = __webpack_require__(294)
	  , path = __webpack_require__(269)
	  , uidSupport = process.getuid && process.setuid
	  , uidCache = {}
	  , gidCache = {}
	
	function uidNumber (uid, gid, cb) {
	  if (!uidSupport) return cb()
	  if (typeof cb !== "function") cb = gid, gid = null
	  if (typeof cb !== "function") cb = uid, uid = null
	  if (gid == null) gid = process.getgid()
	  if (uid == null) uid = process.getuid()
	  if (!isNaN(gid)) gid = uidCache[gid] = +gid
	  if (!isNaN(uid)) uid = uidCache[uid] = +uid
	
	  if (uidCache.hasOwnProperty(uid)) uid = uidCache[uid]
	  if (gidCache.hasOwnProperty(gid)) gid = gidCache[gid]
	
	  if (typeof gid === "number" && typeof uid === "number") {
	    return process.nextTick(cb.bind(null, null, uid, gid))
	  }
	
	  var getter = /*require.resolve*/(297)
	
	  child_process.execFile( process.execPath
	                        , [getter, uid, gid]
	                        , function (code, out, err) {
	    if (er) return cb(new Error("could not get uid/gid\n" + err))
	    try {
	      out = JSON.parse(out+"")
	    } catch (ex) {
	      return cb(ex)
	    }
	
	    if (out.error) {
	      var er = new Error(out.error)
	      er.errno = out.errno
	      return cb(er)
	    }
	
	    if (isNaN(out.uid) || isNaN(out.gid)) return cb(new Error(
	      "Could not get uid/gid: "+JSON.stringify(out)))
	
	    cb(null, uidCache[uid] = +out.uid, uidCache[gid] = +out.gid)
	  })
	}


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(37)
	var constants = __webpack_require__(295)
	
	var origCwd = process.cwd
	var cwd = null
	process.cwd = function() {
	  if (!cwd)
	    cwd = origCwd.call(process)
	  return cwd
	}
	var chdir = process.chdir
	process.chdir = function(d) {
	  cwd = null
	  chdir.call(process, d)
	}
	
	// (re-)implement some things that are known busted or missing.
	
	// lchmod, broken prior to 0.6.2
	// back-port the fix here.
	if (constants.hasOwnProperty('O_SYMLINK') &&
	    process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
	  fs.lchmod = function (path, mode, callback) {
	    callback = callback || noop
	    fs.open( path
	           , constants.O_WRONLY | constants.O_SYMLINK
	           , mode
	           , function (err, fd) {
	      if (err) {
	        callback(err)
	        return
	      }
	      // prefer to return the chmod error, if one occurs,
	      // but still try to close, and report closing errors if they occur.
	      fs.fchmod(fd, mode, function (err) {
	        fs.close(fd, function(err2) {
	          callback(err || err2)
	        })
	      })
	    })
	  }
	
	  fs.lchmodSync = function (path, mode) {
	    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)
	
	    // prefer to return the chmod error, if one occurs,
	    // but still try to close, and report closing errors if they occur.
	    var err, err2
	    try {
	      var ret = fs.fchmodSync(fd, mode)
	    } catch (er) {
	      err = er
	    }
	    try {
	      fs.closeSync(fd)
	    } catch (er) {
	      err2 = er
	    }
	    if (err || err2) throw (err || err2)
	    return ret
	  }
	}
	
	
	// lutimes implementation, or no-op
	if (!fs.lutimes) {
	  if (constants.hasOwnProperty("O_SYMLINK")) {
	    fs.lutimes = function (path, at, mt, cb) {
	      fs.open(path, constants.O_SYMLINK, function (er, fd) {
	        cb = cb || noop
	        if (er) return cb(er)
	        fs.futimes(fd, at, mt, function (er) {
	          fs.close(fd, function (er2) {
	            return cb(er || er2)
	          })
	        })
	      })
	    }
	
	    fs.lutimesSync = function (path, at, mt) {
	      var fd = fs.openSync(path, constants.O_SYMLINK)
	        , err
	        , err2
	        , ret
	
	      try {
	        var ret = fs.futimesSync(fd, at, mt)
	      } catch (er) {
	        err = er
	      }
	      try {
	        fs.closeSync(fd)
	      } catch (er) {
	        err2 = er
	      }
	      if (err || err2) throw (err || err2)
	      return ret
	    }
	
	  } else if (fs.utimensat && constants.hasOwnProperty("AT_SYMLINK_NOFOLLOW")) {
	    // maybe utimensat will be bound soonish?
	    fs.lutimes = function (path, at, mt, cb) {
	      fs.utimensat(path, at, mt, constants.AT_SYMLINK_NOFOLLOW, cb)
	    }
	
	    fs.lutimesSync = function (path, at, mt) {
	      return fs.utimensatSync(path, at, mt, constants.AT_SYMLINK_NOFOLLOW)
	    }
	
	  } else {
	    fs.lutimes = function (_a, _b, _c, cb) { process.nextTick(cb) }
	    fs.lutimesSync = function () {}
	  }
	}
	
	
	// https://github.com/isaacs/node-graceful-fs/issues/4
	// Chown should not fail on einval or eperm if non-root.
	
	fs.chown = chownFix(fs.chown)
	fs.fchown = chownFix(fs.fchown)
	fs.lchown = chownFix(fs.lchown)
	
	fs.chownSync = chownFixSync(fs.chownSync)
	fs.fchownSync = chownFixSync(fs.fchownSync)
	fs.lchownSync = chownFixSync(fs.lchownSync)
	
	function chownFix (orig) {
	  if (!orig) return orig
	  return function (target, uid, gid, cb) {
	    return orig.call(fs, target, uid, gid, function (er, res) {
	      if (chownErOk(er)) er = null
	      cb(er, res)
	    })
	  }
	}
	
	function chownFixSync (orig) {
	  if (!orig) return orig
	  return function (target, uid, gid) {
	    try {
	      return orig.call(fs, target, uid, gid)
	    } catch (er) {
	      if (!chownErOk(er)) throw er
	    }
	  }
	}
	
	function chownErOk (er) {
	  // if there's no getuid, or if getuid() is something other than 0,
	  // and the error is EINVAL or EPERM, then just ignore it.
	  // This specific case is a silent failure in cp, install, tar,
	  // and most other unix tools that manage permissions.
	  // When running as root, or if other types of errors are encountered,
	  // then it's strict.
	  if (!er || (!process.getuid || process.getuid() !== 0)
	      && (er.code === "EINVAL" || er.code === "EPERM")) return true
	}
	
	
	// if lchmod/lchown do not exist, then make them no-ops
	if (!fs.lchmod) {
	  fs.lchmod = function (path, mode, cb) {
	    process.nextTick(cb)
	  }
	  fs.lchmodSync = function () {}
	}
	if (!fs.lchown) {
	  fs.lchown = function (path, uid, gid, cb) {
	    process.nextTick(cb)
	  }
	  fs.lchownSync = function () {}
	}
	
	
	
	// on Windows, A/V software can lock the directory, causing this
	// to fail with an EACCES or EPERM if the directory contains newly
	// created files.  Try again on failure, for up to 1 second.
	if (process.platform === "win32") {
	  var rename_ = fs.rename
	  fs.rename = function rename (from, to, cb) {
	    var start = Date.now()
	    rename_(from, to, function CB (er) {
	      if (er
	          && (er.code === "EACCES" || er.code === "EPERM")
	          && Date.now() - start < 1000) {
	        return rename_(from, to, CB)
	      }
	      cb(er)
	    })
	  }
	}
	
	
	// if read() returns EAGAIN, then just try it again.
	var read = fs.read
	fs.read = function (fd, buffer, offset, length, position, callback_) {
	  var callback
	  if (callback_ && typeof callback_ === 'function') {
	    var eagCounter = 0
	    callback = function (er, _, __) {
	      if (er && er.code === 'EAGAIN' && eagCounter < 10) {
	        eagCounter ++
	        return read.call(fs, fd, buffer, offset, length, position, callback)
	      }
	      callback_.apply(this, arguments)
	    }
	  }
	  return read.call(fs, fd, buffer, offset, length, position, callback)
	}
	
	var readSync = fs.readSync
	fs.readSync = function (fd, buffer, offset, length, position) {
	  var eagCounter = 0
	  while (true) {
	    try {
	      return readSync.call(fs, fd, buffer, offset, length, position)
	    } catch (er) {
	      if (er.code === 'EAGAIN' && eagCounter < 10) {
	        eagCounter ++
	        continue
	      }
	      throw er
	    }
	  }
	}
	


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Object.keys || __webpack_require__(300);
	


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("child_process");

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("constants");

/***/ },
/* 296 */
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


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {if (module !== __webpack_require__.c[0]) {
	  throw new Error("This file should not be loaded with require()")
	}
	
	if (!process.getuid || !process.getgid) {
	  throw new Error("this file should not be called without uid/gid support")
	}
	
	var argv = process.argv.slice(2)
	  , user = argv[0] || process.getuid()
	  , group = argv[1] || process.getgid()
	
	if (!isNaN(user)) user = +user
	if (!isNaN(group)) group = +group
	
	console.error([user, group])
	
	try {
	  process.setgid(group)
	  process.setuid(user)
	  console.log(JSON.stringify({uid:+process.getuid(), gid:+process.getgid()}))
	} catch (ex) {
	  console.log(JSON.stringify({error:ex.message,errno:ex.errno}))
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)(module)))

/***/ },
/* 298 */
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
	
	var invariant = __webpack_require__(40);
	
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
/* 299 */
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
	
	var ExecutionEnvironment = __webpack_require__(43);
	
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
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
		"use strict";
	
		// modified from https://github.com/kriskowal/es5-shim
		var has = Object.prototype.hasOwnProperty,
			toString = Object.prototype.toString,
			forEach = __webpack_require__(301),
			isArgs = __webpack_require__(302),
			hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
			hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
			dontEnums = [
				"toString",
				"toLocaleString",
				"valueOf",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"constructor"
			],
			keysShim;
	
		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object',
				isFunction = toString.call(object) === '[object Function]',
				isArguments = isArgs(object),
				theKeys = [];
	
			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError("Object.keys called on a non-object");
			}
	
			if (isArguments) {
				forEach(object, function (value) {
					theKeys.push(value);
				});
			} else {
				var name,
					skipProto = hasProtoEnumBug && isFunction;
	
				for (name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(name);
					}
				}
			}
	
			if (hasDontEnumBug) {
				var ctor = object.constructor,
					skipConstructor = ctor && ctor.prototype === object;
	
				forEach(dontEnums, function (dontEnum) {
					if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
						theKeys.push(dontEnum);
					}
				});
			}
			return theKeys;
		};
	
		module.exports = keysShim;
	}());
	


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	var isFunction = function (fn) {
		var isFunc = (typeof fn === 'function' && !(fn instanceof RegExp)) || toString.call(fn) === '[object Function]';
		if (!isFunc && typeof window !== 'undefined') {
			isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
		}
		return isFunc;
	};
	
	module.exports = function forEach(obj, fn) {
		if (!isFunction(fn)) {
			throw new TypeError('iterator must be a function');
		}
		var i, k,
			isString = typeof obj === 'string',
			l = obj.length,
			context = arguments.length > 2 ? arguments[2] : null;
		if (l === +l) {
			for (i = 0; i < l; i++) {
				if (context === null) {
					fn(isString ? obj.charAt(i) : obj[i], i, obj);
				} else {
					fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
				}
			}
		} else {
			for (k in obj) {
				if (hasOwn.call(obj, k)) {
					if (context === null) {
						fn(obj[k], k, obj);
					} else {
						fn.call(context, obj[k], k, obj);
					}
				}
			}
		}
	};
	


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var toString = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toString.call(value);
		var isArguments = str === '[object Arguments]';
		if (!isArguments) {
			isArguments = str !== '[object Array]'
				&& value !== null
				&& typeof value === 'object'
				&& typeof value.length === 'number'
				&& value.length >= 0
				&& toString.call(value.callee) === '[object Function]';
		}
		return isArguments;
	};
	


/***/ }
]);
//# sourceMappingURL=bundle.js.map