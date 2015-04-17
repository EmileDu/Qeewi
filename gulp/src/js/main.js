(function(window, require, process){

	'use strict';

	var app = {};
	app.node = {};
	app.node.fs = require('fs');
	app.node.gui = require('nw.gui');
	app.node.os = require('os');

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
