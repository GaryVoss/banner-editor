import React, { Component } from 'react'

import './styles.scss'

import Title from '../Elements/Title/'
import Toolbar from '../Toolbar/'
import Preview from '../Preview/'
import Edit from '../Edit/'

export default class Worktop extends Component {
	constructor() {
	    super();
	    this.state = {
	    };
	}
	render() {
		return (
			<section className="worktop">
				<Title text="2017 Dynamic banners | Template A"/>
				<Toolbar />
				<Preview size="300x250"/>
				<Edit />
			</section>
		)
	}
}