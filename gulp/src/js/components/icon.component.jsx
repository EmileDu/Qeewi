import React from 'react/addons';
import ClassNames from 'classnames';

class Icon extends React.Component {
	constructor(props) {
		super(props);
	}

	createMarkup() {
		var iconUrl = this.props.link + '#' + this.props.icon;
		return {__html:'<use xlink:href="'+iconUrl+'"></use>'}
	}

	render() {
		var className = classNames(this.props.className);
		return (
			<svg className={className} viewBox="0 0 32 32" dangerouslySetInnerHTML={this.createMarkup()} />
		)
	}
}

Icon.displayName = 'Icon';

export default Icon;
