import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import './styles.scss'

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
		const { store, changeSize } = this.props
		return (
			<div className="banner-select" onClick={this.toggleDrop}>
				<span className={`banner-select__icon icon--dims`}></span>
				<p className="banner-select__value">{store.bnrSize}</p>
				<ul className={`banner-select__drop  banner-select__drop--open-${this.state.drop}`}>
					<li onClick={changeSize.Bnr120x600} className="banner-select__drop-item">{'120x600'}</li>
					<li onClick={changeSize.Bnr160x600} className="banner-select__drop-item">{'160x600'}</li>
					<li onClick={changeSize.Bnr300x600} className="banner-select__drop-item">{'300x600'}</li>
					<li onClick={changeSize.Bnr300x250} className="banner-select__drop-item">{'300x250'}</li>
					<li onClick={changeSize.Bnr250x250} className="banner-select__drop-item">{'250x250'}</li>
					<li onClick={changeSize.Bnr200x200} className="banner-select__drop-item">{'200x200'}</li>
					<li onClick={changeSize.Bnr970x250} className="banner-select__drop-item">{'970x250'}</li>
					<li onClick={changeSize.Bnr728x90} className="banner-select__drop-item">{'728x90'}</li>
					<li onClick={changeSize.Bnr468x60} className="banner-select__drop-item">{'468x60'}</li>
				</ul>
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