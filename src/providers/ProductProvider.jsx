import React, { createContext,useContext, useState,useEffect } from 'react';
import { axiosClient } from '../api/axios';
const ProductContext  = createContext(null);

const ProductProvider = ({ children }) => {
    const [data ,setData]=useState([])
    const [stickers ,setstickers]=useState([])
    const [designs ,setDesigns]=useState([])
    const [refresh ,setRefresh]=useState(0)
    

    useEffect(()=>{
        fetchProducts()
        console.log('i refresh')
        
      },[refresh])
    
    
    const fetchProducts=async()=>{
      try {
        const response = await axiosClient.get("/products");
        console.log(response.data)
        setData(response.data)
        setstickers(response.data.filter((e)=>e.category==="Stickers"))
        setDesigns(response.data.filter((e)=>e.category==="Designs"))
      } catch (error) {
        if (error.response) {
          console.error('Response Error:', error.response.data);
          setData(0)
          console.error('Status Code:', error.response.status);
          console.error('Headers:', error.response.headers);
      } else if (error.request) {

          console.error('Request Error:', error.request);
      } else {

          console.error('General Error:', error.message);
      }
      }
    }
    

  const contextValues ={
    data,
    stickers,
    designs,
    refresh,
    setRefresh,


  }
  return (
    <ProductContext.Provider value={contextValues}     >
      {children}
    </ProductContext.Provider>
  );


};

const useProductContext = () => {
    return useContext(ProductContext);
};

export { ProductProvider ,useProductContext };