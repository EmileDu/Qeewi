import React from 'react';
import { Link } from 'react-router';
import Icon from './icon.component.jsx';

class FormClose extends React.Component {
	constructor() {
		super();
	}

	render() {
		// var { router } = this.context;
		return (
			<Link className='header__button header__button button' to='Homepage'>
				<Icon className='button__icon' size="32" icon="icon-circle-cross" link="images/Icons/svgdefs.svg" />
				Valider
			</Link>
		)
	}
}

FormClose.displayName = 'Form close button';

export default FormClose;
