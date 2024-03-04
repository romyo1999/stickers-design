import React, { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { PropagateLoader } from 'react-spinners';

library.add(faHeart);

const ImageLoading = (props) => {
    const [imageLoading ,setImageLoading]=useState(true)



  return (
   <>

            {imageLoading && (
                <div  className=" d-flex align-items-center justify-content-center "style={{width:'100%' ,minHeight:props.h ,background:"rgba(172, 173, 173, 0.8)" }}>
                <PropagateLoader color="white" loading={true} size={4} /> 
                </div>
                
            )}
            <div className=" d-flex align-items-center justify-content-center " >
             <img src={props.path} 

             alt={props.alt?props.alt:"image"}
              style={{ display: imageLoading ? 'none' : 'block',width:`100%`,height:`${props.h}px` }}
              onLoad={()=>setImageLoading(false)}
              />
            </div>

   </>
  )
}

export default ImageLoading
