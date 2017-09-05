import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

import Title from '../Elements/Title/'
import Toolbar from '../Toolbar/'
import Preview from '../Preview/'
import Edit from '../Edit/'

class Worktop extends Component {
	constructor() {
	    super()
	    this.state = {
	    }
	}
	render() {
		const { store } = this.props
		return (
			<section className="worktop">
				<Title text="2017 Dynamic banners | Template A"/>
				<Toolbar />
				<Preview size={store.bnrSize}/>
				<Edit />
			</section>
		)
	}
}

export default connect(store => (
	{
		store: store
	})
)(Worktop)