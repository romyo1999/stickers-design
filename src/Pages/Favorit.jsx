import React from 'react'
import Card from '../component/Card'
import { useFavoritContext } from '../providers/FavoritProvider'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const Favorit = () => {
    const [cookies,setCookies,removeCookie]=useCookies(["auth_token"])
    const  auth_token=cookies["auth_token"]
const {favorits} =useFavoritContext()
  return (
    <div className='container'>
            
      <div className='row'>
        {
         auth_token?(
            favorits.length>0?favorits.map((e)=>(
            <Card key={e._id} data={e}/>
          ))
          :(
            <h4 className='mt-4 text-secondary'>Your Favorit List is Empty</h4>
          )
 
         ):(
            <div className='d-flex flex-column mt-4 align-items-ceter justify-content-center'>
                <h3 className='mb-3' >Login First !</h3>
                <div>
                    <Link className='btn btn-primary me-2 pt-1 pb-1' to={'/login'}>Sign in</Link>
                    <Link className='btn btn-info ms-2 pt-1 pb-1' to={'/registre'}>Sign up</Link>
                </div>
            </div>
         )
        }
      </div>
    </div>
  )
}

export default Favorit
