import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../component/Card'
import { useProductContext } from '../providers/ProductProvider'
const Home = () => {
const {data} =useProductContext()
  return (
    <div className='container'>
            
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

export default Home
