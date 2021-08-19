import React from 'react'
import Item from './Item'
import './Transaction.css'

function Transaction(prop) {
	const { items } = prop
	return (
		<div className="item-list">
			{items.map((el) => {
				return <Item {...el} key={el.id} />
			})}

		</div>
	)
}

export default Transaction