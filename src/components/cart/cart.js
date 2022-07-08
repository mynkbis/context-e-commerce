import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/context'
import "../../App.css"
const Cart = () => {
  const [item, setItem] = useState({})
  
  const { darkMode } = useContext(DataContext);
  
  useEffect(() => {
    const localdata = localStorage.getItem("cart")
   console.log(localdata)
    setItem((localdata))
  
}, [item]);

  
  return (
    <div id={darkMode ? "dark" : "light"} style={{height:"1000vh"}}>
      <div id={darkMode ? "dark" : "light"}>
My orders
      </div>
         </div>
  )
}

export default Cart