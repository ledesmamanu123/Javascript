import React from 'react'
const ItemList = ({items}) => {
  console.log({items})
  return (
    <>
    {items.map((item ,index)=>{
      return <div className='CardContainer' key={index}>
                <h3>{item.title}</h3>
                <img src={item.imgUrl} alt={items.title} />
                <p>{item.stock}</p>
              </div>
    })}
    </>
  )
}

export default ItemList