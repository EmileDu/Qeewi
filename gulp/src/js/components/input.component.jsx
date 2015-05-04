import React from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isFilled: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(ev) {
		if (!_.isEmpty(_.trim(ev.target.value))) {
			console.log(!_.isEmpty(_.trim(ev.target.value)));
			this.setState({ isFilled: true });
		}
	}

	render() {
		var id = this.props.id || "input-"+this.props.type;
		var className = ClassNames(this.props.className);
		var inputClassName = ClassNames('input__field', {'input__field--filled': this.state.isFilled});

		var field = [];
		var input = [];

		switch (this.props.type) {
			case 'checkbox':
				input.push(
					<input
						type={this.props.type}
						name={this.props.name}
						value={this.props.value}
						className={inputClassName}
						id={id}
						ref={id}/>
				);
				break;
			case 'radio':
				input.push(
					<input
						type={this.props.type}
						name={this.props.name}
						value={this.props.value}
						className={inputClassName}
						id={id}
						ref={id}/>
				);
				break;
			case 'file':
				input.push(
					<input
						type={this.props.type}
						name={this.props.name}
						className={inputClassName}
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
						className={inputClassName}
						id={id}
						ref={id}
						required={this.props.required}
						onInput={this.handleChange}/>
				);
				break;
			case 'textarea':
				input.push(
					<textarea
						className={inputClassName}
						id={id}
						ref={id}
						required={this.props.required}
						onInput={this.handleChange}>
					</textarea>
				);
				break;
			case 'search':
				break;
			default:
				input.push(
					<input
						type={this.props.type}
						className={inputClassName}
						id={id}
						ref={id}
						required={this.props.required}
						onInput={this.handleChange} />
					);
				break;
		};

		switch (this.props.type) {
			case 'file':
				field.push(
						{input},
						<label className="input__label" htmlFor={id}>{this.props.children}</label>
				);
				break;
			default:
				field.push(
						{input},
						<label className="input__label" htmlFor={id}>
							<span className="input__label__content">{this.props.children}</span>
						</label>
				);
				break;
		};

		return (
			<div className={className}>
				{field}
			</div>
		);
	}
}

Input.displayName = 'Input';

export default Input;
