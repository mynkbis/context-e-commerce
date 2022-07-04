import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

const DataContext= createContext({});


export const DataProvider = ({ Children}) => {
    const [product, setProduct] = useState();
    const [Loading, setLoading] = useState();
    const [errors, setErrors] = useState();

    const baseURL = 'https://fakestoreapi.com/products';


        
        const fetchData=()=> axios.get(baseURL).then(
            Response => (
                setProduct(JSON.stringify(Response.data))),
            // console.log(product)
        )

    useEffect(() => {      fetchData()
        //console.log(product)

    },[product])

    return (
        <DataContext.Provider value={{product} }>
            {Children}
        </DataContext.Provider>
    )
}

export default DataContext;

    