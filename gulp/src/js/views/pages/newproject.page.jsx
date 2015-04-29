import React from 'react';
import Input from '../../components/input.component.jsx';
import Textarea from '../../components/textarea.component.jsx';

class NewProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="page">
				<h1 className="page__title">New Project</h1>
				<form>
					<fieldset className="form-section">
						<legend className="form-section__title">Informations Générales</legend>
						<Input className="form-section__input input input--8col input--shit2col" type="text" id="input-name">Nom du projet</Input>
						<Textarea className="form-section__input input input--8col input--shit2col input--2row" id="input-desc">Description du project</Textarea>
						<Input className="form-section__input input input--4col input--shit2col" type="text" id="input-keyword">Mot-Clés</Input>
						<Input className="form-section__input input input--4col" type="text" id="input-author">Auteur</Input>
						<Input className="form-section__input input input--4col input--shit6col" type="text" id="input-author">Auteur</Input>
					</fieldset>
					<fieldset className="form-section">
						<legend className="form-section__title">Pré-configuration</legend>
					</fieldset>
					<fieldset className="form-section">
						<legend className="form-section__title">Stylesheet</legend>
					</fieldset>
					<fieldset className="form-section">
						<legend className="form-section__title">Javascript</legend>
					</fieldset>
					<fieldset className="form-section">
						<legend className="form-section__title">Typographie</legend>
					</fieldset>
				</form>
			</div>
		);
	}
}

NewProject.displayName = 'New project page';

export default NewProject;
