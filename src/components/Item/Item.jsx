import React from 'react'

const Item = (props, {key}) => {
  console.log(props)
  return (
    <>
      <div className='CardContainer' key={key} id = {props.id}>
        <div>
          <img src={props.imgUrl} alt={props.title} />
          <h3>{props.title}</h3>
        </div>
        <div>
          <p>{props.stock}</p>
          <span>$ {props.price}</span>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default Item