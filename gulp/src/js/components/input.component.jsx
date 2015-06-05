import React from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';

var id;
var className;
var classInput;
var input;
var field;
var value;

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '', isFilled: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(ev) {
		this.setState({ value: ev.target.value });
		if (!_.isEmpty(_.trim(ev.target.value))) {
			this.setState({ isFilled: true });
		}
	}

	getInputType(type){
		var input = [];
		switch (type) {
			case 'select':
				input.push(
					<select
						key={id}
						name={this.props.name}
						value={this.props.defaultVal}
						className="input__field"
						id={id}
						ref={id}>
						{this.props.children}
					</select>
				);
				break;
			case 'file':
				input.push(
					<input
						key={id}
						type={this.props.type}
						name={this.props.name}
						className={classInput}
						id={id}
						ref={id}
						required={this.props.required}
						accept={this.props.accept}
						onInput={this.handleChange} />
				);
				break;
			case 'text':
				input.push(
					<input
						type={this.props.type}
						className={classInput}
						id={id}
						name={this.props.name}
						ref={id}
						value={value}
						required={this.props.required}
						onChange={this.handleChange}/>
				);
				break;
			case 'textarea':
				input.push(
					<textarea
						key={id}
						className={classInput}
						id={id}
						name={this.props.name}
						ref={id}
						value={value}
						required={this.props.required}
						onInput={this.handleChange}/>
				);
				break;
			case 'search':
				break;
			default:
				input.push(
					<input
						key={id}
						type={this.props.type}
						className={classInput}
						id={id}
						ref={id}
						value={value}
						required={this.props.required}
						onInput={this.handleChange} />
				);
				break;
		}
		return input;
	}

	getFieldMarkup(type) {
		var field = [];
		switch (type) {
			case 'file':
				field.push(
						{input},
						<label
							key={id}
							className="input__label"
							htmlFor={id}>
							{this.props.children}
						</label>
				);
				break;
			case 'select':
				field.push(
					{input}
				);
				break;
			default:
				field.push(
						{input},
						<label
							key={id}
							className="input__label"
							htmlFor={id}>
							<span className="input__label__content">{this.props.children}</span>
						</label>
				);
				break;
		}
		return field;
	}

	render() {
		id = this.props.id || "input-"+this.props.type;
		className = ClassNames(this.props.className);
		classInput = ClassNames('input__field', {'input__field--filled': this.state.isFilled})
		value = this.state.value;
		input = this.getInputType(this.props.type);
		field = this.getFieldMarkup(this.props.type);

		return (
			<div className={className}>
				{field}
			</div>
		);
	}
}

Input.displayName = 'Input';

export default Input;
