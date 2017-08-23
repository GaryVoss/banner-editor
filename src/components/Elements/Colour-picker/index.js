import React, { Component } from 'react';

import './styles.scss'

import ColourWheel from '../../../imgs/icons/colour-wheel.svg'

import { BrandColours } from '../../../data/data.brand-colours'

export default class ColourPicker extends Component {
	constructor() {
	    super();
	    this.state = {
			chosenColour: '#68A042',
			drop : false,
	    }
	    this.toggleDrop = this.toggleDrop.bind(this)
	}
	setColour(hex) {
		this.setState({chosenColour: hex})
		this.setState({drop: !this.state.drop})
	}
	toggleDrop() {
	    this.setState({drop: !this.state.drop})
	}
	render() {
		return (
			<div className="colour-picker">
				<p className="colour-picker__desc">{this.props.desc}</p>
				<div 
					className="colour-picker__swatch"
					style={{background:this.state.chosenColour}}
					onClick={this.toggleDrop}>{'-'}</div>
				<div className="colour-picker__input" onClick={this.toggleDrop}>
					<input type="text" placeholder="#" value={this.state.chosenColour} readOnly/>
					<img className="colour-picker__icon" src={ColourWheel} alt=""/>
				</div>
				<ul className={`colour-picker__drop colour-picker__drop--open-${this.state.drop}`}>
					{
						BrandColours.map((colour) =>
							<li 
								className="colour-picker__drop-swatch" 
								title={colour.name}
								key={`colour-${colour.key}`}
								style={{background:colour.hex}}
								onClick={() => this.setColour(colour.hex)}>
							</li>
						)
					}
				</ul>
			</div>
		)
	}
}