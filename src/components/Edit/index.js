import React, { Component } from 'react'

import './styles.scss'

import InputField from '../Elements/Input-field/'
import SelectField from '../Elements/Select-field/'
import ColourPicker from '../Elements/Colour-picker/'

import { BrandLogos } from '../../data/data.brand-logos.js'

export default class Edit extends Component {
	constructor() {
	    super();
	    this.state = {
		    
	    };
	}
	render() {
		return (
			<div className="edit">
				<div className="edit__group-input">
					<InputField type="text" desc="Message 1"/>
					<InputField type="text" desc="Message 2"/>
				</div>
				<div className="edit__group-colour">
					<ColourPicker desc="Colour 1"/>
					<ColourPicker desc="Colour 2"/>
					<ColourPicker desc="Colour 3"/>
					<ColourPicker desc="Colour 4"/>
				</div>
				<div className="edit__group-input">
					<SelectField options={BrandLogos} desc="Select 1"/>
				</div>
			</div>
		)
	}
}