import React, { useEffect } from 'react'
import Card from '../component/Card'
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../providers/ProductProvider'
const Dashboard = () => {
    const navigate=useNavigate()
    const [cookies,setCookies,removeCookie]=useCookies(["auth_token"])
    const  auth_token=cookies["auth_token"]
    const fullName=localStorage.getItem("user_name")
const {data }=useProductContext()
useEffect(()=>{
    if(!auth_token){navigate("/login")}
},[auth_token,fullName])
  return (
    <div className='container'>
        {
            auth_token?(
                        <h3 className='text-center text-secondary mt-4'> Welcome back <b>{fullName} <FontAwesomeIcon icon={faSmile}/></b></h3>

            ):''
        }
            
      <div className='row'>
        {
          data?.map((e)=>(
            <Card key={e._id} data={e}/>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
