import React from 'react'

import './styles.scss'

export default function Select(props) {
	const selectOptions = props.options.map((option) =>
		<option key={`option-${option.key}`}>{option.name}</option>
	)
	return (
		<div className={`select select--icon-${props.hasIcon}`}>
			<span className={`select__icon icon--${props.icon}`}></span>
			<select className="select__value">{selectOptions}</select>
			<span className="select__arrow icon--arrow-down"></span>
		</div>
	)
}