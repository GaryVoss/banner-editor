import React from 'react'

import './styles.scss'

export default function Icon(props) {
	return (
		<span className={`icon icon--${props.value}`}></span>
	)
}