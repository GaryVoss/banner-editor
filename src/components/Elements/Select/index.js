import React, { Component } from 'react'

import './styles.scss'

export default class Select extends Component {
	constructor() {
	    super()
	    this.state = {
			value: ''
	    }
	    this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	render() {
		const selectOptions = this.props.options.map((option) =>
			<option value={option.key} key={`option-${option.key}`}>{option.name}</option>
		)
		return (
			<div className={`select select--icon-${this.props.hasIcon}`}>
				<span className={`select__icon icon--${this.props.icon}`}></span>
				<select className="select__value" 
						value={this.state.value} 
						onChange={this.handleChange}>{selectOptions}</select>
				<span className="select__arrow icon--arrow-down"></span>
			</div>
		)
	}
}