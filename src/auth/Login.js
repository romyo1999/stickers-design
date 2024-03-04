import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { axiosClient } from '../api/axios';
import {useCookies} from "react-cookie"
import { useUserContext } from '../providers/UserProvider';
import { useFavoritContext } from '../providers/FavoritProvider';
import {ScaleLoader} from "react-spinners"

const Login = () => {
    const {reload,setReload}=useUserContext()
    const {counter ,setCounter}=useFavoritContext()
    const {id}=useParams()
    const [Errors ,setErrors]=useState('');
    const [email ,setEmail]=useState(id?id:"");
    const [password ,setpassword]=useState('');
    const [cookies,setCookies]=useCookies(["auth_token"])
    const Navigate=useNavigate()
    const [loading ,setLoading]=useState(false)

    const login=async(e)=>{
        e.preventDefault();  
        const Data={
            "email":email,
            "password":password
        }

      
        try {
            setLoading(true)
            const response=await axiosClient.post('/login' ,Data);
            if(response.data.token){
            setCookies("auth_token" ,response.data.token,{path:"/"})
            localStorage.setItem("user_id" ,response.data.id)
            localStorage.setItem("user_name" ,response.data.name)
            setReload(reload+10)
            setCounter(counter+10)
            Navigate('/dashboard')
            setLoading(false)
            }else{
                setErrors(response.data.error)
                setEmail("")
                setpassword("")
                setLoading(false)

            }

        } catch (error) {
            if(error.response){
                console.error("response error" ,error.response)
                console.error(error.state)
                setLoading(false)

            }
            else if(error.request){
                console.error("request error",error.request)
                console.error(error.state)
                setLoading(false)

            }else{
                console.error("general error",error)
                setLoading(false)
 
            }
        }
    }

  return (
    <div className='container-fluid  mt-0 pb-4 pt-4' style={{color:"white"}} >

              
              <div className="row">
                  <div className=" col-lg-6 col-md-10 col-sm-12 mx-auto mt-4 card mb-4" style={{boxShadow:"0 0 10px black" ,backgroundImage:'url("https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
                      <div className="mt-2 ">
                          <h2 className="text-center text-white "> Login </h2>
                      </div>

                  <div className="card-body">
                      <form onSubmit={login}  className="mt-3">
                          <div style={{fontWeight:'bold'}} className={`text-danger fs-4 ${Errors?'bg-white':""}  rounded-3 text-center`}>{Errors}</div>
                          <div className="form-group mb-3">
                              <label style={{fontWeight:'bold' ,fontSize:"20px" ,textAlign:"start" ,width:'100%',color:"white"}}>Email :</label>
                              <input
                               placeholder='enter your email'
                               type="email"
                               value={email}
                               onChange={(e)=>setEmail(e.target.value)}
                                required
                               className="form-control"  />
                          </div>

                          <div className="form-group mb-3">
                              <label style={{color:"white",fontWeight:'bold' ,fontSize:"20px" ,textAlign:"start" ,width:'100%'}}>Password :</label>
                              <input
                               type="Password" 
                               placeholder='enter your password'
                               value={password}
                               required
                               onChange={(e)=>setpassword(e.target.value)}
                                className="form-control"  
                                
                                />
                          </div>
                          <button className=" p-2 mt-3 fs-4 mb-3" style={{width:"100%" ,color:"white" ,fontWeight:"bold" ,background:email&&password?"blue":"gray",border:"1px"}} type="submit" >
                          {
                            loading?(
                                <ScaleLoader  className='spinner' color="#36d7b7" />
                            ):(

                                <>Sign in</>
                                
                            )
                          }
                             
                             
                          </button>
                      </form>
                      <p className='text-white mt-3'>Don't have an account <Link className='fs-5 text-warning' to="/registre">Registre</Link></p>
                  </div>
              </div>    
              </div>
    </div>
  )
}

export default Login
