import shortid from 'shortid';

var projects = [
			{key: shortid.generate(), path: '/Users/emileduval/Desktop/test'},
			{key: shortid.generate(), path: '/Users/emileduval/Desktop/test2'},
			{key: shortid.generate(), path: '/Users/emileduval/Desktop/test3'},
			{key: shortid.generate(), path: '/Users/emileduval/Desktop/test4'}
		];

module.exports = {
	init() {
		localStorage.clear();
		localStorage.setItem('projects', JSON.stringify(projects))
	}
};
