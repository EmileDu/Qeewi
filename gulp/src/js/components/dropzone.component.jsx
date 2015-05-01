import React from 'react';
import Icon from './icon.component.jsx';

class DropZone extends React.Component{
	constructor(props) {
		super(props);
		this.state = { isDraging: false }
		this.onDragOver = this.onDragOver.bind(this);
		this.onDragLeave = this.onDragLeave.bind(this);
		this.onDrop = this.onDrop.bind(this);
	}

	onDragOver(ev) {
		ev.preventDefault();
		// if(!ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
		// 	this.refs.dropzone.refs.instruction.getDOMNode().value = 'Tu dois drop un dossier';
		// }
		this.setState({ isDragging: true });
	}

	onDragLeave(ev) {
		this.setState({ isDragging: false });
	}

	onDrop(ev) {
		ev.preventDefault();
		if (ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
			console.log(ev.dataTransfer.files[0].path);
		}
		this.setState({ isDragging: false });
	}

	render() {
		var className = this.props.className || 'dropzone';
		if (this.state.isDragging) { className += ' dropzone--active' };

		return (
			<div className={className} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop} ref="dropzone">
				{this.props.children}
			</div>
		)
	}
};

DropZone.displayName = 'Dropzone';

export default DropZone;
