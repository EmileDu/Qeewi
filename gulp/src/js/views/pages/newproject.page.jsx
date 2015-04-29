import React from 'react';
import Input from '../../components/input.component.jsx';

class NewProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="page">
				<h1 className="page__title">New Project</h1>
				<form>
					<fieldset className="form__section">
						<legend className="form__section__title">Informations Générales</legend>
						<Input type="text" id="input-name">Nom du projet</Input>
					</fieldset>
					<fieldset className="form__section">
						<legend className="form__section__title">Pré-configuration</legend>
					</fieldset>
					<fieldset className="form__section">
						<legend className="form__section__title">Stylesheet</legend>
					</fieldset>
					<fieldset className="form__section">
						<legend className="form__section__title">Javascript</legend>
					</fieldset>
					<fieldset className="form__section">
						<legend className="form__section__title">Typographie</legend>
					</fieldset>
				</form>
			</div>
		);
	}
}

NewProject.displayName = 'New project page';

export default NewProject;
