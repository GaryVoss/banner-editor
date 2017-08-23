import React, { Component } from 'react'

import './styles.scss'

export default class Switch extends Component {
	constructor() {
	    super();
	    this.state = {
			switchVal : false,
	    };
	    this.toggleSwitch = this.toggleSwitch.bind(this);
	}
	toggleSwitch() {
	    this.setState({switchVal: !this.state.switchVal});
	}
	render() {
		return (
			<div className={`switch switch--${this.state.switchVal}`} onClick={this.toggleSwitch}>
				<div className="switch__pin"></div>
				<div className="switch__rail"></div>
			</div>
		)
	}
}