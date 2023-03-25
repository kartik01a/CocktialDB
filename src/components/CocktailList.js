import React from 'react'
import { useGlobalContext } from '../Context'
import Cocktail from './Cocktail.js';
import Loading from './Loading.js'
import './style.css'

function CocktailList() {
    const {cocktailList, loading} = useGlobalContext();
    if(loading) return <Loading />
    if(cocktailList.length < 1) return (<h1 className='empty'>No Cocktail of this name.</h1>)
  return (
    <div className='list'>
        {
          cocktailList.map((item)=>(
            <Cocktail key={item.id} {...item} />
          ))
        }
    </div>
  )
}

export default CocktailList