import React, { createContext,useContext, useState,useEffect } from 'react';
import { axiosClient } from '../api/axios';
const UserContext  = createContext(null);

const UserProvider = ({ children }) => {
    const [user ,setUser]=useState([])
    const [reload ,setReload]=useState(0)
    const id=localStorage.getItem("user_id")
    

    useEffect(()=>{
        fetchUser()
        console.log('i refresh user')
        
      },[reload])
    
    
    const fetchUser=async()=>{
        if(id){
            try {
                const response = await axiosClient.get(`/users/${id}`);
                setUser(response.data.user)
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
        }
     
    }
    

  const contextValues ={
    user,
    reload,
    setReload
  }
  return (
    <UserContext.Provider value={contextValues}     >
      {children}
    </UserContext.Provider>
  );


};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider ,useUserContext };