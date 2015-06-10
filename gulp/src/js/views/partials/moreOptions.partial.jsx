import React from 'react';
import _ from 'lodash';
import fs from 'fs';
import gui from 'nw.gui';
import ClassNames from 'classnames';
import Input from '../../components/input.component.jsx';
import Dropzone from '../../components/dropzone.component.jsx';

var classPanel;
var path = gui.App.dataPath+'/data';
var settings= '';

class MoreOptions extends React.Component {
	constructor(props) {
		super(props);
		this.handleOpenPanel = this.handleOpenPanel.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.selectChange = this.selectChange.bind(this);
		this.state = { isPanelOpen: false, value: null, isFilled: false, preconfig: 'Site Web', resetcss: '', preprocss: '', preprojs: ''  };
	}

	componentWillMount() {
		settings = fs.readFileSync(path + '/settings.json', 'utf-8');
		settings = JSON.parse(settings.toString('utf8').replace(/^\uFEFF/, ''));

		this.setState({
			preconfig: settings.preconfig,
			resetcss: settings.resetcss,
			preprocss: settings.preprocss,
			preprojs: settings.preprojs
		});
	}

	componentDidMount() {
		console.log('watching settings.json');
		fs.watchFile(path + '/settings.json', function(event){
			settings = fs.readFileSync(path + '/settings.json', 'utf-8');
			settings = JSON.parse(settings.toString('utf8').replace(/^\uFEFF/, ''));

			this.setState({
				preconfig: settings.preconfig,
				resetcss: settings.resetcss,
				preprocss: settings.preprocss,
				preprojs: settings.preprojs
			});
		}.bind(this));
	}

	handleOpenPanel() {
		if(this.state.isPanelOpen){
			this.setState({isPanelOpen: false});
		} else {
			this.setState({isPanelOpen: true});
		}
	}

	handleChange(ev) {
		this.setState({ value: ev.target.value });
		if (!_.isEmpty(_.trim(ev.target.value))) {
			this.setState({ isFilled: true });
		} else {
			this.setState({ isFilled: false });
		}
		console.log(ev.target.value);
	}

	render() {
		classPanel = ClassNames('form-panel', {'form-panel--open': this.state.isPanelOpen});

		return (
			<div className={classPanel}>
				<button className="form-panel__button" onClick={this.handleOpenPanel}>Plus d'option</button>
				<fieldset className="form-section" id="moreconfig">
					<div className="row">
						<Input
							className="form-section__input input input--select input--3col"
							type="select"
							name="input-preconfig"
							id="input-preconfig"
							required={false}
							label="Pré-configuration"
							default={this.state.preconfig}
							onInput={this.selectChange}>
							<option value="Site Web">Site Web</option>
							<option value="Web App">Web App</option>
							<option value="Prototype">Prototype</option>
						</Input>
						<Input
							className="form-section__input input input--select input--3col"
							type="select"
							name="input-resetcss"
							id="input-resetcss"
							required={false}
							label="Reset CSS"
							default={this.state.resetcss}
							onInput={this.selectChange}>
							<option value="">Aucun</option>
							<option value="reset">Reset</option>
							<option value="normalize">Normalize</option>
						</Input>
						<Input
							className="form-section__input input input--select input--3col"
							type="select"
							name="input-preprocss"
							id="input-preprocss"
							required={false}
							label="Préprocesseur CSS"
							default={this.state.preprocss}
							onInput={this.selectChange}>
							<option value="">Aucun</option>
							<option value="less">LESS</option>
							<option value="sass">SASS</option>
							<option value="scss">SCSS</option>
							<option value="stylus">Stylus</option>
						</Input>
						<Input
							className="form-section__input input input--select input--3col"
							type="select"
							name="input-preprojs"
							id="input-preprojs"
							required={false}
							label="Préprocesseur JS"
							default={this.state.preprojs}
							onInput={this.selectChange}>
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
							name="input-jsextern"
							id="input-jsextern"
							ref="searchScript"
							value={this.state.value}
							required={false}
							isFilled={this.state.isFilled}
							onInput={this.handleChange}>
							Rechercher en ligne
						</Input>
						<Input
							className="form-section__input input input--dropzone input--6col"
							type="file"
							name="input-jsperso"
							id="input-jsperso"
							accept="image/*"
							required={false}>
							<Dropzone className="input__label__content dropzone">Ressource personnelle</Dropzone>
						</Input>
					</div>
				</fieldset>
			</div>
		);
	}
}

MoreOptions.displayName = 'MoreOptions';

export default MoreOptions;
