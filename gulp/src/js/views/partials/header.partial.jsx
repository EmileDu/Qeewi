import React from 'react';
import { Link } from 'react-router';
import SettingsModal from '../../components/settingsModal.component.jsx';

// import Search from '../../components/search.components.jsx';

class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<header className="app__header header">
				<SettingsModal />
			</header>
		);
	}
}

Header.displayName = 'Header';

export default Header;
