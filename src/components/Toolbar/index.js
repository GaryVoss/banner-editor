import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

import Icon from '../Elements/Icon/'

class Toolbar extends Component {
	constructor() {
	    super()
	    this.state = {
	    }
	}
	render() {
		const { store } = this.props
		return (
			<div className="toolbar">
				<p className="toolbar__text">{store.bnrSize}</p>
				<Icon value="frame-1"/>
				<Icon value="frame-2"/>
				<Icon value="frame-3"/>
				<Icon value="frame-4"/>
				<Icon value="replay"/>
			</div>
		)
	}
}

export default connect(store => (
	{
		store: store
	})
)(Toolbar)