import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'

let store = createStore(reducers)

import './scss/base.scss'

import App from './components/App/'

class Start extends Component {
	render() {
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		)
	}
}

ReactDOM.render(
	<Start/>,
	document.getElementById('root')	
)
