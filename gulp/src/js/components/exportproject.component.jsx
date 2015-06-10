import React from 'react';
import Icon from './icon.component.jsx';
import AppStore from '../stores/app.store.jsx';
import AppActions from '../actions/app.action.jsx';

var router;
var projectID;

class ExportProject extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		router = this.context.router;
		projectID = router.getCurrentQuery().projectID;
	}

	componentDidMount() {

	}

	exportProject() {
		console.log('export');
		AppActions.exportProject(projectID);
	}

	render() {
		return(
			<button className='header__button button' onClick={this.exportProject}>
				<Icon className='button__icon' size="32" icon="icon-esc" link="images/Icons/svgdefs.svg" />
				<span className='button__label'>Exporter le projet</span>
			</button>
		)
	}
}

ExportProject.displayName = 'Export Project Button';
ExportProject.contextTypes = { router: React.PropTypes.func.isRequired };

export default ExportProject;
