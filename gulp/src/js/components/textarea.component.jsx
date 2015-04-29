import React from 'react';

class Textarea extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var id = this.props.id || "textarea";
		var className = this.props.className || "input";

		return (
			<span className={className}>
				<textarea className="input__field" id={id}></textarea>
				<label className="input__label" htmlFor={id}>
					<span className="input__label__content">{this.props.children}</span>
				</label>
			</span>
		);
	}
}

Textarea.displayName = 'Field';

export default Textarea;
