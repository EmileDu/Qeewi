import React from 'react';
import Icon from './icon.component.jsx';

class DeleteProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<button className='header__button button' onClick={this.onClick}>
				<Icon className='button__icon' size="32" icon="icon-circle-minus" link="images/Icons/svgdefs.svg" />
				<span className='button__label'>Supprimer le projet</span>
			</button>
		)
	}
}

DeleteProject.displayName = 'Delete Project Button';

export default DeleteProject;
