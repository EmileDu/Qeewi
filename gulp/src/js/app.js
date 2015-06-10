import React from 'react';
import Router from 'react-router';
import _ from 'lodash';
import routes from './routes';
import ProjectsData from './ProjectsData.js';
import MenuTemplate from './menus.js';
import AppMenu from 'nw-appmenu';


var app = {};
app.node = {};
app.node.fs = require('fs');
app.node.gui = require('nw.gui');
app.node.os = require('os');

var data = {
	"preconfig": "Site Web",
	"resetcss": "",
	"preprocss": "",
	"preprojs": "",
	"author": ""
}

var tray;

var isTrayOn = false;

app.init = function() {
	this.initMenu(MenuTemplate);

	app.node.fs.exists(app.node.gui.App.dataPath + '/data/settings.json', function(exists){
		if (!exists) {
			app.node.fs.writeFile(app.node.gui.App.dataPath + '/data/settings.json', JSON.stringify(data), function(err){
				if (err) throw err;
			});
		}
	});

	// console.log(localStorage);
	// if (window.localStorage != null && localStorage.getItem("projects") === null) {
	// 	ProjectsData.init();
	// }
}

app.initMenu = function(template) {
	var gui = app.node.gui;
	var win = gui.Window.get();
	var nativeMenuBar = new gui.Menu({ type: 'menubar' });
	nativeMenuBar.createMacBuiltin && nativeMenuBar.createMacBuiltin("Qeewi");

	AppMenu.extend(nativeMenuBar, template);
	win.menu = nativeMenuBar;
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
	app.init();
	Router.run(routes, function(Handler) {
		React.render(<Handler/>, document.body)
	});
});

window.ondragover = window.ondrop = function(e) {	e.preventDefault(); return false; };
