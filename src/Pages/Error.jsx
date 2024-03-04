import React from 'react'
import notfound from "../images/404.svg"
const Error = () => {
  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <img className='image-fluid ' alt='404 NOUT FOUND' style={{width:"40%"}} src={notfound}/>
      </div>
    </div>
  )
}

export default Error
