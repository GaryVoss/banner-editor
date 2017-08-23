import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import './styles.scss'

import * as whichTab from '../../actions/action.whichTab'
import * as whichSize from '../../actions/action.whichSize'

import Select from '../Elements/Select/'
import Button from '../Elements/Button/'
import Switch from '../Elements/Switch/'

import { BannerSizes } from '../../data/data.banner-sizes'

class Sidebar extends Component {
	constructor() {
	    super()
	    this.state = {

	    }
	}
	render() {
		const { store, changeTab } = this.props
		return (
			<sidebar className="sidebar">
				<Select options={BannerSizes} hasIcon={'true'} icon={'dims'}/>
				<ul className="sidebar__group">
					<li className="sidebar__item sidebar__item--header">{'Global settings'}</li>
					<li className="sidebar__item sidebar__item--switch">
						<span className="sidebar__item-icon icon--frame-plus"></span>
						{'Extra frame'}
						<Switch/>
					</li>
					<li className="sidebar__item sidebar__item--switch">
						<span className="sidebar__item-icon icon--palette"></span>
						{'Mirror colours'}
						<Switch/>
					</li>
					<li className="sidebar__item sidebar__item--switch">
						<span className="sidebar__item-icon icon--images"></span>
						{'Mirror images'}
						<Switch/>
					</li>
					<li className="sidebar__item sidebar__item--switch">
						<span className="sidebar__item-icon icon--link"></span>
						{'Mirror URL'}
						<Switch/>
					</li>
				</ul>
				<ul  className={`sidebar__group sidebar__group--active-${store.tab}`}>
					<li className="sidebar__item sidebar__item--header">{'Specific content'}</li>
					<li className="sidebar__item sidebar__item--click sidebar__item--colour"
						onClick={changeTab.TabColour}>
						<span className="sidebar__item-icon icon--palette"></span>
						{'Colours'}
					</li>
					<li className="sidebar__item sidebar__item--click sidebar__item--message"
						onClick={changeTab.TabMessage}>
						<span className="sidebar__item-icon icon--txt"></span>
						{'Messages'}
					</li>
					<li className="sidebar__item sidebar__item--click sidebar__item--image"
						onClick={changeTab.TabImage}>
						<span className="sidebar__item-icon icon--images"></span>
						{'Images'}
					</li>
					<li className="sidebar__item sidebar__item--click sidebar__item--url"
						onClick={changeTab.TabURL}>
						<span className="sidebar__item-icon icon--link"></span>
						{'URL'}
					</li>
				</ul>
				<div className="sidebar__button">
					<Button type="submit" text="Save" hasIcon="true" icon="save" modify="button--full"/>
				</div>
				<div className="sidebar__button">
					<Button type="submit" text="Save and submit" hasIcon="true" icon="send" modify="button--full"/>
				</div>
			</sidebar>
		)
	}
}

export default connect(store => (
	{
		store: store
	}),
	(dispatch) => ({
		changeTab: bindActionCreators(whichTab, dispatch),
	})
)(Sidebar);