import React from 'react';
import Icon from './icon.component.jsx';

class DropZone extends React.Component{
	constructor(props) {
		super(props);
		this.state = { isDraging: false }
		this._onDragOver = this._onDragOver.bind(this);
		this._onDragLeave = this._onDragLeave.bind(this);
		this._onDrop = this._onDrop.bind(this);
	}

	_onDragOver(ev) {
		ev.preventDefault();
		// if(!ev.dataTransfer.items[0].webkitGetAsEntry().isDirectory) {
		// 	this.refs.dropzone.refs.instruction.getDOMNode().value = 'Tu dois drop un dossier';
		// }
		this.setState({ isDragging: true });
	}

	_onDragLeave(ev) {
		this.setState({ isDragging: false });
	}

	_onDrop(ev) {
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
			<div className={className} onDragOver={this._onDragOver} onDragLeave={this._onDragLeave} onDrop={this._onDrop}>
				{this.props.children}
			</div>
		)
	}
};

DropZone.displayName = 'Dropzone';

export default DropZone;
