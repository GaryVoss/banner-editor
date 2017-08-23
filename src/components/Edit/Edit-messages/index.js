import React, { Component } from 'react'

import InputField from '../../Elements/Input-field/'

export default class EditMessages extends Component {
	constructor() {
	    super();
	    this.state = {
		    
	    };
	}
	render() {
		return (
			<div className="edit__group-input">
				<InputField type="text" desc="Message 1" placeholder="T..."/>
				<InputField type="text" desc="Message 2" placeholder="T..."/>
			</div>
		)
	}
}