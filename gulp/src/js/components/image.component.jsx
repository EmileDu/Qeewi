import React from 'react/addons';
import ClassNames from 'classnames';
import _ from 'lodash';

class Image extends React.Component {
	constructor(props) {
		super(props);
	}

	srcSet(option, file, format) {
		var srcset = _.map(option, function(opt){
			return file+'_'+opt+'.'+format+' '+opt;
		});
		return _(srcset).toString();
	}

	render() {
		var src = this.props.file + '_1x.' + this.props.format;
		return (
			<img 	className={ClassNames(this.props.className)}
						alt={this.props.alt}
						width={this.props.width}
						height={this.props.height}
						src={src}
						srcSet={this.srcSet(this.props.responsiveOption, this.props.file, this.props.format)}/>
		)
	}
}

Image.displayName = 'Image';

export default Image;
