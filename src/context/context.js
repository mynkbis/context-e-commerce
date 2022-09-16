import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { CartReducer } from "./reducer";


const DataContext= createContext({});


const baseURL = 'https://fakestoreapi.com/products'

export const DataProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
     cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [], 
  })

  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false)
  const [color, setColor] = useState("Light")  // for dark theme
  // console.log(darkMode)
  const [cart1, setCart1] = useState({})
  const [show, setShow] = useState(false)


  const handleTheme = () => {
    setDarkMode(!darkMode);
    setColor(darkMode ? "Light" : "Dark")      
        // console.log("changed theme dark", darkMode)
  }
  

   // fetching data from api
  const fetch = () => {
    axios.get(baseURL).then(res => {
      //  console.log(res)
      setProducts(res)   // setting up state
    })
  }
  
 //fetch function is called here,
  useEffect(() => {
    fetch()
  }, [products])


  // add to cart logic
  const addCart = (id) => {
    // console.log("butto add to cart is pressed")
    setShow(true)
    const dataStore = products;
    console.log("pressed id",id)
    // console.log(dataStore)
    const check = dataStore.data.every((val) => { 
      return (
        console.log("mehtod id",val.id),
        val.id !== id)
    })
     console.log("check value",check)
      if (!check) {
        const prodinfo = products.data.filter((prodfilter) => { return (prodfilter.id) === id })
        // localStorage.setItem("cart", JSON.stringify(prodinfo))
        setCart1(prodinfo);
        return (
          //  console.log( prodinfo)
          prodinfo
        )
      } else {
        alert("somthing gone wrong")
      }      
    }   
       
       
      return (
           <DataContext.Provider value={{ products, darkMode, addCart, cart1,show, setCart1,color, state, dispatch, handleTheme }}>
            {children}
           </DataContext.Provider>  // passign the data through provider
    )
  }

export default DataContext;


















