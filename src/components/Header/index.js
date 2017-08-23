import React, { Component } from 'react'

import './styles.scss'

import Button from '../Elements/Button/'
import Logo from '../../imgs/logos/studio-logo.svg'

export default class Header extends Component {
	constructor() {
	    super();
	    this.state = {
	        userColor : "flame-pea",
			userInitial : "G",
			userName : "Gary Voss",
			userEmail : "gary.voss@bourne-leisure.co.uk",
			drop : false,
	    }
	    this.toggleDrop = this.toggleDrop.bind(this)
	}
	toggleDrop() {
	    this.setState({drop: !this.state.drop})
	}
	render() {
		return (
			<header className="header">
				<img src={Logo} alt="Studio" className="header__logo" />
				<div className="header__tools">
					<div 
						className={`header__user header__user--${this.state.userColor} header__user--open-${this.state.drop}`}
						onClick={this.toggleDrop}>
						<p>{this.state.userInitial}</p>
					</div>
				</div>
				<div className={`header__drop header__drop--open-${this.state.drop}`}>
					<p className="header__drop-item">{this.state.userName}</p>
					<p className="header__drop-item">{this.state.userEmail}</p>
					<Button type="submit" text="Sign out" hasIcon="false" icon="" modify=""/>
				</div>
			</header>
		)
	}
}