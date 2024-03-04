import React, { useState } from 'react';
import './AddProduct.css'; // Import your CSS file for styling
import { axiosClient } from '../api/axios';
import {ToastContainer ,toast} from 'react-toastify'
import { Link, useParams } from 'react-router-dom';
import {  faArrowAltCircleLeft, faEdit, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useProductContext } from '../providers/ProductProvider';
import { ScaleLoader } from 'react-spinners';

const UpdateProduct = () => {
    const {data} = useProductContext()
    const {id}=useParams()
  const [title, setTitle] = useState(data.find(e=>e._id===id).title);
  const [price, setPrice] = useState(data.find(e=>e._id===id).price);
  const [description, setDescription] = useState(data.find(e=>e._id===id).title);
  const [image, setImage] = useState(data.find(e=>e._id===id).image);
  const [image1, setImage1] = useState(data.find(e=>e._id===id).image1);
  const [category, setCategory] = useState(data.find(e=>e._id===id).category);
  const [product_link, setProductLink] = useState(data.find(e=>e._id===id).product_link);
  const {refresh ,setRefresh}=useProductContext()
  const [loading,setLoading]=useState(false)

  

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission here, you can send the data to your backend or perform any other necessary actions
    console.log();
    const InputData={
        
            title,
            price,
            description,
            image,
            image1,
            category,
            product_link
          
    }
    console.log(InputData)

        try {
          setLoading(true)
          
            const response= await axiosClient.put(`/products/${id}` ,InputData)
            toast.success("Updated successfuly")
            setRefresh(refresh +3)
            console.log(response)
          setLoading(false)
        } catch (error) {
          toast.error("Ops!! product not added try again")
            console.error("faild to add product",error)
          setLoading(false)

        }
    

  };


  return (
    <div className="add-product-container">
          <div className='d-flex align-items-center justify-content-between mb-4 footer-admin'>
    <Link className='btn btn-success d-inline-block fs-5' style={{fontWeight:"bold"}} to={"/admin/products"}><FontAwesomeIcon className='fs-4' icon={faArrowAltCircleLeft}/> Products</Link>

    <Link to={"/"} className='text-white fs-6 ms-4 icon' style={{textDecoration:"none"}}><FontAwesomeIcon className='fs-5' icon={faHome}/>Home</Link>
    </div>
      <ToastContainer/>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  required/>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)}  required />
        </div>
        <div className="form-group">
          <label>Image1:</label>
          <input type="text" value={image1} onChange={(e) => setImage1(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Stickers">Stickers</option>
            <option value="Designs">Designs</option>
          </select>
        </div>
        <div className="form-group">
          <label>Product Link:</label>
          <input type="text" value={product_link} onChange={(e) => setProductLink(e.target.value)}  required/>
        </div>
        <button className='btn-submit' type="submit">
        {
          loading?(
            <ScaleLoader className='spinner' color="#36d7b7" />
          ):(
            <>
            <FontAwesomeIcon icon={faEdit}/>
            UPDATE
            </>
          )
        }   
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;

