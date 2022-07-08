
import './App.css';

import DataContext, { DataProvider } from './context/context';
import { useContext } from 'react';
import Home from './pages/home'
import ListingPage from './pages/listingPage'
import Error from './pages/error'
import Navbar from './components/navbar/navbar';
import Cart from './components/cart/cart';
import SingleProductPage from './pages/singleProduct';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { darkMode } = useContext(DataContext);
  console.log(darkMode)
    return (
    <div className="App"id={darkMode ? "dark" : "light"}>
      <DataProvider>
       <Navbar/>
      <div className='container'>
     
        <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route exact path='/listing' element={<ListingPage />}></Route>         
            <Route exact path='/listing/:id' element={<SingleProductPage />}/>  
            <Route path='*' element={<Error />} />
            <Route path='/cart' element={<Cart/>} />
        
          </Routes>
         
          </div>
     
        </DataProvider>
      </div>
  );
}

export default App;
