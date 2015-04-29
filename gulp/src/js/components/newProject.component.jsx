import React from 'react';
import { Link } from 'react-router';
import Icon from './icon.component.jsx';
import DropZone from './dropzone.component.jsx';

class NewProject extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<li className="projects-list__item project valign-parent">
				<DropZone className="valign-child dropzone">
					<Link to="NewProject">
						<Icon className="dropzone__icon" size="32" icon="icon-plus" link="images/Icons/svgdefs.svg" />
						<h2 className="dropzone__label">Nouveau projet</h2>
						<p className="dropzone__instruction">(Drop ton dossier ici)</p>
					</Link>
				</DropZone>
			</li>
		)
	}
};

NewProject.displayName = 'NewProject DragDrop Field';

export default NewProject;
