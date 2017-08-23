import React from 'react'

import './styles.scss'

export default function SelectField(props) {
	const selectOptions = props.options.map((option) =>
		<option key={`option-${option.key}`}>{option.name}</option>
	)
	return (
		<div className="select-field">
			<p className="select-field__desc">{props.desc}</p>
			<div className="select-field__select">
				<select className="select-field__value">{selectOptions}</select>
				<span className="select-field__arrow icon--arrow-down"></span>
			</div>
		</div>
	)
}