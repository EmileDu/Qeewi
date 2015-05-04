import React from 'react';
import Icon from './icon.component.jsx';
import classNames from 'classnames';

class DropZone extends React.Component{
	constructor(props) {
		super(props);
		this.state = { isDraging: false }
		this.handleDragOver = this.handleDragOver.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
	}

	handleDragOver(ev) {
		ev.preventDefault();
		// if(!ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
		// 	this.refs.dropzone.refs.instruction.getDOMNode().value = 'Tu dois drop un dossier';
		// }
		this.setState({ isDragging: true });
	}

	handleDragLeave(ev) {
		this.setState({ isDragging: false });
	}

	handleDrop(ev) {
		ev.preventDefault();
		if (ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
			console.log(ev.dataTransfer.files[0].path);
		}
		this.setState({ isDragging: false });
	}

	render() {
		var className = classNames(this.props.className);
		if (this.state.isDragging) { className += ' dropzone--active' };

		return (
			<div className={className} onDragOver={this.handleDragOver} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop}>
				{this.props.children}
			</div>
		)
	}
};

DropZone.displayName = 'Dropzone';

export default DropZone;
