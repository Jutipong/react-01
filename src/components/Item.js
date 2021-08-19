import React from 'react'
import './Item.css'

function Item(prop) {
	const { id, title, amount } = prop
	return (
		<li>{title}<span>{amount}</span></li>
	);
}

export default Item
