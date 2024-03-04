import React from "react";
import './navFooter.css'
import logo from '../images/logo.png'
import FACEBOOK from '../images/FACEBOOK.png'
import instagram from '../images/INSTAGRAM.png'
import twitter from '../images/TWITER.png'
import { Link } from "react-router-dom";

const NavFooter=()=>{
    return(
        <div className="container-fluid navFooter" id="navFooter">

        <div className="container ">
            <div className="row ul ">
                <li className="col-lg-2 col-md-3 col-sm-3"><Link   to="/">Products</Link></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><a target="blank" href="mester5.redbubble.com">Partners</a></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><Link to="/contact" >Contact </Link></li>
                <li className="col-lg-4 col-md-3 lg col-sm-3 img-fluid border-0"><Link><img src={logo}  alt="logo"/></Link></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><Link  to="/about">About</Link></li>
                <li className="col-lg-1 col-md-3 col-sm-3"><a href='redbubble.com/life/'>Blog</a></li>
                <li className="col-lg-2 col-md-3 col-sm-3"><a href="mailto:tahargriach@gmail.com">Support</a></li>
            </div>
            <div className="socialmedia">
                <a target="blank" href="https://web.facebook.com/profile.php?id=100088805017411" ><img  className="img-fluid" src={FACEBOOK} alt="facebook" /></a>
                <a target="blank" href="https://www.instagram.com/carlossmester/?utm_source=ig_web_button_share_sheet&igshid=OTQ5NTI0NzZiOA=="><img  className="img-fluid" src={instagram} alt="instagram" /></a>
                <a target="blank" href="https://twitter.com/tahar121999"><img className="img-fluid" src={twitter} alt="twiter" /></a>
            </div>
            <h4 className="text-center copyrigth"><a href="https://help.redbubble.com/hc/en-us/articles/201579195"><span>©2020 ___2023 </span></a> <a href="https://www.redbubble.com/privacy"><span>Privacy___Team </span></a> </h4>
        </div>

        </div>
    )
}
export default NavFooter