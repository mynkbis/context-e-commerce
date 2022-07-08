import React, { useContext, useState } from 'react'
import DataContext from '../../context/context';


const ThemeButton = () => {

    const { handleTheme, color } = useContext(DataContext)  // state through context
  return (
    <div>
      <button onClick={() => handleTheme()}>{color}Theme</button></div> //once clicked it will toggle the value
  )
}

export default ThemeButton;