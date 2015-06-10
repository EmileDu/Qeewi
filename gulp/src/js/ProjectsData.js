import shortid from 'shortid';
import fs from 'fs';
import gui from 'nw.gui';

var path = gui.App.dataPath+'/data';
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
	{key: shortid.generate(), path: path+'/project_exemple'}
];

module.exports = {
	init() {
		fs.exists(path + '/project_exemple/.qeewi', function(exists){
			if (exists == false) {
				console.log('this file doesn\'t exist');
				fs.mkdir(path+'/project_exemple', function(){
					console.log(path+'/project_exemple created');
					fs.writeFile(path + '/project_exemple/.qeewi', JSON.stringify(data), function(err){
						if (err) throw err;
						console.log(path + '/project_exemple/.qeewi created');
					});
				})
			}
		});

		localStorage.clear();
		localStorage.setItem('projects', JSON.stringify(projects));


	}
};
