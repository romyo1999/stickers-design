import React, { createContext,useContext, useState,useEffect } from 'react';
import { axiosClient } from '../api/axios';
const FavoritContext  = createContext(null);

const FavoritProvider = ({ children }) => {
    const [favorits ,setFavorits]=useState([])
    const [counter ,setCounter]=useState(0)
    const id=localStorage.getItem("user_id")
    

    useEffect(()=>{
        fetchProducts()
        console.log('i refresh')
        
      },[counter])
    
      const Liked=(product_id)=>{
        const item=favorits.find(e=>e._id===product_id)
        if(item){
          return "liked"
        }else{
          return "not-Liked"
        }
      }
    const fetchProducts=async()=>{
      if(id){
        try {
        const response = await axiosClient.get(`/favorit/${id}`);
        setFavorits(response.data)
      } catch (error) {
        if (error.response) {
          console.error('Response Error:', error.response.data);
          console.error('Status Code:', error.response.status);
          console.error('Headers:', error.response.headers);
      } else if (error.request) {

          console.error('Request Error:', error.request);
      } else {

          console.error('General Error:', error.message);
      }
      }
      }else{
        setFavorits([])
      }

    }
    

  const contextValues ={
    favorits,
    counter,
    setCounter,
    Liked

  }
  return (
    <FavoritContext.Provider value={contextValues}     >
      {children}
    </FavoritContext.Provider>
  );


};

const useFavoritContext = () => {
    return useContext(FavoritContext);
};

export { FavoritProvider ,useFavoritContext };