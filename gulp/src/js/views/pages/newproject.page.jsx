import React from 'react';
import Input from '../../components/input.component.jsx';
import Dropzone from '../../components/dropzone.component.jsx';
import _ from 'lodash';

var requiredInput;
var formValidateButton;

class NewProject extends React.Component {
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
		// requiredInput = this.refs.newprojectform.getDOMNode().querySelector('[required]');
	}



	onSubmit() {

	}

	onChange() {
		formValidateButton = this.refs;
		console.log(formValidateButton);
		requiredInput = this.refs.newprojectform.getDOMNode().querySelectorAll('[required]');
		var isValidatable = false;
		var flag = false;
		_.map(requiredInput, function(input){
			if (_.isEmpty(_.trim(input.value))) {
				flag = true;
				return false;
			}
		});
		if (!flag){ isValidatable = true };
		// formValidateButton.isValidatable(!isValidatable);
	}

	render() {
		return (
			<div className="page">
				<h1 className="page__title">New Project</h1>
				<form ref="newprojectform" onChange={this.onChange}>
					<fieldset className="form-section">
						<legend className="form-section__title">Informations Générales</legend>
						<div className="row">
							<Input
								className="form-section__input input input--8col input--shit2col"
								type="text"
								name="input-name"
								id="input-name"
								required={true}>
								Nom du projet
							</Input>
						</div>
						<div className="row">
							<Input
								className="form-section__input input input--8col input--shit2col input--2row"
								type="textarea"
								name="input-desc"
								id="input-desc"
								required={false}>
								Description du project
							</Input>
						</div>
						<div className="row">
							<Input
								className="form-section__input input input--4col input--shit2col"
								type="text"
								name="input-keyword"
								id="input-keyword"
								required={false}>
								Mot-Clés
								</Input>
							<Input
								className="form-section__input input input--4col"
								type="text"
								name="input-author"
								id="input-author"
								required={false}>
								Auteur
							</Input>
						</div>
						<div className="row">
							<Input
								className="form-section__input input input--4col input--shit6col input--dropzone"
								type="file"
								name="input-favicon"
								id="input-favicon"
								accept="image/*"
								required={false}>
								<Dropzone className="input__label__content dropzone">Favicon</Dropzone>
							</Input>
						</div>
					</fieldset>
					<fieldset className="form-section">
						<legend className="form-section__title">Pré-configuration</legend>
						<div className="row">
							<Input
								className="form-section__input input input--4col input--radio"
								type="radio"
								name="input-preconfig"
								value="siteweb"
								id="input-preconfig-siteweb">
								Site Web
							</Input>
							<Input
								className="form-section__input input input--4col input--radio"
								type="radio"
								name="input-preconfig"
								value="webapp"
								id="input-preconfig-webapp">
								Web Application
							</Input>
							<Input
								className="form-section__input input input--4col input--radio"
								type="radio"
								name="input-preconfig"
								value="prototype"
								id="input-preconfig-prototype">
								Prototype
							</Input>
						</div>
					</fieldset>
					<fieldset className="form-section">
						<legend className="form-section__title">Stylesheet</legend>
						<div className="row">
							<Input
								className="form-section__input input input--4col input--radio"
								type="radio"
								name="input-resetcss"
								value="reset.css"
								id="input-resetcss-reset">
								Reset.css
							</Input>
							<Input
								className="form-section__input input input--4col input--radio"
								type="radio"
								name="input-resetcss"
								value="normalize.css"
								id="input-resetcss-normalize">
								Normalize.css
							</Input>
							<Input
								className="form-section__input input input--4col input--dropzone input--radio"
								type="file"
								name="input-resetcss"
								id="input-favicon"
								accept="image/*">
								<Dropzone className="input__label__content dropzone">Reset personnel</Dropzone>
							</Input>
						</div>
						<div className="row">
							<Input
								className="form-section__input input input--3col input--radio"
								type="radio"
								name="input-preprocss"
								value="SASS"
								id="input-preprocss-sass">
								SASS
							</Input>
							<Input
								className="form-section__input input input--3col input--radio"
								type="radio"
								name="input-preprocss"
								value="SCSS"
								id="input-preprocss-scss">
								SCSS
							</Input>
							<Input
								className="form-section__input input input--3col input--radio"
								type="radio"
								name="input-preprocss"
								value="LESS"
								id="input-preprocss-less">
								LESS
							</Input>
							<Input
								className="form-section__input input input--3col input--radio"
								type="radio"
								name="input-preprocss"
								value="Stylus"
								id="input-preprocss-stylus">
								Stylus
							</Input>
						</div>
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
