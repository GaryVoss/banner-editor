import React from 'react'

import './styles.scss'

export default function InputField(props) {
	return (
		<div className="input-field">
			<p className="input-field__desc">{props.desc}</p>
			<div className="input-field__input">
				<input type={props.type}/>
			</div>
		</div>
	)
}