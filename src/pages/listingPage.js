import React from 'react'
import ProductCard from '../components/productCard.js/productCard'
import DataContext from '../context/context'
import { DataProvider } from '../context/context'

const ListingPage = () => {
  const { product } = DataProvider(DataContext)
    console.log("listing", product)

  return (
    <div>ListingPage
      <ProductCard />
    </div>
  )
}

export default ListingPage