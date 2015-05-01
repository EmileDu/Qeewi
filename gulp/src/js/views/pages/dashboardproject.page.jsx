import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';

var project = {};

class DashboardProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = { projects: [] };
		project = {
			title: '',
			type: '',
			desc: '',
			author: '',
			version: '',
			key: '',
			path: '',
			thumb: './images/default_thumb.jpg'
		}
	}

	componentDidMount() {
		this.unsubscribe = AppStore.listen(this.onStatusChange.bind(this));
		AppActions.loadProjects();
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onStatusChange(state) {
		this.setState(state);
	}

	getProjectByID(id) {
		var project = _.filter(this.state.projects, function(project) {
			return project.key == id;
		});
		return project[0];
	}

	render() {
		var { router } = this.context;
		var projectID = router.getCurrentParams().projectID;
		project = this.getProjectByID(projectID);
		var thumb = project.thumb || './images/default_thumb.jpg';
		return (
			<div className="page dashboard">
				<h1 className="page__title">Dashboard Project {project.title}</h1>
				<img src={thumb} className="dashboard__thumb" alt="screenshot du projet"/>
					<div className="dashboard__detail">
						<h2 className="dashboard__title">{project.title}</h2>
						<p className="dashboard__type">{project.type}<span className="project__version">{project.version}</span></p>
						<p className="dashboard__desc">{project.desc}</p>
					</div>
			</div>
		);
	}
}

DashboardProject.displayName = 'Dashboard Project page';
DashboardProject.contextTypes = { router: React.PropTypes.func };

export default DashboardProject;
