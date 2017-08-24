import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import './styles.scss'

import { BannerSizes } from '../../../data/data.banner-sizes'
import * as whichSize from '../../../actions/action.whichSize'

class BannerSelect extends Component {
	constructor() {
	    super()
	    this.state = {
			drop : false,
	    }
		this.toggleDrop = this.toggleDrop.bind(this)
	}
	toggleDrop() {
	    this.setState({drop: !this.state.drop})
	}
	render() {
		const { store, changeTab } = this.props
		const selectOptions = BannerSizes.map((option) =>
			<li className="banner-select__drop-item" key={`option-${option.key}`}>{option.name}</li>
		)
		return (
			<div className="banner-select" onClick={this.toggleDrop}>
				<span className={`banner-select__icon icon--dims`}></span>
				<p className="banner-select__value">{store.bnrSize}</p>
				<ul className={`banner-select__drop  banner-select__drop--open-${this.state.drop}`}>{selectOptions}</ul>
				<span className="banner-select__arrow icon--arrow-down"></span>
			</div>
		)
	}
}

export default connect(store => (
	{
		store: store
	}),
	(dispatch) => ({
		changeSize: bindActionCreators(whichSize, dispatch),
	})
)(BannerSelect)