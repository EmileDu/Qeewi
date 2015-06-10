import React from 'react';
import { Link } from 'react-router';
import Image from './image.component.jsx';

class Project extends React.Component{
	constructor() {
		super();
	}

	render() {
		var project = this.props.project;
		var file = "images/" + project.thumb || "images/" + this.props.id;
		var style = {
			backgroundImage: 'url('+ file +'_portrait_2x.png)'
		}
		return (
			<Link className="project" to="DahsboardProject" query={{projectID: project.key, id: this.props.id}}>
				<div className="project__thumb" style={style}></div>
				<div className="project__detail">
					<h2 className="project__title">{project.title}</h2>
					<p className="project__type">{project.type}<span className="project__version">{project.version}</span></p>
					<p className="project__desc">{project.desc}</p>
				</div>
			</Link>
		)
	}
};

Project.displayName = 'Project';

export default Project;
