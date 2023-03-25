import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Cocktail({image,id,name,info,glass}) {
  return (
    <div className='container'>
        <div >
            <img className='image' src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <h4>{info}</h4>
        <Link className='details' to={`/cocktail/${id}`}>Details</Link>
    </div>
  )
}

export default Cocktail