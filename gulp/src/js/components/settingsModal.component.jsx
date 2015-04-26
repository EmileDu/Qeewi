import React from 'react';
import Portal from 'react-portal';
import SettingsButton from './settingsButton.component.jsx';

class SettingsModal extends React.Component {
	constructor() {
		super();
	}

	render() {
		var button = <SettingsButton />;
		return (
			<Portal openByClickOn={button} closeOnEsc={true} closeOnOutsideClick={true}>
				<button>Fermer</button>
			</Portal>
		)
	}
}

SettingsModal.displayName = 'Settings Modals';

export default SettingsModal;
