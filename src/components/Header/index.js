import React, { Component } from 'react'
import * as firebase from 'firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loggedIn from '../../actions/action.loggedIn'

import './styles.scss'

import Button from '../Elements/Button/'
import Logo from '../../imgs/logos/studio-logo.svg'

class Header extends Component {
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
	signOutUser() {
		firebase.auth().signOut()
		this.props.changeLogin.LoggedInFalse()
		console.log('sign out')
		console.log(this.props.store.loggedIn)
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
					<Button type="submit" event={() => this.signOutUser()} text="Sign out" hasIcon="false" icon="" modify=""/>
				</div>
			</header>
		)
	}
}

export default connect(store => (
	{
		store: store
	}),
	(dispatch) => ({
		changeLogin: bindActionCreators(loggedIn, dispatch),
	})
)(Header);