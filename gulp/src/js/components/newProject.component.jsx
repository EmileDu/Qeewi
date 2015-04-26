import React from 'react';

class NewProject extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<li className="projects-list__item project drag-drop-field">
				<h2 className="drag-drop-field__label">Nouveau projet</h2>
			</li>
		)
	}
};

NewProject.displayName = 'NewProject DragDrop Field';

export default NewProject;
