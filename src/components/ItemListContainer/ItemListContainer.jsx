import React from 'react'
import Juegos from '../icons/Juegos';
import Consolas from '../icons/Consolas';
import Accesorios from '../icons/Accesorios';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import Item from '../Item/Item';
const ItemListContainer = () => {
    const categories = [
        {id: 1, name:"Juegos", icon:<Juegos />},
        {id: 2, name:"Consolas", icon:<Consolas />},
        {id: 3, name:"Accesorios", icon:<Accesorios />}
    ];
    const products = [
        {id: 1, title:"Playstation 2", price:800 , description:" segunda consola de videojuegos de Sony", stock: 5, imgUrl:"../#"},
        {id: 2, title:"Playstation 3", price:1000 , description:"tercera consola de videojuegos de Sony", stock: 10, imgUrl:"../#"},
        {id: 3, title:"Playstation 4", price:1200 , description:"cuarta consola de videojuegos de Sony", stock: 15, imgUrl:"../#"}
    ];
    console.log({categories})

    //Creamos la promise
    const getProducts = new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(products)
        },2000)
    })
    //Creamos la funcion de resuelto
    function isResolved (resolve){
        <>
        <ItemList items={resolve} />
        </>
    }
    //Le decimos a la promise que ejecute la funcion
    getProducts.then(isResolved, "Esto es un error")
  return (
    <>
        <ul className='lista_categorias'>
            {categories.map((category, index)=>{
                return <li className='item_categorias'> {category.icon} <a href='#' key={index} id={category.id}>{category.name}</a></li>
            })}
        </ul>
        <Item />
    </>
  )
}

export default ItemListContainer