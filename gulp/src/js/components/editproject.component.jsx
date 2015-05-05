import React from 'react';
import Router from 'react-router';
import Icon from './icon.component.jsx';

class EditProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<button className='header__button button' onClick={this.onClick}>
				<Icon className='button__icon' size="32" icon="icon-edit" link="images/Icons/svgdefs.svg" />
				<span className='button__label'>Éditer le projet</span>
			</button>
		)
	}
}

EditProject.displayName = 'Edit Project Button';

export default EditProject;
