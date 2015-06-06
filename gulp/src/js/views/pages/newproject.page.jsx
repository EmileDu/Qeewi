import React from 'react';
import Dropzone from '../../components/dropzone.component.jsx';
import _ from 'lodash';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';
import Input from '../../components/input.component.jsx';
import ClassNames from 'classnames';

var requiredInput;
var formValidateButton;
var router;

class NewProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isPanelOpen: false };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOpenPanel = this.handleOpenPanel.bind(this);
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

	handleChange() {
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

	getInputValue(list, identifier) {
		var value = _.result(_.find(list, function(item) {
		  return item.name == identifier;
		}), 'value');
		if(value == undefined) {
			return false
		}
		return value;
	}

	handleSubmit() {
		var formData = this.getFormData();
		formData = _.filter(formData, function(input){
			return  input.value != '';
		})
		formData = _.filter(formData, function(input){
			if (input.type == 'radio'){
				return input.checked;
			} else {
				return input;
			}
		});

		var data = {
			path: this.getInputValue(formData, 'input-path') || '',
			title: this.getInputValue(formData, 'input-title') || '',
			type: this.getInputValue(formData, 'input-preconfig') || 'Site Web',
			desc: this.getInputValue(formData, 'input-desc') || '',
			author: this.getInputValue(formData, 'input-author') || ''
		}

		AppActions.addProject(data);
		var { router } = this.context;
		router.transitionTo('Homepage');
	}

	handleOpenPanel() {
		if(this.state.isPanelOpen){
			this.setState({isPanelOpen: false});
		} else {
			this.setState({isPanelOpen: true});
		}
	}

	render() {
		var classPanel = ClassNames('form-panel', {'form-panel--open': this.state.isPanelOpen})

		if (router.getCurrentQuery().path !== undefined) {
			var pathValue = router.getCurrentQuery().path;
		} else {
			var pathValue = '';
		}
		return (
			<div className="page" ref="newprojectpage">
				<h1 className="page__title">New Project</h1>
				<form ref="newprojectform" id="newprojectform" onChange={this.handleChange}>
					<fieldset className="form-section" id="infogen">
						<legend className="form-section__title">Informations Générales</legend>
						<div className="row">
							<Input
								className="form-section__input input input--8col input--shit2col"
								type="text"
								name="input-title"
								id="input-title"
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
					<div className={classPanel}>
						<button className="form-panel__button" onClick={this.handleOpenPanel}>Plus d'option</button>
						<fieldset className="form-section" id="moreconfig">
							<div className="row">
								<Input
									className="form-section__input input input--select input--3col"
									type="select"
									name="input-select-preconfig"
									id="input-select-preconfig"
									required={false}
									label="Pré-configuration"
									default="website">
									<option value="website">Site Web</option>
									<option value="webapp">Web App</option>
									<option value="proto">Prototype</option>
								</Input>
								<Input
									className="form-section__input input input--select input--3col"
									type="select"
									name="input-select-resetcss"
									id="input-select-resetcss"
									required={false}
									label="Reset CSS"
									default="">
									<option value="">Aucun</option>
									<option value="reset">Reset</option>
									<option value="normalize">Normalize</option>
								</Input>
								<Input
									className="form-section__input input input--select input--3col"
									type="select"
									name="input-select-preprocss"
									id="input-select-preprocss"
									required={false}
									label="Préprocesseur CSS"
									default="">
									<option value="">Aucun</option>
									<option value="less">LESS</option>
									<option value="sass">SASS</option>
									<option value="scss">SCSS</option>
									<option value="stylus">Stylus</option>
								</Input>
								<Input
									className="form-section__input input input--select input--3col"
									type="select"
									name="input-select-preprojs"
									id="input-select-preprojs"
									required={false}
									label="Préprocesseur JS"
									default="">
									<option value="">Aucun</option>
									<option value="coffeescript">CoffeeScript</option>
									<option value="livescript">LiveScript</option>
								</Input>
							</div>
						</fieldset>
						<fieldset className="form-section" id="jsextern">
							<legend className="form-section__title">Ressources Javascript</legend>
							<div className="row">
								<Input
									className="form-section__input input input--search input--6col"
									type="search"
									name="input-select-jsextern"
									id="input-select-jsextern"
									required={false}>
									Rechercher sur github
								</Input>
								<Input
									className="form-section__input input input--dropzone input--6col"
									type="file"
									name="input-favicon"
									id="input-favicon"
									accept="image/*"
									required={false}>
									<Dropzone className="input__label__content dropzone">Ressource personnelle</Dropzone>
								</Input>
							</div>
						</fieldset>
					</div>
					<input type="file" ref="inputPath" id="input-path" name="input-path" className="form-section__input input input--hidden" onChange={this.handleSubmit}/>
				</form>
			</div>
		);
	}
}

NewProject.displayName = 'New project page';
NewProject.contextTypes = { router: React.PropTypes.func.isRequired };


export default NewProject;
