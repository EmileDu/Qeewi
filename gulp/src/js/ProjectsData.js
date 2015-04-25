import shortid from 'shortid';

var projects = [
	{key: shortid.generate(), title: 'Projet 1', type: 'Site Web', version: '1.0.0'},
	{key: shortid.generate(), title: 'Projet 2', type: 'Web Application', version: '1.0.0'},
	{key: shortid.generate(), title: 'Projet 3', type: 'Site Web', version: '1.0.0'},
	{key: shortid.generate(), title: 'Projet 4', type: 'Prototype', version: '1.0.0'},
	{key: shortid.generate(), title: 'Projet 5', type: 'Web Application', version: '1.0.0'},
	{key: shortid.generate(), title: 'Projet 6', type: 'Site Web', version: '1.0.0'}
];

module.exports = {
	init: function() {
		localStorage.clear();
		localStorage.setItem('projects', JSON.stringify(projects))
	}
}
