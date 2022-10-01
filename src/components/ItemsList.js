import React from 'react'
import '../style.css'
import Item from './Item'

const ItemsList = ({ items }) => {
  return (
    <div id='items-list'>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemsList