import React from 'react';
import ProjectsList from '../../components/projectsList.component.jsx';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			loading: false
		}
	}

	componentDidMount() {
		document.title = "Qeewi";
		this.unsubscribe = AppStore.listen(this.onStatusChange.bind(this));
		AppActions.loadProjects();
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onStatusChange(state) {
		this.setState(state);
	}

	render() {
		return (
			<div className="page">
				<h1 className="page__title">Home</h1>
				<ProjectsList { ...this.state }/>
			</div>
		);
	}
};

Home.displayName = 'Home page';

export default Home;
