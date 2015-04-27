import React from 'react';
import Icon from './icon.component.jsx';

class NewProject extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<li className="projects-list__item project drag-drop-field valign-parent">
				<div className="valign-child">
					<Icon className="drag-drop-field__icon" size="32" icon="icon-plus" link="images/Icons/svgdefs.svg" />
					<h2 className="drag-drop-field__label">Nouveau projet</h2>
				</div>
			</li>
		)
	}
};

NewProject.displayName = 'NewProject DragDrop Field';

export default NewProject;
