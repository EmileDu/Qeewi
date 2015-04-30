import React from 'react';

class Textarea extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isFilled: false };
		this.onChange = this.onChange.bind(this);
	}

	onChange(ev) {
		if (ev.target.value != '') {
			this.setState({ isFilled: true });
		}
	}
	render() {
		var id = this.props.id || "textarea";
		var className = this.props.className || "input";
		var inputClassName = "input__field";
		if(this.state.isFilled)  {
			inputClassName += " input__field--filled";
		};
		return (
			<span className={className}>
				<textarea className={inputClassName} id={id} onChange={this.onChange}></textarea>
				<label className="input__label" htmlFor={id}>
					<span className="input__label__content">{this.props.children}</span>
				</label>
			</span>
		);
	}
}

Textarea.displayName = 'Field';

export default Textarea;
