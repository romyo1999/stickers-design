import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import { axiosClient } from '../api/axios';
import { useFavoritContext } from '../providers/FavoritProvider';

const Card = (props) => {
  const {Liked ,counter,setCounter}=useFavoritContext()
  const active =Liked(props.data._id)
  const [imageLoading ,setImageLoading]=useState(true)
  const promo=(Number(props.data.price)+(Number(props.data.price)*50/100) )
  const user_id=localStorage.getItem("user_id")

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleToggleWishlist = async() => {
    if(user_id){
      const Data={
        user_id:user_id,
        product_id:props.data._id
      }
      try {
      const response =await axiosClient.post("/favorit",Data)
      console.log(response.data.message)
      setCounter(counter+2)
      } catch (error) {
        toast.error("System Error Please Try again")
      }
   
    }else{
      toast.warning("Please Login First !")
    }
  };

  return (
      <>
           <div className='col-lg-3 col-md-4 col-sm-6 mt-3 ms-0 me-0' id='item'> 
           <ToastContainer/>
           <div className="product  "  id='item'  >
               <Link className='w-100' style={{overflow:"hidden" ,width:"100%",display:"block"}}  to={`/show/${props.data._id}`}>
   
               {imageLoading && (
                   <div className="mb-4 d-flex align-items-center justify-content-center "style={{width:"100%" ,height:"260px" ,background:"rgba(172, 173, 173, 0.8)"}}>
                   <div >
                   <PulseLoader color="white" />
                   </div>
                   
                   </div>
               )}
   
                <img src={props.data.image}
                alt={props.data.title}
                 className='img-fluid zoom-img w-100'
   
                 style={{ display: imageLoading ? 'none' : 'block' ,background:"  #8a8d8a" ,width:"100%" ,height:"280px",objectFit:"fill"}}
                 onLoad={handleImageLoad}
                 />
   
   
               </Link>
             <h3 style={{height:"32px" ,overflow:"hidden"}}>{props.data.title}</h3>
             <p >
             <span style={{color:"red" ,textDecoration:"line-through" ,fontSize:'14px' ,display:"inline-block" ,marginRight:"5px"}}>${promo.toFixed(2)}</span>
              <span style={{fontWeight:"bold" ,color:" #1a3c99"}}>${props.data.price}</span>
              </p>
             <FontAwesomeIcon
               icon={faHeart}
               className={` wishlist-icon ${active} `}
               onClick={handleToggleWishlist}
             />
           </div>
           </div>
       
   
       
      </>
  )
}

export default Card
