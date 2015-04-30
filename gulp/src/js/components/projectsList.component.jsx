import React from 'react';
import Project from './project.component.jsx';
import NewProject from './newProject.component.jsx';
import _ from 'lodash';

class ProjectsList extends React.Component{
	constructor() {
		super();
	}

	render() {
		var projects = this.props.projects.map(project => <Project key={ project.key } project={ project } />);

		return (
			<ul className="projects-list">
				<NewProject />
				{projects}
			</ul>
		)
	}
};

ProjectsList.displayName = 'ProjectsList';

ProjectsList.propTypes = {
	projects : React.PropTypes.arrayOf(React.PropTypes.object)
}

export default ProjectsList;
