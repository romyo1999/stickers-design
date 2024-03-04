import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
import { useProductContext } from '../providers/ProductProvider'

const Designe = () => {
  const {designs}=useProductContext()
  return (
    <div className='container'>
            
    <div className='row'>
      {
        designs?.map((e)=>(
          <Card key={e._id} data={e}/>
          ))
      }
    </div>
  </div>
  )
}

export default Designe
