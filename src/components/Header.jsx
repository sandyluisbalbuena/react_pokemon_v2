import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  let [activeLink, setActiveLink] = useState('');

  let handleNavLinkClick = (link) => {
    setActiveLink(link);
  };


  return (
	<header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
              src="./assets/images/brand/pokemonBrandName.png"
              height="30"
              alt="Pokemon"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' onClick={() => handleNavLinkClick('home')} className="nav-link hvr-underline-from-center {activeLink === 'pokedex' ? 'active' : ''}">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/pokedex' onClick={() => handleNavLinkClick('pokedex')} className="nav-link hvr-underline-from-center {activeLink === 'pokedex' ? 'active' : ''}">Pokedex</Link>
            </li>
            <li className="nav-item">
              <Link to='/pokecard' onClick={() => handleNavLinkClick('pokecard')} className="nav-link hvr-underline-from-center {activeLink === 'pokedex' ? 'active' : ''}">Pokecard</Link>
            </li>
          </ul>

          {activeLink === 'pokedex' && (
          <div id="pokemonSearchBar" className="d-flex input-group w-auto me-5">
            <input id="pokemonName" type="search" className="form-control rounded" placeholder="Pokemon Name" aria-label="Search" aria-describedby="search-addon" required/>
            <button className="btn bg-dark" type="submit">
              <i className="fas fa-search text-white"></i>
            </button>
          </div>
          )}

          {activeLink === 'pokecard' && (
            <div id="pokemonSearchBar" className="d-flex input-group w-auto me-5">
            <input id="pokemonName" type="search" className="form-control rounded" placeholder="Pokemon Card Name" aria-label="Search" aria-describedby="search-addon" required/>
            <button className="btn bg-dark" type="submit">
              <i className="fas fa-search text-white"></i>
            </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header