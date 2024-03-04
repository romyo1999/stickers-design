import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom';
import { axiosClient } from '../api/axios';
import { FadeLoader } from 'react-spinners';

const Registre = () => {
    const [FirstName ,setFirstName]=useState('');
    const [LastName ,setLastName]=useState('');
    const [email ,setEmail]=useState('');
    const [password ,setpassword]=useState('');
    const navigate=useNavigate()
    const [loading ,setLoading]=useState(false)


    const registre=async(e)=>{
        e.preventDefault(); 
        const Data={
            "first_name":FirstName,
            "last_name":LastName,
            "email":email,
            "password":password,
        }
        setLoading(true)
        try {
            const response=await axiosClient.post('/registre' ,Data);
            console.log(response)
            navigate('/login/'+email)
            setLoading(false)

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
    <div className='container-fluid pt-4 pb-4'>

              
              <div className="row">
              <div className=" col-lg-6 col-md-10 col-sm-12 mx-auto mt-4 card mb-4" style={{boxShadow:"0 0 10px black" ,backgroundImage:'url("https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
                      <div className="mt-3 ">
                          <h2 className="text-center text-white "> Registre </h2>
                      </div>

                  <div className="card-body">
                      <form onSubmit={registre}  className="mt-3">

                          <div className="form-group mb-3">
                              <label style={{color:"white",fontWeight:'bold' ,fontSize:"20px" ,textAlign:"start" ,width:'100%'}}>First Name :</label>
                              <input
                               type="text"
                               placeholder='Enter Your First Name'
                               onChange={(e)=>setFirstName(e.target.value)}
                                required
                               className="form-control"  />
                          </div>

                          
                          <div className="form-group mb-3">
                              <label style={{color:"white",fontWeight:'bold' ,fontSize:"20px" ,textAlign:"start" ,width:'100%'}}>Last Name :</label>
                              <input
                               placeholder='Enter Your Last Name'
                               type="text"
                               onChange={(e)=>setLastName(e.target.value)}
                                required
                               className="form-control"  />
                          </div>

                          
                          <div className="form-group mb-3">
                              <label style={{color:"white",fontWeight:'bold' ,fontSize:"20px" ,textAlign:"start" ,width:'100%'}}>Email :</label>
                              <input
                               placeholder='example@example.com'
                               type="email"
                               onChange={(e)=>setEmail(e.target.value)}
                                required
                               className="form-control"  />
                          </div>

                          <div className="form-group mb-3">
                              <label style={{color:"white",fontWeight:'bold' ,fontSize:"20px" ,textAlign:"start" ,width:'100%'}}>Password :</label>
                              <input
                               placeholder='Enter Strong Password'
                               type="Password" 
                               required
                               onChange={(e)=>setpassword(e.target.value)}
                                className="form-control"  
                                
                                />
                          </div>
                          <button className=" p-2 mt-3 fs-4" style={{width:"100%" ,color:"white" ,fontWeight:"bold" ,background:FirstName&&LastName&&email&&password?"blue":"gray",border:"1px"}} type="submit" >
                          {
                            loading?(
                                <FadeLoader  className='spinner' color="#36d7b7" />
                            ):(
                                <>Sign In</>
                            )
                          }
                             
                          </button>
                      </form>
                      <p className='text-white mt-3'>already have an account <Link className='text-warning fs-5' to="/login">Login</Link></p>

                  </div>
              </div>    
              </div>
    </div>
  )
}

export default Registre
