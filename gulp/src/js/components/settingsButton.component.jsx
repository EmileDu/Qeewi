import React from 'react';
import Icon from './icon.component.jsx';

class SettingsButton extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<button className='header__button header__button--settings button'>
				<Icon size="32" icon="icon-cog" link="images/Icons/svgdefs.svg" />
				Préférences
			</button>
		)
	}
}

SettingsButton.displayName = 'Settings Button';

export default SettingsButton;
