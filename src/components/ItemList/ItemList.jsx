import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
        console.log({items})
  return (
    <>
    {items.map((item, index)=>{
        return <Item
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            desc={item.description}
            stock={item.stock}
            imgUrl={item.imgUrl}
        />
    })}
    </>
  )
}

export default ItemList