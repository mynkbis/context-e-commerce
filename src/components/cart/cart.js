import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/context'
import "../../App.css"

import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { darkMode, state: { cart }, dispatch,cart1 } = useContext(DataContext);
  
  const [total, setTotal] = useState(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])

  const handleCheckOut = () => {
    navigate("/checkout")
    localStorage.setItem("total", total)
  }


  return (
    <>
      <div id={darkMode ? "dark" : "light"} style={{ height: "100vh" }}>
        <div id={darkMode ? "dark" : "light"}>
          My orders
        </div>     
        {/* <div>{cart1 && cart1.map((it) => {
          return (
            <><h1>{it.title }</h1></>
          )
        })}</div> */}
      <div style={{border: "2px solid red", display: "flex", maxWidth:"200vw"}}>
          {cart && cart.map((item) => {
        
        return (
          <div>
            <div style={{ border: "2px solid #eee", margin: "5px", }}>
              <div>{item.title.substring(0, 18)}</div>
              <div><img src={item.image} alt={item.title.substring(0, 18)} style={{ width: "150px", height: "150px" }} /></div>
              <div>{item.category}</div>
              <div>${item.price}</div>
              <div>
                <button onClick={() => {
                dispatch({
                  type: "removeFromCart",
                  payload: item.id
                })
              }} >-</button>
                <span>{0}</span>
                <button onClick={() => {
           dispatch({
             type: 'addToCart',
             payload:item,
           })
           }}>+</button>
              </div>
              <button onClick={() => {
                dispatch({
                  type: "removeFromCart",
                  payload: item.id
                })
              }}>Del</button>
            </div>          
          </div>
        )
      }
          )}
        </div>
          {cart && cart.length<1 && cart? <h1>"Please add something in cart to preceed checkout"</h1> : <div><div>
          <button onClick={() => {
            dispatch({
              type: "clearAll", 
            })
          }}>Clear All</button>
        </div>
        <div>Summary
          <div>
            <span>subtotal: {cart.length} items</span>
          </div>
          <span>Total Price: ${total}</span>
        </div>
        <div>
        
          <button onClick={() => { handleCheckOut() }}>CheckOut</button>  
        </div> </div>}
    
      </div>
      </> 
  )
}

export default Cart

