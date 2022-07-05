import React from 'react'
import { useNavigate} from 'react-router-dom'
import './productCard.css'
const ProductCard = ({ prod }) => {
  const navigate = useNavigate();


  const handleImageClick = (prodId) => {  // once the image is clicked it will navigate to the singlepage or pdp
    navigate(`/listing/${prodId}`)
  }
      return (
        <div className="productContainer">
          {
            <div className='mainCardContainer'>
              <div className='cardContainer'>
                <div>{prod.id}</div>
                <div> {prod.title}</div>
                <div className='cardContainer1'>
                  <img className="imageBox" src={prod.image} alt={prod.title} onClick={() => handleImageClick(prod.id, prod)} />
                </div>
                <h5>$: {prod.price}</h5>
                <p>Category: {prod.category}</p>
                <div>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
                      }
      </div>
  )
}

export default ProductCard