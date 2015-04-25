import React from 'react';

class NewProject extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<li className="projects-list__item project drag-drop-field">
				<p>Nouveau Projet</p>
			</li>
		)
	}
};

NewProject.displayName = 'NewProject DragDrop Field';

export default NewProject;
