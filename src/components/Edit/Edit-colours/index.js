import React, { Component } from 'react'

import ColourPicker from '../../Elements/Colour-picker/'

export default class EditColours extends Component {
	constructor() {
	    super();
	    this.state = {
		    
	    };
	}
	render() {
		return (
			<div className="edit__group-colour">
				<ColourPicker desc="Colour 1"/>
				<ColourPicker desc="Colour 2"/>
				<ColourPicker desc="Colour 3"/>
				<ColourPicker desc="Colour 4"/>
			</div>
		)
	}
}