import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
const stock = 10;
const ItemCount = () => {
    const [contador, setContador] = useState(0);
  return (
    <div className='itemCountContainer'>
      <div className='itemsCountContainer'>
          <button className='btn_menos' onClick={()=>{
              contador > 0 ? setContador(contador - 1): setContador(contador) }}
              >-</button>
          <span>{contador}</span>
          <button className='btn_mas' onClick={()=>{
              contador < stock ? setContador(contador + 1):  setContador(contador)}}
              >+</button>
      </div>
      <button className='btnAgregar' onClick={()=>{setContador(0)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount