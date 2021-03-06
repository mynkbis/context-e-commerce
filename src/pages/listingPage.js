import React, { useContext } from 'react'
import ProductCard from '../components/productCard/productCard'
import DataContext from '../context/context'
import '../components/productCard/productCard.css'
const ListingPage = () => {
  const {products} = useContext(DataContext)       // products array rxcvd
  // console.log("listing", products)

  return (
    <div className='mainContainer'>          
      {/* checking for data rcvd or not if not loader will work else it will render */}
      {products && (!products.data || products.data.length <= 0) ?
        "loading..." : products && products.data && products.data.length > 0
        && products.data.map((prod) => {
          return (
            <ProductCard key={prod.id} prod={prod} />   //card component data passed as prop
          )
        })}
    </div>
  )
}

export default ListingPage