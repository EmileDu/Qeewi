var gui = require('nw.gui');

var menu = {
	'': {
		'Préférences': {
			click: function () {
				
			},
			key: ',',
		}
	},
	"Aide": {
		"Conditions d'utilisation": {
			click: function() {
				gui.Shell.openExternal("http://qeewi.io");
			}
		},
		"Documentation": {
			click: function() {
				gui.Shell.openExternal("http://qeewi.io");
			}
		},
		'separator2': 'separator',
		"Reporter un bug": {
			click: function() {
				gui.Shell.openExternal("https://github.com/EmileDu/Qeewi/issues");
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
