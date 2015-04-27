import React from 'react/addons';

class Icon extends React.Component {
	constructor(props) {
		super(props);
	}

	createMarkup() {
		var iconUrl = this.props.link + '#' + this.props.icon;
		return {__html:'<use xlink:href="'+iconUrl+'"></use>'}
	}

	render() {
		var classes= 'icon ';
		if (this.props.className) {
			classes += this.props.className;
		}
		return (
			<svg className={classes} viewBox="0 0 32 32" dangerouslySetInnerHTML={this.createMarkup()} />
		)
	}
}

Icon.displayName = 'Icon';

export default Icon;
