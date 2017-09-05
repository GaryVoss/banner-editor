import React from 'react'

import './styles.scss'

export default function Button(props) {
	return (
		<button className={`button button--${props.type} button--icon-${props.hasIcon} ${props.modify}`} onClick={props.event}>
			<span className={`button__icon icon--${props.icon}`}></span>
			<p className="button__text">{props.text}</p>
		</button>
	)
}