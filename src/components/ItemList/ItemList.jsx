import React from 'react'
import Item from '../Item/Item'
const ItemList = ({items}) => {
  return (
    <>
      {items.map((item, index)=>{ return <Item 
      key = {index}
      id = {item.id}
      title = {item.title}
      img = {item.imgUrl}
      price = {item.price}
      description = {item.description}
      stock = {item.stock} />
    })}</>
  )
}

export default ItemList