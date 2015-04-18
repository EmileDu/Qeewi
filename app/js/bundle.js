/**
 * Qeewi - Application to initialize quickly, easily and efficiently a website
 * @version v1.0.0
 * @license ISC
 */
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var require;'use strict';
	
	(function (window, require, process) {
	
		'use strict';
	
		var React = __webpack_require__(1);
		var AppComponent = __webpack_require__(6);
	
		var app = {};
		app.node = {};
		app.node.fs = __webpack_require__(2);
		app.node.gui = __webpack_require__(3);
		app.node.os = __webpack_require__(4);
	
		var tray;
	
		var isTrayOn = false;
	
		app.init = function () {
			if (isTrayOn) {
				tray.remove();
				isTrayOn = false;
			}
			initMenu();
			initTray();
		};
	
		function initMenu() {
			var nativeMenuBar = new app.node.gui.Menu({ type: 'menubar' });
			nativeMenuBar.createMacBuiltin('Qeewi');
			app.node.gui.Window.get().menu = nativeMenuBar;
		}
	
		function initTray() {
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
		}
	
		app.node.gui.Window.get().on('loaded', function () {
			app.init();
		});
	
		React.render(React.createElement(AppComponent, { name: 'Emile' }), document.getElementById('container'));
	})(window, require, process);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("nw.gui");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("os");

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	  render: function render() {
	    return React.createElement(
	      'h1',
	      null,
	      'Hello ',
	      this.props.name,
	      '!!'
	    );
	  }
	});

/***/ }
]);
//# sourceMappingURL=bundle.js.map