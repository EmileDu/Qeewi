import React from 'react';
import { Link } from 'react-router';
import SettingsModal from '../../components/settingsModal.component.jsx';
// import Search from '../../components/search.component.jsx';
// import NewProjectNav from '../../components/newProjectNav.component.jsx';
// import Return from '../../components/return.component.jsx'

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
