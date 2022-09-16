import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import DataContext from '../../context/context';

import './productCard.css'

const ProductCard = ({ prod }) => {
  const navigate = useNavigate();
const {state:{cart},dispatch} = useContext(DataContext)

  const handleImageClick = (prodId) => {  // once the image is clicked it will navigate to the singlepage or pdp
    navigate(`/listing/${prodId}`)
  }
      return (
        <div className="productContainer">
          {
            <div className='mainCardContainer'>
                   <div>{prod.id}</div>
                <div> {prod.title.substring(0,16)}...</div>
                <div className='cardContainer1'>
                  <img className="imageBox" src={prod.image} alt={prod.title} onClick={() => handleImageClick(prod.id, prod)} />
                </div>
                <h5>$: {prod.price}</h5>
                <p>Category: {prod.category}</p>
              <div>               
                {cart.some((p) => p.id === prod.id) ?
                  (
                     <div>
           <button onClick={() => {
           dispatch({
             type: "removeFromCart",
             payload: prod.id
           })
           }}>-</button>
           <span>{cart.length }</span>
           <button onClick={() => {
           dispatch({
             type: "addToCart",
             payload: prod
           })
           }}>+</button>
         </div>)
           : (<button onClick={() => {
           dispatch({
             type: 'addToCart',
             payload:prod
           })
           }}>
             Add</button>)} 



{/* 
                <button onClick={() => addCart(prod.id)}>Add to Cart</button> */}
              </div>
               {/* <CartValue/> */}
            </div>
            }
      </div>
  )
}

export default ProductCard