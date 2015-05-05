import React from 'react';
import Icon from './icon.component.jsx';

class ExportProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<button className='header__button button' onClick={this.onClick}>
				<Icon className='button__icon' size="32" icon="icon-esc" link="images/Icons/svgdefs.svg" />
				<span className='button__label'>Exporter le projet</span>
			</button>
		)
	}
}

ExportProject.displayName = 'Export Project Button';

export default ExportProject;
