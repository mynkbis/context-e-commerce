import axios from "axios";
import { children, createContext, useEffect, useState } from "react";


const DataContext= createContext({});

const baseURL = 'https://fakestoreapi.com/products'

  export const DataProvider = ({ children }) => {
       const [products, setProducts] = useState([]);
       const [darkMode, setDarkMode] = useState(false)   // for dark theme
       // console.log(darkMode)
      const [cart, setCart] = useState([]);


      const fetch = () => {
             axios.get(baseURL).then(res => {  // fetching data from api
            //  console.log(res)
            setProducts(res)   // setting up state
        })
    }        
       useEffect(() => {
           fetch()     //fetch function is called here, 
       }, [products])     

      const addCart = (id) => {
          if (products && products.products && products.products.data && products.products.data.length > 0) {
              const data = products.products.data.filter((prods) => (prods.id).toString() === id);
              console.log(data)
          }
      }
      return (
           <DataContext.Provider value={{ products, darkMode, setDarkMode,addCart }}>
            {children}
           </DataContext.Provider>  // passign the data through provider
    )
  }


export default DataContext;


















