import React from 'react';
import { Link } from 'react-router';
import Icon from './icon.component.jsx';

class AddProjectButton extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Link to="NewProject" className='header__button button' onClick={this.openModal}>
				<Icon className='button__icon' size="32" icon="icon-circle-plus" link="images/Icons/svgdefs.svg" />
				Préférences
			</Link>
		)
	}
}

AddProjectButton.displayName = 'Add Project Button';

export default AddProjectButton;
