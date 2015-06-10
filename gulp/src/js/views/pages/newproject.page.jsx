import React from 'react';
import Dropzone from '../../components/dropzone.component.jsx';
import _ from 'lodash';
import fs from 'fs';
import gui from 'nw.gui';
import AppStore from '../../stores/app.store.jsx';
import AppActions from '../../actions/app.action.jsx';
import Input from '../../components/input.component.jsx';
import MoreOptions from '../partials/moreOptions.partial.jsx';

var requiredInput;
var formValidateButton;
var router;
var length;

var path = gui.App.dataPath+'/data';
var settings= '';

class NewProject extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getFormData = this.getFormData.bind(this);
	}

	componentWillMount() {
		router = this.context.router;
		length = router.getCurrentQuery().length;

		settings = fs.readFileSync(path + '/settings.json', 'utf-8');
		settings = JSON.parse(settings.toString('utf8').replace(/^\uFEFF/, ''));

		this.setState({
			author: settings.author
		});
	}

	componentDidMount() {
		document.title = "Qeewi | Nouveau projet";
		requiredInput = this.refs.newprojectform.getDOMNode().querySelectorAll('[required]');
		this.refs.inputPath.getDOMNode().setAttribute('nwdirectory', true);
		this.refs.inputPath.getDOMNode().setAttribute('directory', true);

		console.log('watching settings.json');
		fs.watchFile(path + '/settings.json', function(event){
			settings = fs.readFileSync(path + '/settings.json', 'utf-8');
			settings = JSON.parse(settings.toString('utf8').replace(/^\uFEFF/, ''));

			this.setState({
				author: settings.author
			});
		}.bind(this));
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
		var data = form.querySelectorAll("input, textarea, button, select");
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

	getThumb(num) {
		var thumb;
		switch(num) {
			case 0:
				thumb = 'kiwi';
			 	break;
			case 1:
				thumb = 'pomme';
			 	break;
			case 2:
				thumb = 'banane';
			 	break;
			case 3:
				thumb = 'orange';
			 	break;
			case 4:
				thumb = 'poire';
			 	break;
			default:
				thumb = 'kiwi'
				break;
		}
		return thumb;
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

		while (length >= 5) { length -= 5; }

		var data = {
			path: this.getInputValue(formData, 'input-path') || '',
			title: this.getInputValue(formData, 'input-title') || '',
			type: this.getInputValue(formData, 'input-preconfig') || 'Site Web',
			desc: this.getInputValue(formData, 'input-desc') || '',
			author: this.getInputValue(formData, 'input-author') || '',
			preconfig: this.getInputValue(formData, 'input-preconfig') || '',
			resetcss: this.getInputValue(formData, 'input-resetcss') || '',
			preprocss: this.getInputValue(formData, 'input-preprocss') || '',
			preprojs: this.getInputValue(formData, 'input-preprojs') || '',
			thumb: this.getThumb(parseInt(length))
		};

		AppActions.addProject(data);
		var { router } = this.context;
		router.transitionTo('Homepage');
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
								value={this.state.author}
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
					<MoreOptions />
					<input type="file" ref="inputPath" id="input-path" name="input-path" className="form-section__input input input--hidden" onChange={this.handleSubmit}/>
				</form>
			</div>
		);
	}
}

NewProject.displayName = 'New project page';
NewProject.contextTypes = { router: React.PropTypes.func.isRequired };

export default NewProject;
