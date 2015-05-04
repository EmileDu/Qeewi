import React from 'react';
import { Link } from 'react-router';
import Image from './image.component.jsx';

class Project extends React.Component{
	constructor() {
		super();
	}

	render() {
		var project = this.props.project;
		var file = project.thumb || "images/"+ this.props.id;
		return (
			<li className="projects-list__item project">
				<Link to="DahsboardProject" query={{projectID: project.key, id: this.props.id}}>
					<Image
						file={file}
						format="png"
						className="project__thumb"
						alt="screenshot du projet"
						width="212"
						height="144"
						responsiveOption={['1x', '2x']}/>
					<div className="project__detail">
						<h2 className="project__title">{project.title}</h2>
						<p className="project__type">{project.type}<span className="project__version">{project.version}</span></p>
					</div>
				</Link>
			</li>
		)
	}
};

Project.displayName = 'Project';

export default Project;
