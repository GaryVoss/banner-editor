import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from '../Login/'
import Header from '../Header/'
import Desktop from '../Desktop/'

import './styles.scss'

class App extends Component {
	constructor() {
		super();
		this.state = {
		}
	}
	render() {
		const { store } = this.props
		return (
			<div className={`app app--login-${store.loggedIn}`}>
				<div className="app__login">
					<Login />
				</div>
				<div className="app__interface">
					<Header />
					<Desktop />
				</div>
			</div>
		)
	}
}

export default connect(store => (
	{
		store: store
	})
)(App)