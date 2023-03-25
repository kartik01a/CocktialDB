import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import '../styles.css'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
function SingleCocktail() {
  const{id} = useParams()
  const [cocktail,setCocktail] = useState(null);
  const [loading,setLoading] = useState(true);

    useEffect(()=>{
      setLoading(true);
      const fetchDa = async ()=>{
        try{
          const response = await fetch(`${url}${id}`)
          const data = await response.json()
        
          if(data.drinks){
            const {
              strDrink:name,
              strDrinkThumb:image,
              strAlcoholic:info,
              strGlass:glass,
              strCategory:category,
              strInstructions:instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5
            } = data.drinks[0]
            console.log(data.drinks)
            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5
            ]
            const newi = {name,image,info,glass,category,instructions,ingredients}
            setCocktail(newi)
            setLoading(false);
          }else{
            setLoading(false);
            setCocktail(null)
          }
        }
        catch(error){
        }
      }
      fetchDa()
    },[id]);
  if(loading) return <h1 className='single-loading'>Loading...</h1>
  if(!cocktail) return <h1>There is no cocktails</h1>
  else{
    const { name,image,info,glass,category,instructions,ingredients } = cocktail
  return (
    <div className='single'>
      <h1 className='single-heading'>{name}</h1>
      <div className='single-container'>
        <img className='single-img' src={image} alt={name}/>
        <div className='single-info'>
          <h3><span className='h3'>Name</span> : {name}</h3>
          <h3><span className='h3'>Category</span> :  {category}</h3>
          <h3><span className='h3'>Info</span> : {info}</h3>
          <h3><span className='h3'>Glass</span> : {glass}</h3>
          <h3><span className='h3'>Instruction</span> :  {instructions}</h3>
          <h3><span className='h3'>Ingredients</span>  : {
            ingredients.map((item,index)=>{
              return item ? <span key={index}>{item}, </span>:null
            })
          }</h3>
        </div>
      </div>
    </div>
  )
  }
}

export default SingleCocktail