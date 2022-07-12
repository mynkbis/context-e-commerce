import React, { useContext } from 'react'
import DataContext from '../context/context'
import ListingPage from "./listingPage"
import '../App.css'
const Home = () => {

  const { darkMode } = useContext(DataContext);
// console.log("from home", darkMode)
  return (
    <div className={darkMode ? "dark" : "light"} >Home
      <ListingPage />
      </div>
  )
}

export default Home