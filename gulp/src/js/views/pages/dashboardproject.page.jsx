import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';

class DashboardProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = { projects: [] };
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
		console.log(project);
		return project;
	}

	render() {
		var { router } = this.context;
		var projectID = router.getCurrentParams().projectID;
		var project = this.getProjectByID(projectID);
		return (
			<div className="page">
				<h1 className="page__title">Dashboard Project</h1>
				<p>Dashboard Project page</p>
				<p>{project}</p>
			</div>
		);
	}
}

DashboardProject.displayName = 'Dashboard Project page';
DashboardProject.contextTypes = { router: React.PropTypes.func };

export default DashboardProject;
