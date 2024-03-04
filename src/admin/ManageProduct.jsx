import React, { useState } from 'react'
import { useProductContext } from '../providers/ProductProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faHome, faRemove } from '@fortawesome/free-solid-svg-icons'
import Button   from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {  Link } from 'react-router-dom'
import ImageLoading from '../component/ImageLoading';
import Swal from 'sweetalert2';
import { axiosClient } from '../api/axios';

const ManageProduct = () => {

    const {data,refresh ,setRefresh}=useProductContext()
    const [term ,setTerm]=useState("")
      const products=data.filter((item)=>{
        if( item._id===term|| item.title.toLowerCase().includes(term.toLowerCase()) || item.description.includes(term.toLowerCase()) || item.category.toLowerCase()===term.toLowerCase()){
            return true
        }
    })
    

    const showConfimation=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconHtml: "!",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel"
      }).then((result) => {
        if (result.isConfirmed) {
          handleDelete(id)
          Swal.fire(
            "Deleted!",
            "Your item has been deleted.",
            "success"
          );
        }
      });
      
    }

   const  handleDelete=async(id)=>{
        const response=await axiosClient.delete(`/products/${id}`);
        setRefresh(refresh+10)
        console.log(response.data)
        
   }


  return (
    <div className='container-fluid manage-product'>

    <div className='d-flex align-items-center justify-content-between mb-4 footer-admin'>
    <Link className='btn btn-success d-inline-block fs-5' style={{fontWeight:"bold"}} to={"/admin/products/add"}><FontAwesomeIcon className='fs-4' icon={faAdd}/>ADD Product</Link>
    <Form className="d-flex w-75 ">
                  <Form.Control
                    type="search"
                    placeholder="Search By Title or Category"
                    className="me-2 w-100 ms-5 "
                    aria-label="Search"
                    onChange={(e)=>setTerm(e.target.value)}
                  />
                </Form>
                <Link to={"/"} className='text-white fs-6 ms-4 icon' style={{textDecoration:"none"}}><FontAwesomeIcon className='fs-5' icon={faHome}/>Home</Link>
    </div>
    <h2 className='' style={{marginTop:"40px"}}>ALL PRODUCT</h2>

    <hr/>
    <div className='row'>

      {
        term?(
        products.length>0?(
          products?.map((e)=>(

            <Card className='col-lg-2 col-md-3 col-sm-6 mb-3 pt-1 '>
              <ImageLoading path={e.image} w={200} h={200} alt={e.title} />
              <Card.Body>
                <Card.Title  style={{height:"30px",overflow:"hidden"}}>{e.title}</Card.Title>
                <Card.Text className='fs-4 text-success' >
                  {e.price}$
                </Card.Text>
                <Button variant="danger" className='m-1' onClick={()=>showConfimation(e._id)}><FontAwesomeIcon icon={faRemove}/> Delete</Button>
                <Link to={`/admin/product/update/${e._id}`} className='m-1 btn btn-primary'  ><FontAwesomeIcon icon={faEdit}/>Update</Link>
              </Card.Body>
            </Card>
            ))
        ):(
         <h4 className='text-center mt-4'> We couldn't find any results for <b> {term}</b></h4>
        )
        ):(
          data?.map((e)=>(

            <Card className='col-lg-2 col-md-3 col-sm-6 mb-3 pt-1 '>
              <ImageLoading path={e.image} w={200} h={200} alt={e.title} />
              <Card.Body>
                <Card.Title style={{height:"30px",overflow:"hidden"}}>{e.title}</Card.Title>
                <Card.Text className='fs-4 text-success' >
                  {e.price}$
                </Card.Text>
                <Button variant="danger" className='m-1' onClick={()=>showConfimation(e._id)}><FontAwesomeIcon icon={faRemove}/> Delete</Button>
                <Link to={`/admin/product/update/${e._id}`} className='m-1 btn btn-primary'  ><FontAwesomeIcon icon={faEdit}/>Update</Link>
              </Card.Body>
            </Card>
            ))
        )

      
}
 
    </div>
    </div>
 
  )
}

export default ManageProduct
