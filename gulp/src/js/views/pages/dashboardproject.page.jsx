import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';
import Image from '../../components/image.component.jsx';

var project = {};
var projectID;
var id;

var router;

class DashboardProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = { project: {} };
	}

	componentWillMount() {
		router = this.context.router;
		id = router.getCurrentQuery().id;
		projectID = router.getCurrentQuery().projectID;
	}

	componentDidMount() {
		this.unsubscribe = AppStore.listen(this.onStatusChange.bind(this));
		AppActions.loadProject(projectID);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onStatusChange(state) {
		this.setState(state);
		document.title = "Qeewi | " + this.state.project.title;
	}

	render() {
		var project = this.state.project;
		var file = "images/" + project.thumb || "images/"+id;
		var style = {
			backgroundImage: 'url('+ file +'_portrait_2x.png)'
		}
		return (
			<div className="page project--dashboard">
				<h1 className="page__title">Dashboard Project {project.title}</h1>
				<div className="project__thumb" style={style}></div>
				<div className="project__detail">
					<h2 className="project__title">{project.title}</h2>
					<p className="project__type">{project.type} <span className="project__version">{project.version}</span></p>
					<p className="project__desc">{project.desc}</p>
				</div>
			</div>
		);
	}
}

DashboardProject.displayName = 'Dashboard Project page';
DashboardProject.contextTypes = { router: React.PropTypes.func };

export default DashboardProject;
