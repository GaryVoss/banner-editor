import React, { Component } from 'react'

import './styles.scss'

export default class Title extends Component {
	render() {
		const { text } = this.props
		return (
			<p className="title">{text}</p>
		)
	}
}