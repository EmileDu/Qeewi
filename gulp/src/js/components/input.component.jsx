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
		var type = this.props.type || "text";
		var id = this.props.id || "input";
		var className = this.props.className || "input";
		var inputClassName = "input__field";
		if(this.state.isFilled)  {
			inputClassName += " input__field--filled";
		};
		return (
			<span className={className}>
				<input className={inputClassName} type={type} id={id} onChange={this.onChange}/>
				<label className="input__label" htmlFor={id}>
					<span className="input__label__content">{this.props.children}</span>
				</label>
			</span>
		);
	}
}

Input.displayName = 'Input';

export default Input;
