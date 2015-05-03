import React from 'react';
import { Link } from 'react-router';
import Icon from './icon.component.jsx';
import DropZone from './dropzone.component.jsx';

class NewProject extends React.Component{
	constructor() {
		super();
		this.onDrop = this.onDrop.bind(this);
	}

	onDrop() {
		console.log('coucou');
		var { router } = this.context;
		router.transitionTo('NewProject');
	}

	render() {
		return (
			<li className="projects-list__item project valign-parent">
				<DropZone className="valign-child dropzone" onDrop={this.onDrop}>
					<Link to="NewProject">
						<Icon className="dropzone__icon" size="32" icon="icon-plus" link="images/Icons/svgdefs.svg" />
						<h2 className="dropzone__label">Nouveau projet</h2>
						<p className="dropzone__instruction" ref="instruction">(Drop ton dossier ici)</p>
					</Link>
				</DropZone>
			</li>
		)
	}
};

NewProject.displayName = 'NewProject DragDrop Field';
NewProject.contextTypes = { router: React.PropTypes.func.isRequired };

export default NewProject;
