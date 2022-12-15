import React from 'react'
import Juegos from '../icons/Juegos';
import Consolas from '../icons/Consolas';
import Accesorios from '../icons/Accesorios';
import './ItemListContainer.css'
const ItemListContainer = () => {
    const categories = [
        {id: 1, name:"Juegos", icon:<Juegos />},
        {id: 2, name:"Consolas", icon:<Consolas />},
        {id: 3, name:"Accesorios", icon:<Accesorios />}
    ];
    console.log({categories})
  return (
    <>
        <ul className='lista_categorias'>
            {categories.map((category, index)=>{
                return <li className='item_categorias'> {category.icon} <a href='#' key={index} id={category.id}>{category.name}</a></li>
            })}
        </ul>
    </>
  )
}

export default ItemListContainer