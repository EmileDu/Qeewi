import React from 'react';
import { Link } from 'react-router';
import SettingsModal from '../../components/settingsModal.component.jsx';
// import Search from '../../components/search.component.jsx';
// import FormNavigation from '../../components/formNavigation.component.jsx';
import FormValidate from '../../components/formValidate.component.jsx';
import FormClose from '../../components/formClose.component.jsx';
import Return from '../../components/return.component.jsx';

class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		var { router } = this.context;
		var path = router.getCurrentPath();
		path = path.split("?");
		var navigation = [];
		switch(path[0]) {
			case '/':
				break;
			case '/newproject':
				navigation.push(
					<FormValidate />,
					<FormClose />
				)
				break;
			case '/project':
				navigation.push(
						<Return />
				)
				break;
			default:
				break;
		}
		return (
			<header className="app__header header">
				<SettingsModal />
				{navigation}
			</header>
		);
	}
}

Header.displayName = 'Header';
Header.contextTypes = { router: React.PropTypes.func.isRequired };

export default Header;
