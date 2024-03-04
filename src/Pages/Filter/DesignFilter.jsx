import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../../component/Card'
import { useProductContext } from '../../providers/ProductProvider'

const DesignFilter = () => {
    const {designs}=useProductContext()
    const{min ,max}=useParams()
    const data=designs.filter((e)=>{
        if(e.price>=min && e.price<=max){
            return true
        }
    })


  return (
    <div className='container'>
            
      <div className='row'>
        {
          data.length>0?data.map((e)=>(
            <Card key={e._id} data={e}/>
          ))
          :<h3 className='mt-4 w-50 mx-auto'> 0 Items Found</h3>
        }
      </div>
    </div>
  )
}

export default DesignFilter
