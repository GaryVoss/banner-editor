import React, { Component } from 'react'

import InputField from '../../Elements/Input-field/'
import SelectField from '../../Elements/Select-field/'

import { BrandLogos } from '../../../data/data.brand-logos'

export default class EditImages extends Component {
	constructor() {
	    super();
	    this.state = {
		    
	    };
	}
	render() {
		return (
			<div>
				<div className="edit__group-input">
					<SelectField options={BrandLogos} desc="Select 1"/>
				</div>
				<div className="edit__group-input">
					<InputField type="text" desc="Image 1" placeholder="T..."/>
					<InputField type="text" desc="Image 2" placeholder="T..."/>
				</div>
			</div>
		)
	}
}