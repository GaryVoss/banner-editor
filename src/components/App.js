import React, { Component } from 'react'

import Header from './Header/'
import Desktop from './Desktop/'

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Desktop />
			</div>
		)
	}
}