import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchBar from '../components/SearchBar'
import '../styles.css'

function Home() {
  return (
    <div className='home'>
      <div className='home-search'>
        <SearchBar/>
      </div>
        <CocktailList/>
    </div>
  )
}

export default Home