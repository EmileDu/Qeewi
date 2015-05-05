import React from 'react';
import Input from '../../components/input.component.jsx';
import Dropzone from '../../components/dropzone.component.jsx';
import _ from 'lodash';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';

var requiredInput;
var formValidateButton;
var router;

class NewProject extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getFormData = this.getFormData.bind(this);
	}

	componentWillMount() {
		router = this.context.router;
	}

	componentDidMount() {
		document.title = "Qeewi | Nouveau projet";
		requiredInput = this.refs.newprojectform.getDOMNode().querySelectorAll('[required]');
		this.refs.inputPath.getDOMNode().setAttribute('nwdirectory', true);
		this.refs.inputPath.getDOMNode().setAttribute('directory', true);

	}

	onChange() {
		var isValidatable = false;
		var flag = false;
		_.map(requiredInput, function(input){
			if (_.isEmpty(_.trim(input.value))) {
				flag = true;
				return false;
			}
		});
		if (!flag){ isValidatable = true };
		AppActions.isValidable(isValidatable);
	}

	getFormData() {
		var form = document.querySelector("#newprojectform");
		var data = form.querySelectorAll("input, textarea, button");
		return data;
	}

	handleSubmit() {
		console.log('submited');
		var data = this.getFormData();
		console.log(data);
		// AppActions.compileProject(isValidatable);
	}

	render() {
		if (router.getCurrentQuery().path !== undefined) {
			var pathValue = router.getCurrentQuery().path;
		} else {
			var pathValue = '';
		}
		return (
			<div className="page" ref="newprojectpage">
				<h1 className="page__title">New Project</h1>
				<form ref="newprojectform" id="newprojectform" onChange={this.onChange} onSubmit={this.onSubmit}>
					<fieldset className="form-section" id="infogen">
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
								required={false}
								maxlength="400">
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
						<div className="row">
							<Input
								className="form-section__input input input--3col input--radio"
								type="radio"
								name="input-preprojs"
								value="CoffeeScript"
								id="input-preprojs-coffescript">
								CoffeeScript
							</Input>
							<Input
								className="form-section__input input input--3col input--radio"
								type="radio"
								name="input-preprojs"
								value="LiveScript"
								id="input-preprojs-livescript">
								LiveScript
							</Input>
						</div>
					</fieldset>
					<fieldset className="form-section">
						<legend className="form-section__title">Typographie</legend>
					</fieldset>
					<input type="file" ref="inputPath" id="newprojectpath" className="form-section__input input input--hidden" value={pathValue} onChange={this.handleSubmit}/>
					<button type="submit" id="newprojectsubmit" className="form-section__input input input--hidden">Submit</button>
				</form>
			</div>
		);
	}
}

NewProject.displayName = 'New project page';
NewProject.contextTypes = { router: React.PropTypes.func.isRequired };


export default NewProject;
