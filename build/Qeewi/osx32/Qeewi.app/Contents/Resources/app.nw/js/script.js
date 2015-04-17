/**
 * Qeewi - Application to initialize quickly, easily and efficiently a website
 * @version v1.0.0
 * @license ISC
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var require;(function(window, require, process){

		'use strict';

		var app = {};
		app.node = {};
		app.node.fs = __webpack_require__(1);
		app.node.gui = __webpack_require__(2);
		app.node.os = __webpack_require__(3);

		var tray;

		var isTrayOn = false;

		app.init = function() {
			if(isTrayOn) {
				tray.remove();
				isTrayOn = false;
			}
			initMenu();
			initTray();
		}

		function initMenu() {
			var nativeMenuBar = new app.node.gui.Menu({ type: "menubar" });
			nativeMenuBar.createMacBuiltin("Qeewi");
			app.node.gui.Window.get().menu = nativeMenuBar
		}

		function initTray() {


			tray = new app.node.gui.Tray({icon: 'icons/tray_icon.png', tooltip: 'Qeewi'});

			var trayMenu = new app.node.gui.Menu();
			trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'DevTool', click: function() { app.node.gui.Window.get().showDevTools(); } }));
			trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'Reload', click: function() { app.node.gui.Window.get().reload(); } }));
			tray.menu = trayMenu;

			isTrayOn = true;
		}

		app.node.gui.Window.get().on('loaded', function(){
			app.init();
		});

		app.node.fs.watch('css/', function() {
		  if (location)
		    location.reload();
		});

	})(window, require, process);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("fs");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("nw.gui");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("os");

/***/ }
/******/ ]);