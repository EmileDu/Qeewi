import React from 'react';
import { Link } from 'react-router';

class Project extends React.Component{
	constructor() {
		super();
	}

	render() {
		var project = this.props.project;
		var thumb = project.thumb || './images/default_thumb.jpg';
		return (
			<li className="projects-list__item project">
				<Link to="DahsboardProject">
					<img src={thumb} className="project__thumb" alt="screenshot du projet"/>
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
