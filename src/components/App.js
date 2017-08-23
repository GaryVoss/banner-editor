import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/reducers'

import Header from './Header/'
import Desktop from './Desktop/'

let store = createStore(reducers)

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Header />
					<Desktop />
				</div>
			</Provider>
		)
	}
}