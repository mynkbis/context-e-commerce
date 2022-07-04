
import './App.css';
import Home from './pages/home'
import ListingPage from './pages/listingPage'
import Error from './pages/error'
import Navbar from './components/navbar/navbar';
import Cart from './components/cart/cart';
import SingleProductPage from './pages/singleProduct';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/context';


function App() {
  return (
    <div className="App">

       <Navbar/>
      <div className='container'>
     
        <Routes>
            <Route exact path='/home' element={<Home />} />
             <Route path='/' element={<Home />} />
        <Route exact path='/listing' element={<ListingPage />}></Route>     
          <Route exact path='/listing/:id' element={<SingleProductPage />}/>  
 
               <Route path='*' element={<Error />} />
        <Route path='/cart' element={<Cart />} />
        
          </Routes>
         
        </div>
      </div>
  );
}

export default App;
