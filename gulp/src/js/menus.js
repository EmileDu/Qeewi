var gui = require('nw.gui');

var menu = {
	'': {
		'Préférences': {
			click: function () {
				window.alert('click Example App -> "example item"');
			},
			key: ',',
		}
	},
	"Aide": {
		"Conditions d'utilisation": {
			click: function() {
				window.alert("condition d'utilisation");
			}
		},
		"Documentation": {
			click: function() {
				window.alert("Documentation");
			}
		},
		'separator2': 'separator',
		"Reporter un bug": {
			click: function() {
				window.alert("Report un bug");
			}
		}
	},
	"Fenêtre": {
		'separator': 'separator',
    Inspector: {
      click: function () {
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
			click: function () {
				gui.Window.get().reloadDev();
			},
			key: 'r'
		}
	}
};

module.exports = menu;
