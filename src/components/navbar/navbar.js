import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import ThemeButton from '../themeButton/themeButton'
import DataContext from '../../context/context'


const Navbar = () => {
  const{darkMode,state:{cart}, cart1}=useContext(DataContext);

  return (
    <div >
      <div className='navbar' id={darkMode ? "dark" : "light"}>
      <Link style={{color: 'white', textDecoration:"none"}}  to='/home'>Home</Link>
        <Link style={{color: 'white', textDecoration:"none"}} to='./About'>About</Link>
        <Link style={{ color: 'white', textDecoration: "none" }} to='/cart'>cart({cart.length})</Link>
        {/* {cart.length > 0 ? (<>{cart.map((prod => { return(
          <img src={ prod.image} alt={prod.title } />)
        }))}</>) : (<span>Cart is empty</span>)} */}
        <ThemeButton/>
        </div>
    </div>
  )
}

export default Navbar