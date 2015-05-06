import React from 'react';
import Icon from './icon.component.jsx';
import AppStore from '../stores/app.store.jsx';
import AppActions from '../actions/app.action.jsx';

var router;
var projectID;

class DeleteProject extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		router = this.context.router;
		projectID = router.getCurrentQuery().projectID;
	}

	componentDidMount() {

	}

	handleClick() {
		AppActions.removeProject(projectID);
		router.transitionTo('Homepage');
	}

	render() {
		return(
			<button className='header__button button' onClick={this.handleClick}>
				<Icon className='button__icon' size="32" icon="icon-circle-minus" link="images/Icons/svgdefs.svg" />
				<span className='button__label'>Supprimer le projet</span>
			</button>
		)
	}
}

DeleteProject.displayName = 'Delete Project Button';
DeleteProject.contextTypes = { router: React.PropTypes.func.isRequired };

export default DeleteProject;
