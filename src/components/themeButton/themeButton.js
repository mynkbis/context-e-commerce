import React, { useContext } from 'react'
import DataContext from '../../context/context';


const ThemeButton = () => {

    const { darkMode, setDarkMode } = useContext(DataContext)  // state through context
    
   const handleTheme = () => {
        setDarkMode(!darkMode);
        console.log("changed theme to dark")
    }

  return (
    <div><button onClick={()=>handleTheme()}>ThemeToggle</button></div> //once clicked it will toggle the value
  )
}

export default ThemeButton;