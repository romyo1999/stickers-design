import React from "react";
import './about.css'
import about from '../images/AboutUs.png'
 const About=()=>{
    return(
        <>
        <div className="container">
            <div className="row about">
                <div className="col-lg-12 ">
                        <img className="img-fluid mb-3" alt="about us"  src={about} />
                </div>
                <div className="col-lg-6 col-md-6">
                    <h3 className="text-center"> About Stickers & Design</h3>
                    <p className="text-center">
                    Welcome to Stickers & Design, where creativity meets craftsmanship. We're more than just a store; we're a hub
                     for artistry, self-expression, and design excellence. Our mission is to provide you with top-quality stickers 
                     and digital design resources that inspire, uplift, and empower your creative endeavors
                    </p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <h3 className="text-center "> Our Story</h3>
                    <p className="text-center">
                    Founded by a passionate team of artists and designers, Stickers & Design was born out of a love for creativity and
                     a desire to share it with the world. Our journey began with a simple idea: to offer a diverse range of stickers that 
                     add a personal touch to your belongings and digital design assets that fuel your creative projects
                    </p>
                </div>
            </div>
        </div>
        </>

    )
 }
 export default About