import React from 'react'
import '../styles.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <nav>
          <Link className='nav-header' to="/" >
              <h1>CocktailDB</h1>
          </Link>
        </nav>
        <div className='nav-link'>
          <Link className='nav-items' to="/" >
            <h3>Home</h3>
          </Link>
          <Link className='nav-items' to="/About" >
            <h3>About</h3>
          </Link>
        </div>
    </div>
  )
}

export default Navbar