import React from 'react';
import Modal from 'react-modal';
import _ from 'lodash';
import fs from 'fs';
import gui from 'nw.gui';
import Icon from './icon.component.jsx';
import Input from './input.component.jsx';
import Dropzone from './dropzone.component.jsx';


var Element = document.body;
var path = gui.App.dataPath+'/data';
var settings= '';

class SettingsModal extends React.Component {
	constructor() {
		super();
		Modal.setAppElement(Element);
		this.state = { modalIsOpen: false, author: '', preconfig: 'Site Web', resetcss: '', preprocss: '', preprojs: '' };
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.saveSetting = this.saveSetting.bind(this);
	}

	componentWillMount() {
		settings = fs.readFileSync(path + '/settings.json', 'utf-8');
		settings = JSON.parse(settings.toString('utf8').replace(/^\uFEFF/, ''));
		this.setState({
			author: settings.author,
			preconfig: settings.preconfig,
			resetcss: settings.resetcss,
			preprocss: settings.preprocss,
			preprojs: settings.preprojs
		});
	}

	openModal() {
		this.setState({ modalIsOpen: true});
	}

	closeModal() {
		this.setState({ modalIsOpen: false});
	}

	getFormData(el, query) {
		return el.querySelectorAll(query);
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

	saveSetting() {
		var formData = this.getFormData(React.findDOMNode(this.refs.configdefaultform), 'select, input');

		var data = {
			"preconfig": this.getInputValue(formData, 'input-preconfig'),
			"resetcss": this.getInputValue(formData, 'input-resetcss'),
			"preprocss": this.getInputValue(formData, 'input-preprocss'),
			"preprojs": this.getInputValue(formData, 'input-preprojs'),
			"author": this.getInputValue(formData, 'input-author')
		}

		fs.writeFile(path + '/settings.json', JSON.stringify(data), function(err){
			if (err) throw err;

			this.setState({
				author: data.author,
				preconfig: data.preconfig,
				resetcss: data.resetcss,
				preprocss: data.preprocss,
				preprojs: data.preprojs
			});

			this.closeModal();
		}.bind(this));
	}

	render() {
		return (
			<div className="modal" ref="settings">
				<button className='header__button header__button--settings button' onClick={this.openModal}>
					<Icon className='button__icon' size="32" icon="icon-cog" link="images/Icons/svgdefs.svg" />
					<span className='button__label'>Préférences</span>
				</button>
				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
					<div className="wrapper">
						<div className="modal__col">
							<form ref="skeletonform" id="skeletonform">
								<legend className="modal__title">Squelette du projet</legend>
							</form>
						</div>
						<div className="modal__col">
							<form ref="configdefaultform" id="configdefaultform">
								<legend className="modal__title">Configuration par défaut</legend>
									<Input
										className="modal__input input input--select input--6col"
										type="select"
										name="input-preconfig"
										id="input-preconfig"
										required={false}
										label="Pré-configuration"
										default={this.state.preconfig}>
										<option value="Site Web">Site Web</option>
										<option value="Web App">Web App</option>
										<option value="Prototype">Prototype</option>
									</Input>
									<Input
										className="modal__input input input--select input--6col"
										type="select"
										name="input-resetcss"
										id="input-resetcss"
										required={false}
										label="Reset CSS"
										default={this.state.resetcss}>
										<option value="">Aucun</option>
										<option value="reset">Reset</option>
										<option value="normalize">Normalize</option>
									</Input>
									<Input
										className="modal__input input input--select input--6col"
										type="select"
										name="input-preprocss"
										id="input-preprocss"
										required={false}
										label="Préprocesseur CSS"
										default={this.state.preprocss}>
										<option value="">Aucun</option>
										<option value="less">LESS</option>
										<option value="sass">SASS</option>
										<option value="scss">SCSS</option>
										<option value="stylus">Stylus</option>
									</Input>
									<Input
										className="modal__input input input--select input--6col"
										type="select"
										name="input-preprojs"
										id="input-preprojs"
										required={false}
										label="Préprocesseur JS"
										default={this.state.preprojs}>
										<option value="">Aucun</option>
										<option value="coffeescript">CoffeeScript</option>
										<option value="livescript">LiveScript</option>
									</Input>
									<Input
										className="modal__input input input--select input--6col"
										type="modal_author"
										name="input-author"
										id="input-author"
										value={this.state.author}
										required={false}>
										Auteur
									</Input>
							</form>
						</div>
						<button className="modal__button button--save" onClick={this.saveSetting}>Sauvegarder</button>
					</div>
				</Modal>
			</div>
		)
	}
}

SettingsModal.displayName = 'Settings Modals';

export default SettingsModal;
