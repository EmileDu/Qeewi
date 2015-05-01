import shortid from 'shortid';

var projects = [
	{key: shortid.generate(), path: '/Volumes/Document/Web/Perso/test'},
	{key: shortid.generate(), path: '/Volumes/Document/Web/Perso/test2'},
	{key: shortid.generate(), path: '/Volumes/Document/Web/Perso/test3'},
	{key: shortid.generate(), path: '/Volumes/Document/Web/Perso/test4'}
];

module.exports = {
	init: function() {
		localStorage.clear();
		localStorage.setItem('projects', JSON.stringify(projects))
	}
}
