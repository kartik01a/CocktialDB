import React from 'react'
import { useGlobalContext } from '../Context'
import './style.css'


function SearchBar() {
  const search = React.useRef('')
  const{setSearchTerm} = useGlobalContext()
  const handleChange = ()=>{
    setSearchTerm(search.current.value);
  }
  React.useEffect(()=>{
    search.current.focus()
  },[])
  return (
    <section className='search-bar'>
        <h4 className='search-bar-heading'>Search Your Favourite Cocktail</h4>
        <input ref={search} onChange={handleChange}  className='search-bar-input' type="text"></input>
    </section>
  )
}

export default SearchBar