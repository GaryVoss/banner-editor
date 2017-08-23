import React, { Component } from 'react'

import InputField from '../../Elements/Input-field/'

export default class EditUrl extends Component {
	constructor() {
	    super();
	    this.state = {
		    
	    };
	}
	render() {
		return (
			<div className="edit__group-input">
				<InputField type="text" desc="URL 1" placeholder="http://"/>
			</div>
		)
	}
}