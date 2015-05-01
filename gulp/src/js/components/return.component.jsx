import React from 'react';
import Router from 'react-router';

class Return extends React.Component {
	constructor() {
		super();
	}

	render() {
		<button className='header__button header__button button' onClick={this.openModal}>
			<Icon className='button__icon' size="32" icon="icon-cog" link="images/Icons/svgdefs.svg" />
			Préférences
		</button>
	}
}

Return.displayName = 'Return';

export default Return;
