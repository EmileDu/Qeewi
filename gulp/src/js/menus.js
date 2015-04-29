var menu = [
	{
		label:"Qeewi",
		submenu: [
			{ type: "normal", label: "A propos de Qeewi" },
			{ type: "separator"},
			{ type: "normal", label: "Préférences" },
			{ type: "separator"},
			{ type: "normal", label: "Masquer Qeewi" },
			{ type: "normal", label: "Masquer les autres" },
			{ type: "normal", label: "Tout afficher" },
			{ type: "separator"},
			{ type: "normal", label: "Quitter Qeewi" },
		]
	},
	{
		label: "Fenêtre",
		submenu: [
			{ type: "normal", label: "Reduire"},
			{ type: "normal", label: "Fermer la fenêtre"},
			{ type: "separator" },
			{ type: "normal", label: "Tout ramener au premier plan" }
		]
	},
	{
		label: "Aide",
		submenu: [
			{ type: "normal", label: "Conditions d'utilisation" },
			{ type: "normal", label: "Documentation" },
			{ type: "separator" },
			{ type: "normal", label: "Reporter un bug" }
		]
	}
];

module.exports = menu;
