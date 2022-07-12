import React, { useContext } from 'react'
import '../components/navbar/navbar.css'
import DataContext from '../context/context';
const Errors = () => {

  const { darkMode } = useContext(DataContext);
  return (
    <div id={darkMode ? "dark" : "light"} style={{ height: "100vh" }}>
      <h1> OOp! this page is under construction. Kindly, visit later.
    </h1>
</div>
  )
}

export default Errors