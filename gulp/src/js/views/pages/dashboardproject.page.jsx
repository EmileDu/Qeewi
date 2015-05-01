import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';

var project = {};
var projectID;

class DashboardProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = { project: {} };
		// projectID = router.getCurrentParams().projectID;
	}

	componentDidMount() {
		var { router } = this.context;
		projectID = router.getCurrentParams().projectID;
		this.unsubscribe = AppStore.listen(this.onStatusChange.bind(this));
		AppActions.loadProject(projectID);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onStatusChange(state) {
		this.setState(state);
	}

	render() {
		var project = this.state.project;
		var thumb = project.thumb || './images/default_thumb.jpg';
		return (
			<div className="page dashboard">
				<h1 className="page__title">Dashboard Project {project.title}</h1>
				<img src={thumb} className="dashboard__thumb" alt="screenshot du projet"/>
				<div className="dashboard__detail">
					<h2 className="dashboard__title">{project.title}</h2>
					<p className="dashboard__type">{project.type} <span className="dashboard__version">{project.version}</span></p>
					<p className="dashboard__desc">{project.desc}</p>

				</div>
			</div>
		);
	}
}

DashboardProject.displayName = 'Dashboard Project page';
DashboardProject.contextTypes = { router: React.PropTypes.func };

export default DashboardProject;
