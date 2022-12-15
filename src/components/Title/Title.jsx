import React from 'react'
import './Title.css'
import Playz from '../icons/Playz'
const Title = ({name}) => {
  return (
    <div className='container_titulo'>
        <Playz />
        <h1 className='titulos'>{name}</h1>
    </div>
  )
}

export default Title