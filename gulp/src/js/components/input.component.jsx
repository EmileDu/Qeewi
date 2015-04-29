import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var type = this.props.type || "text";
		var id = this.props.id || "input";
		var className = this.props.className || "input";
		return (
			<span className={className}>
				<input className="input__field" type={type} id={id}/>
				<label className="input__label" htmlFor={id}>
					<span className="input__label__content">{this.props.children}</span>
				</label>
			</span>
		);
	}
}

Input.displayName = 'Input';

export default Input;
