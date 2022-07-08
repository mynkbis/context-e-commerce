import React, { useContext } from 'react'
import '../components/navbar/navbar.css'
import DataContext from '../context/context';
const Errors = () => {

  const { darkMode } = useContext(DataContext);
  return (
    <div id={darkMode ? "dark" : "light"} style={{ height: "100vh"}}>OOp! you are trying to access something, which we are currently working on. Kindly, visit later.</div>
  )
}

export default Errors