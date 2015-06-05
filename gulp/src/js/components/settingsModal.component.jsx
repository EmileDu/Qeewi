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

	save() {

	}

	render() {
		return (
			<div className="modal">
				<button className='header__button header__button--settings button' onClick={this.openModal}>
					<Icon className='button__icon' size="32" icon="icon-cog" link="images/Icons/svgdefs.svg" />
					<span className='button__label'>Préférences</span>
				</button>
				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
					<div className="wrapper">
						<div className="modal__col">
							<form ref="skeletonform" id="skeletonform">
								<legend className="modal__title">Squelette du projet</legend>
							</form>
						</div>
						<div className="modal__col">
							<form ref="configdefaultform" id="configdefaultform">
								<legend className="modal__title">Configuration par défaut</legend>
							</form>
						</div>
						<button className="modal__button button--save" onClick={this.closeModal}>Sauvegarder</button>
					</div>
				</Modal>
			</div>
		)
	}
}

SettingsModal.displayName = 'Settings Modals';

export default SettingsModal;
