import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { useProductContext } from '../providers/ProductProvider'

const AlsoLike = (props) => {
  const {data}=useProductContext()
    const product =data.filter((e)=>{
        if(e.title.toLowerCase().includes(props.title.toLowerCase())){
            return true
        }
    })
    const products=product.filter((e)=>e._id!==props._id)
  return (
    <div className='container'>
            
    <div className='row'>
        <h3 className='text-center text-secondary'> You may also like </h3>
      {
        products.length>0?products.map((e)=>(
          <Card key={e._id} data={e}/>
        ))
        :''
      }
    </div>
  </div>
  )
}

export default AlsoLike
