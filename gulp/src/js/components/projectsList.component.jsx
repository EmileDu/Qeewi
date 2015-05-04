import React from 'react';
import Project from './project.component.jsx';
import NewProject from './newProject.component.jsx';
import _ from 'lodash';

class ProjectsList extends React.Component{
	constructor() {
		super();
	}

	render() {
		var i = 0;
		var projects = _.map(this.props.projects, function(project){
			i++;
			if (i > 5) {
				i = 1;
			}
			return <Project key={ project.key } project={ project } id={i}/>
		});
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
