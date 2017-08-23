import React, { Component } from 'react'

import './styles.scss'

export default class Preview extends Component {
	constructor() {
	    super();
	    this.state = {
	    };
	}
	render() {
		return (
			<section className="preview">
				<div className={`preview__frame preview__frame--${this.props.size}`}>
					<iframe src="http://bournedigitalstudio.co.uk/projects/warner/banners/76094/campaign/06-preview/template-a/standard-300x250/300x250.html"></iframe>
				</div>
			</section>
		)
	}
}