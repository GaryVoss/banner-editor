import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

import EditColours from './Edit-colours/'
import EditMessages from './Edit-messages/'
import EditImages from './Edit-images/'
import EditUrl from './Edit-url/'

class Edit extends Component {
	constructor() {
	    super()
	    this.state = {
		    
	    }
	}
	render() {
		const { store } = this.props
		let output = ''
		if(store.tab === 'colour') {
			output = <EditColours/>
		}
		else if(store.tab === 'message') {
			output = <EditMessages/>
		}
		else if(store.tab === 'image') {
			output = <EditImages/>
		}
		else if(store.tab === 'url') {
			output = <EditUrl/>
		}
		return (
			<div className="edit">
				<div>{output}</div>
			</div>
		)
	}
}

export default connect(store => (
	{
		store: store
	})
)(Edit)