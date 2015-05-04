import React from 'react';
import AppStore from '../stores/app.store.jsx';
import AppActions from '../actions/app.action.jsx';
import Icon from './icon.component.jsx';

class FormValidate extends React.Component {
	constructor() {
		super();
		this.state = { isDisabled: true };
		this.handleClick = this.handleClick.bind(this);
	}


	componentDidMount() {
		this.unsubscribe = AppStore.listen(this.isValidable.bind(this));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	isValidable(state) {
		this.setState(state);
	}

	handleClick() {
		console.log(document.querySelector("#newprojectpath").value);
		// document.querySelector("#newprojectsubmit").click();
		document.querySelector("#newprojectpath").click();
	}

	render() {
		return (
			<button className='header__button button' disabled={this.state.isDisabled} onClick={this.handleClick}>
				<Icon className='button__icon' size="32" icon="icon-circle-check" link="images/Icons/svgdefs.svg" />
				Valider
			</button>
		)
	}
}

FormValidate.displayName = 'Form validation button';

export default FormValidate;
