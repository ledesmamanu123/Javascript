import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
        <img src={item.img} alt={item.name} />
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
        <span>{item.price}</span>
    </div>
  )
}

export default ItemDetail