import React from 'react';
import Icon from './icon.component.jsx';

class FormValidate extends React.Component {
	constructor() {
		super();
		this.state = { isDisabled: true };
	}


	render() {
		return (
			<button className='header__button header__button button' disabled={this.state.isDisabled}>
				<Icon className='button__icon' size="32" icon="icon-circle-check" link="images/Icons/svgdefs.svg" />
				Valider
			</button>
		)
	}
}

FormValidate.displayName = 'Form validation button';

export default FormValidate;
