import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className='ui__navbar'>
          <div className='ui__navbar-links_profile'>
            <img src={Logo} alt='Logo' />
          </div>

          <div className='ui__navbar-links_menu-route'>
            <ul>
              <li>EXPLORE</li>
              <li>MENTORS</li>
              <li>BLOG</li>
              <li>COMMUNITY</li>
            </ul>
          </div>
          
      </div>     
    </nav>
  )
}

export default Navbar