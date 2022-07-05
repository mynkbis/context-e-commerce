import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import ThemeButton from '../themeButton/themeButton'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
      <Link style={{color: 'white', textDecoration:"none"}}  to='/home'>Home</Link>
        <Link style={{color: 'white', textDecoration:"none"}} to='./About'>About</Link>
        <Link style={{ color: 'white', textDecoration: "none" }} to='/cart'>Cart 0</Link>
        <ThemeButton/>
        </div>
    </div>
  )
}

export default Navbar