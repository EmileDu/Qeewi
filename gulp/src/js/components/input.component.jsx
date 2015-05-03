import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isFilled: false };
		this.onChange = this.onChange.bind(this);
	}

	onChange(ev) {
		console.log(ev.target.value);
		if (ev.target.value !== '') {
			this.setState({ isFilled: true });
		}
	}

	render() {
		var id = this.props.id || "input-"+this.props.type;
		var className = this.props.className || "input";

		var inputClassName = "input__field";
		if(this.state.isFilled)  {
			inputClassName += " input__field--filled";
		};

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
						id={id} />
				);
				break;
			case 'radio':
				input.push(
					<input
						type={this.props.type}
						name={this.props.name}
						value={this.props.value}
						className={inputClassName}
						id={id} />
				);
				break;
			case 'file':
				input.push(
					<input
						type={this.props.type}
						name={this.props.name}
						className={inputClassName}
						id={id}
						required={this.props.required}
						accept={this.props.accept}
						onChange={this.onChange} />
				);
				break;
			case 'text':
				input.push(
					<input
						type={this.props.type}
						className={inputClassName} id={id}
						required={this.props.required}
						onChange={this.onChange} />
				);
				break;
			case 'textarea':
				input.push(
					<textarea
						className={inputClassName}
						id={id}
						required={this.props.required}
						onChange={this.onChange}>
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
						required={this.props.required}
						onChange={this.onChange} />
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
