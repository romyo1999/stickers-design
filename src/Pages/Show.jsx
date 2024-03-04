import { faArrowAltCircleLeft, faArrowAltCircleRight, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageLoading from '../component/ImageLoading'
import AlsoLike from '../component/AlsoLike'
import { useProductContext } from '../providers/ProductProvider'

const Show = () => {
    const {id}=useParams()
    console.log(id)
    const {data,refresh} = useProductContext()
    const product=data.find(e=>e._id===id)
    const[image ,setImage]=useState(product.image)
    const term=product.title.split(' ').slice(0, 2).join(' ')

  return (
    <div className='container-fluid' >
    <div className='row'>
  {/* image and buttons  */}
    <div className='col-lg-5 col-md-12  col-sm-12 d-flex flex-column align-items-center justify-content-center mt-4 '>
      <div className='w-100 d-flex flex-row align-items-center justify-content-center '>
        <button onClick={()=>setImage(product.image)}  style={{width:"50px" ,height:"50px",color:"white",background:"#2980b9"}} className='btn-hover p-3 d-flex align-items-center justify-content-center me-2'> <FontAwesomeIcon className='fs-4' icon={faArrowAltCircleLeft}/> </button>
        <ImageLoading
        path={image}
        alt={"image1"}
        w={500}
        h={500}
        />
        <button onClick={()=>setImage(product.image1)}  style={{width:"50px" ,height:"50px",color:"white",background:"#2980b9"}} className='btn-hover p-3 d-flex align-items-center justify-content-center ms-2'> <FontAwesomeIcon className='fs-4' icon={faArrowAltCircleRight}/> </button>
      </div>

    </div>

      {/* title and description and size  */}
    <div className='col-lg-6 col-md-12 col-sm-12  d-flex flex-column align-items-center justify-content-center mt-4 show-media '>
    <h3 className='ms-2 w-100' style={{fontWeight:'bold'}}>{product.title}</h3>
    <h2 className='ms-3 w-100' style={{fontWeight:'bold',color:"#2baf10"}}>{product.price}$+</h2>
    <h5 className='w-100 ms-2 mt-1 text-secondary' >{product.description}</h5>


  <a href={product.product_link} className='btn btn-white mb-2 btn-shadow mt-4' > 
      <FontAwesomeIcon icon={faCreditCard} className='me-2'/>
      Buy it Now
  </a>
    </div>
    <hr className='m-4'/>
    <div className='col-lg-6 col-md-12'>
        {
            product.category==="Stickers"?(
                <>
        <h3 className='text-start ms-4'>Product features</h3>
        <ul className='d-flex flex-column align-items-start justify-content-start' style={{fontSize:"18px",color:"#242425",fontFamily:"roboto"}}>
            <li>Material: High-quality vinyl</li>
            <li>Design: Vibrant cartoon characters (e.g., animals, superheroes)</li>
            <li>Sticker Type: Removable, kiss-cut vinyl stickers</li>
            <li>Adhesive Type: Gentle, removable adhesive</li>
            <li>Finish: Sleek matte finish</li>
            <li>Waterproof: Yes, super durable and water-resistant</li>
            <li>Durability: Resistant to fading, scratching, and wear</li>
            <li>Border: Delicate 1/8 inch (3.2mm) white border around each design</li>
            <li>Application Instructions: Easy to apply - clean surface before applying; peel off backing </li>
            <li>Packaging: Neatly packaged in individual sheets</li>
            <li>Note: Sticker types may be printed and shipped from different locations for faster delivery</li>
        </ul>
                </>
            ):(
                <>
        <h3 className='text-start ms-4'>Digital Download</h3>
        <ul className='d-flex flex-column align-items-start justify-content-start' style={{fontSize:"18px",color:"#242425",fontFamily:"roboto"}}>
            <li className='d-flex flex-column align-items-start justify-content-start'><b>Digital File Type(s) :</b>
                <li>1 PDF</li>
                <li>1 PNG</li>
                <li>2 Other Files</li>
            </li>

            <li className='d-flex flex-column align-items-start justify-content-start'><b>What You Receive:</b>
              <li>This is a digital file for Cutting Machines (Cricut, Silhouette and more), Printers, Iron on Transfers, Sublimation, etc</li>
              <li className='d-flex flex-column align-items-start justify-content-start'>You will receive a ZIP file including 4 design formats:<li>SVG</li><li>JPEG</li><li>PDF</li><li>PNG (300dpi high resolution with transparent background)</li></li>
            </li>

            <li className='d-flex flex-column align-items-start justify-content-start'><b>Terms of Use:</b>These files are for personal use only. For commercial use, please make sure you purchase the applied license.If you are a small business owner with a lower sales target, you can use our designs to create and sell up to 100 products without purchasing our Commercial License. However, in such a case, it is REQUIRED to place our credit on the same page(s) that products are being sold or displayed by yourself.  
            </li>
            <li className='d-flex flex-column align-items-start justify-content-start'> <b>Allowed & Prohibited Uses:</b>
                <li>Altering, sharing, or re-selling our designs in any digital file format is strictly prohibited.</li>
                <li>Designs can ONLY be used to create physical finished-end products such as shirts, mugs, bags, etc.</li>
                <li>It is NOT permitted to create any physical intermediate products like vinyl, embroidery design, etc. which are used to create finished end products.</li>
                <li>Altering, sharing, or re-selling our designs in any digital file format is strictly prohibited.</li>

            </li>
        </ul>
                </>
            )
        }
    </div>

    <div className='col-lg-6 col-md-12 show-line'>
        {
            product.category==='Designs'?(
                <>
                <h3 className='text-start ms-4'>How It Works</h3>
                <ul className='d-flex flex-column align-items-start justify-content-start' style={{fontSize:"18px",color:"#242425",fontFamily:"roboto"}}>
                    <li>Welcome to  Stickers-Design Store! Here's how our process works.</li>
                    <li>Choose Your Sticker</li>
                    <li>Explore our digital design options and select the files you want to purchase.</li>
                    <li>Customization Options</li>
                    <li>Review the selected design files and ensure they meet your requirements."</li>
                    <li>Checkout Process</li>
                    <li>Proceed to our checkout page to review your order. Once confirmed, click "Proceed to Payment."</li>
                    <li>Payment</li>
                    <li>You'll now be redirected to Gumroad.com to complete your payment securely. </li>
                    <li> Confirm Order</li>
                    <li>Review your order details and payment information on Gumroad.com before confirming your purchase.</li>
                    <li>Enjoy Your Purchase</li>
                    <li>Once your payment is confirmed, you'll receive instant access to download your design files.</li>
                </ul>
                </>
            ):(
                <>
                <h3 className='text-start ms-4'>How It Works</h3>
                <ul className='d-flex flex-column align-items-start justify-content-start' style={{fontSize:"18px",color:"#242425",fontFamily:"roboto"}}>
                    <li>Welcome to  Stickers-Design Store! Here's how our process works.</li>
                    <li>Choose Your Sticker</li>
                    <li>Browse our collection of high-quality vinyl stickers and choose your favorite design.</li>
                    <li>Customization Options</li>
                    <li>Select the desired size and quantity for your stickers, then click "Buy Now."</li>
                    <li> Checkout Process</li>
                    <li>You'll be redirected to our checkout page to review your order. Once confirmed, click "Proceed to Payment.</li>
                    <li>Payment</li>
                    <li>You'll now be redirected to Teepublic.com to complete your payment securely. </li>
                    <li> Confirm Order</li>
                    <li>Review your order details and payment information on Teepublic.com before confirming your purchase.</li>
                    <li>Enjoy Your Purchase</li>
                    <li>Once your payment is confirmed, your stickers will be shipped to your address.</li>
                </ul>
                </>
            )
        }
       


       
    </div>

    </div>
    <hr/>
        <AlsoLike _id={product._id} title={term}/>
  </div>
  )
}

export default Show
