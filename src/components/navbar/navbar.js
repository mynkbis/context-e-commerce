import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      <Link style={{color: 'white', textDecoration:"none"}}  to='/home'>Home</Link>
        <Link style={{color: 'white', textDecoration:"none"}} to='./About'>About</Link>
        <Link style={{color: 'white', textDecoration:"none"}}  to='/cart'>Cart 0</Link>
        </div>
    </div>

  )
}

export default Navbar