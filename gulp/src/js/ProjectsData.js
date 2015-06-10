import shortid from 'shortid';
import fs from 'fs';
import gui from 'nw.gui';

var path = gui.App.dataPath+'/data/projet_exemple';
var data = {
	"title":"Projet d'exemple",
	"type":"Site Web",
	"desc":"Ceci est la fiche du projet. Vous y retrouvez, ces informations générales. Vous avez aussi accès à plusieurs fonctionnalités comme éditer, mettre à jour les ressources, exporter et pour finir supprimer le projet",
	"author":"Qeewi",
	"version":"1.0.0",
	"thumb":"kiwi",
	"option":{
		"resetcss":"",
		"preprocss":"",
		"preprojs":""
	}
}

var projects = [
	{key: shortid.generate(), path: path}
];

module.exports = {
	init() {
		localStorage.clear();
		localStorage.setItem('projects', JSON.stringify(projects));
		fs.writeFile(path + '/.qeewi', JSON.stringify(data), function(err){
			if (err) throw err;
			console.log('init successfull');
		});
	}
};
