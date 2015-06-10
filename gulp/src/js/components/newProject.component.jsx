import React from 'react';
import { Link } from 'react-router';
import Icon from './icon.component.jsx';
import DropZone from './dropzone.component.jsx';

class NewProject extends React.Component{
	constructor(props) {
		super(props);
		this.handleDragOver = this.handleDragOver.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
		this.state = {isDraging: false, path: undefined};
	}

	handleDragOver(ev) {
		ev.preventDefault();
		this.setState({ isDraging: true });
	}

	handleDragLeave(ev) {
		ev.preventDefault();
		this.setState({ isDraging: false });
	}

	handleDrop(ev) {
		ev.preventDefault();
		if (ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
			this.setState({ path: ev.dataTransfer.files[0].path}, function(){
				var { router } = this.context;
				router.transitionTo('NewProject', null, {path: this.state.path });
			});
		}
		this.setState({ isDraging: false });
	}

	render() {
		return (
			<li className="projects-list__item project valign-parent">
				<DropZone
					className="valign-child dropzone"
					ref="projectsdropzone"
					isDraging={this.state.isDraging}
					path={this.state.path}
					onDrop={this.handleDrop}>
					<Link to="NewProject" query={{length: this.props.length}} >
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
