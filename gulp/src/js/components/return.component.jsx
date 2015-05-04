import React from 'react';
import Router from 'react-router';
import Icon from './icon.component.jsx';

class Return extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		var { router } = this.context;
		router.transitionTo('Homepage');
	}

	render() {
		return(
			<button className='header__button button' onClick={this.onClick}>
				<Icon className='button__icon' size="32" icon="icon-back" link="images/Icons/svgdefs.svg" />
				Return
			</button>
		)
	}
}

Return.displayName = 'Return';
Return.contextTypes = { router: React.PropTypes.func.isRequired };

export default Return;
