import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import ThemeButton from '../themeButton/themeButton'
import DataContext from '../../context/context'

const Navbar = () => {

  const { darkMode } = useContext(DataContext);
  return (
    <div >
      <div className='navbar' id={darkMode ? "dark" : "light"}>
      <Link style={{color: 'white', textDecoration:"none"}}  to='/home'>Home</Link>
        <Link style={{color: 'white', textDecoration:"none"}} to='./About'>About</Link>
        <Link style={{ color: 'white', textDecoration: "none" }} to='/cart'>Cart 0</Link>
        <ThemeButton/>
        </div>
    </div>
  )
}

export default Navbar