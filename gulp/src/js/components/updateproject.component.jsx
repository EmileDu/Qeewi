import React from 'react';
import Icon from './icon.component.jsx';

class UpdateProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<button className='header__button button' onClick={this.onClick}>
				<Icon className='button__icon' size="32" icon="icon-reload" link="images/Icons/svgdefs.svg" />
				<span className='button__label'>Mettre à jour le projet</span>
			</button>
		)
	}
}

UpdateProject.displayName = 'Update Project Button';

export default UpdateProject;
