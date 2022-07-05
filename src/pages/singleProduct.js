import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/context'
import { useParams} from "react-router-dom";


const SingleProductPage = () => {
  const { id } = useParams();  // storing id using params
  const [prod, setProd] = useState([]);  // setting up state so that we can use data and render it which we are recx from context
  // console.log(id)
  const products = useContext(DataContext)
  // console.log("from single page", products)
  const {addCart}=useContext(DataContext)
  useEffect(() => {
    // checking the condition once data rcvd it will render, else loader 
    if (products && products.products && products.products.data && products.products.data.length > 0) {
    const items = products.products.data.find((prods) => (prods.id).toString() === id);
    setProd(items) // data that matched with the id is stored in var and passed to setstate
  // console.log('from find pge', items.title)
   }
 },[])

 return (
  <div>
    single page
    <div>{prod.title}
      <div>
        <img src={prod.image} alt={prod.id} style={{width:150}} ></img>
      </div>
      <div>$: {prod.price}</div> 
      <div>Category: {prod.category}</div>
      <div>Description: {prod.description}
      </div>
    </div>
    <button onClick={()=>addCart(prod.id)}>Add to Cart</button>
  </div>
  )
}

export default SingleProductPage