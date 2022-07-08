import axios from "axios";
import { children, createContext, useEffect, useState } from "react";


const DataContext= createContext({});

const baseURL = 'https://fakestoreapi.com/products'

  export const DataProvider = ({ children }) => {
       const [products, setProducts] = useState([]);
    const [darkMode, setDarkMode] = useState(false)
    const[color,setColor]=useState("Light")  
       // for dark theme
       // console.log(darkMode)
      const [cart, setCart] = useState({})
         

    const handleTheme = () => {
    
      setDarkMode(!darkMode);
      
      setColor(darkMode ? "Light" : "Dark")
       
        // console.log("changed theme dark", darkMode)
    }

      const fetch = () => {
             axios.get(baseURL).then(res => {  // fetching data from api
            //  console.log(res)
            setProducts(res)   // setting up state
        })
    }        
       useEffect(() => {
           fetch()
             //fetch function is called here,
       }, [products])     

      const addCart = (id) => {
        //   console.log("from add", id)
        //   console.log("main products", products)
    
              const prodinfo = products.data.filter((prodfilter) => (prodfilter.id) === id)
            //   console.log(prodinfo)
        
              let cartInitial = JSON.parse(localStorage.setItem("cart", JSON.stringify(prodinfo)))
        
              if (!cartInitial) {
                  const initState = JSON.stringify({ Total: 0, Item: 0 })
                  cartInitial = initState;
                  localStorage.setItem("cart", initState)
              } else {
                  JSON.parse(localStorage.setItem("cart", JSON.stringify(prodinfo)))
              }
          }
      
      return (
           <DataContext.Provider value={{ products, darkMode, addCart, cart, setCart,color, handleTheme }}>
            {children}
           </DataContext.Provider>  // passign the data through provider
    )
  }


export default DataContext;


















