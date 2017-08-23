import React, { Component } from 'react'

import './styles.scss'

import Icon from '../Elements/Icon/'

export default class Toolbar extends Component {
	constructor() {
	    super();
	    this.state = {
	    };
	}
	render() {
		return (
			<div className="toolbar">
				<Icon value="frame-1"/>
				<Icon value="frame-2"/>
				<Icon value="frame-3"/>
				<Icon value="frame-4"/>
				<Icon value="replay"/>
			</div>
		)
	}
}