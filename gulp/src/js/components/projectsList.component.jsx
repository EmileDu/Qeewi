import React from 'react';
import Project from './project.component.jsx';
import NewProject from './newProject.component.jsx';
import _ from 'lodash';

class ProjectsList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		var projects = _.map(this.props.projects, function(project){
			return 	<li className="projects-list__item">
								<Project key={ project.key } project={ project }/>
							</li>
		});
		return (
			<ul className="projects-list">
				<NewProject length={this.props.length}/>
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
