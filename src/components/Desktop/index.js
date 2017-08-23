import React, { Component } from 'react'

import './styles.scss'

import Sidebar from '../Sidebar/'
import Worktop from '../Worktop/'

export default class Desktop extends Component {
	render() {
		return (
			<main className="desktop">
				<Sidebar/>
				<Worktop/>
			</main>
		)
	}
}