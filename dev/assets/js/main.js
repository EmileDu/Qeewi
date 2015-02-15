(function(){
	var gui = require('nw.gui');
	var win = gui.Window.get();
	var nativeMenuBar = new gui.Menu({ type: "menubar" });
	nativeMenuBar.createMacBuiltin("Boilerplate");
	win.menu = nativeMenuBar;

	var tray = new gui.Tray({ 
		title: 'Tray',
		icon: 'assets/img/icon.png',
		alticon: 'assets/img/alticon.png'
	});

	var menu = new gui.Menu();
	menu.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));
	tray.menu = menu;
})();