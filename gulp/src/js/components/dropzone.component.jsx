import React from 'react';
import Icon from './icon.component.jsx';
import ClassNames from 'classnames';

class DropZone extends React.Component{
	constructor(props) {
		super(props);
		this.state = {isDraging: props.isDraging || false, path: props.path || undefined};
		this.handleDragOver = this.handleDragOver.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
	}

	handleDragOver(ev) {
		ev.preventDefault();
		// if(!ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
		// 	this.refs.dropzone.refs.instruction.getDOMNode().value = 'Tu dois drop un dossier';
		// }
		this.setState({ isDraging: true });
	}

	handleDragLeave(ev) {
		this.setState({ isDraging: false });
	}

	handleDrop(ev) {
		console.log('coucou');
		ev.preventDefault();
		if (ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
			this.setState({ path: ev.dataTransfer.files[0].path});
		}
		this.setState({ isDraging: false });
	}

	render() {
		var className = ClassNames(this.props.className, {'dropzone--active': this.state.isDraging});
		return (
			<div className={className}
				onDragOver={this.props.onDragOver || this.handleDragOver}
				onDragLeave={this.props.onDragLeave || this.handleDragLeave}
				onDrop={this.props.onDrop || this.handleDrop}>
				{this.props.children}
			</div>
		)
	}
};

DropZone.displayName = 'Dropzone';

export default DropZone;
