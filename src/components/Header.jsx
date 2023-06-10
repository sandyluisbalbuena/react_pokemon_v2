import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
	<header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img
              src="src/assets/images/brand/pokemonBrandName.png"
              height="30"
              alt="Pokemon"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='nav-link'>Pokedex</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className='nav-link'>Pokecard</Link>
            </li>
          </ul>
        </div>

      
      </div>
    </nav>
  </header>
  )
}

export default Header