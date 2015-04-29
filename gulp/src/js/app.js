import React from 'react';
import Router from 'react-router';
import _ from 'lodash';
import routes from './routes';
import ProjectsData from './ProjectsData';
import MenuTemplate from './menus.js';


var app = {};
app.node = {};
app.node.fs = require('fs');
app.node.gui = require('nw.gui');
app.node.os = require('os');

var tray;

var isTrayOn = false;

app.init = function() {

	this.initMenu(MenuTemplate);
}

app.initDev = function() {
	if(isTrayOn) {
		tray.remove();
		isTrayOn = false;
	}
	this.initTray();
	app.node.gui.Window.get().showDevTools();
}

app.initMenu = function(template) {
	console.log(template);
	// var nativeMenuBar = new app.node.gui.Menu({ type: "menubar" });
	// nativeMenuBar.createMacBuiltin("Qeewi");
	// nativeMenuBar.items[0].submenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'Préférences', key: ',', modifiers: 'cmd', click: function() { } }))
	// app.node.gui.Window.get().menu = nativeMenuBar;
}

app.initTray = function() {
	tray = new app.node.gui.Tray({icon: 'icons/tray_icon.png', tooltip: 'Qeewi'});

	var trayMenu = new app.node.gui.Menu();
	trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'DevTool', click: function() { app.node.gui.Window.get().showDevTools(); } }));
	trayMenu.append(new app.node.gui.MenuItem({ type: 'normal', label: 'Reload', click: function() { app.node.gui.Window.get().reload(); } }));
	tray.menu = trayMenu;

	isTrayOn = true;
}

app.node.gui.Window.get().on('loaded', function(){
	ProjectsData.init();

	app.init();
	if (process.env.ENV == 'development') { app.initDev(); }

	Router.run(routes, function(Handler) {
		React.render(<Handler/>, document.body)
	});
});
