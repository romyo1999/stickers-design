import React from 'react'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import Card from '../component/Card'
import { useProductContext } from '../providers/ProductProvider'

const Search = () => {
    const {data}=useProductContext()
    const {term}=useParams()
    console.log(term)
    const products =data.filter((item)=>{
        if(item.title.toLowerCase().includes(term.replace("+" ," ").toLowerCase()) || item.description.toLowerCase().includes(term.replace("+" ," ").toLowerCase()) || item.category.replace("+" ," ").toLowerCase()===term.toLowerCase()){
            return true
        }
    })

    console.log(products)
                  


  return (
    <div className='container'>
            
    <div className='row'>
      {
        products.length>0?products.map((e)=>(
          <Card key={e._id} data={e}/>
          ))
         :(
            <h2 className='w-50 mx-auto mt-4 mb-4'>We couldn't find any results for <b> {term.replace("+" ," ")}</b></h2>
         )
      }
    </div>
  </div>
  )
}

export default Search
