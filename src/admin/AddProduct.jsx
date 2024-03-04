import React, { useState } from 'react';
import './AddProduct.css'; // Import your CSS file for styling
import { axiosClient } from '../api/axios';
import {ToastContainer ,toast} from 'react-toastify'
import { Link } from 'react-router-dom';
import { faAdd, faArrowAltCircleLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useProductContext } from '../providers/ProductProvider';
import { ScaleLoader} from "react-spinners"

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [category, setCategory] = useState('');
  const [product_link, setProductLink] = useState('');
  const {refresh ,setRefresh}=useProductContext()
  const [loading,setLoading]=useState(false)
  

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission here, you can send the data to your backend or perform any other necessary actions
    console.log();
    const data={
        
            title,
            price,
            description,
            image,
            image1,
            category,
            product_link
          
    }
    console.log(data)
          setLoading(true)
        try {
          
            const response= await axiosClient.post('/products' ,data)
            toast.success("Added successfuly")
            setRefresh(refresh+2)
            console.log(response)
            setTitle('');
            setPrice('');
            setDescription('');
            setImage('');
            setImage1('');
            setCategory('');
            setProductLink('');
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
      <h2>Add Product</h2>
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
            <FontAwesomeIcon icon={faAdd}/>
            Add
            </>
          )
        }

          
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

