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
		console.log(ev);
		this.setState({ isDragging: true });
	}

	onDragLeave(ev) {
		this.setState({ isDragging: false });
	}

	onDrop(ev) {
		ev.preventDefault();
		console.log(ev);
		this.setState({ isDragging: false });
	}

	render() {
		var className = this.props.className || 'dropzone';
		if (this.state.isDragging) { className += 'active' };

		return (
			<div className={className} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave}>
				{this.props.children}
			</div>
		)
	}
};

DropZone.displayName = 'Dropzone';

export default DropZone;
