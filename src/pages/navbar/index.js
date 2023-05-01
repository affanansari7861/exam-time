import React from 'react'
import Ball from './ball'
import './nav.css'

const Navbar = () => {
  
  return (<>
      <section id='navbar'>
          
          <img id='logo' src={require('../../images/et_logo.png')} alt="logo" />

          <section className='nav-wrapper'>
              <div className='search'>
                <input type="text" id='search' name='search' className='search-input' placeholder='Search....' />
                <label for="search"></label>
                          <button ></button>
              </div>
          <Ball></Ball>
          </section>
    </section>
  </>
  )
}

export default Navbar
