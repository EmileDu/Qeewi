import React from 'react';

class Icon extends React.Component {
	constructor(props) {
		super(props);
	}

	createMarkup() {
		var iconUrl = this.props.link + '#' + this.props.icon;
		return {__html:'<use xlink:href="'+iconUrl+'"></use>'}
	}

	render() {
		return (
			<svg className="button__icon icon" viewBox="0 0 32 32" dangerouslySetInnerHTML={this.createMarkup()} />
		)
	}
}

Icon.displayName = 'Icon';

export default Icon;
