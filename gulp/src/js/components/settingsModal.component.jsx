import React from 'react';
import Modal from 'react-modal';
import Icon from './icon.component.jsx';

var Element = document.body;

class SettingsModal extends React.Component {
	constructor() {
		super();
		Modal.setAppElement(Element);
		this.state = { modalIsOpen: false };
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true});
	}

	closeModal() {
		this.setState({ modalIsOpen: false});
	}

	render() {
		return (
			<div className="modal">
				<button className='header__button header__button--settings button' onClick={this.openModal}>
					<Icon className='button__icon' size="32" icon="icon-cog" link="images/Icons/svgdefs.svg" />
					<span className='button__label'>Préférences</span>
				</button>
				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
					<button onClick={this.closeModal}>Fermer</button>
				</Modal>
			</div>
		)
	}
}

SettingsModal.displayName = 'Settings Modals';

export default SettingsModal;
