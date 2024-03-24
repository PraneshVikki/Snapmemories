import React from 'react'
import './realSideBar.css'
import { FaFacebook } from 'react-icons/fa';
import images from '../images/emptyAvatar.jpg';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaUserEdit} from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
function RealSideBar({detailsAbtMe}){  
  return (
    <div className='realSideBar'>
        <Link to ='/sideBar'><FaEdit className='faEdit'/></Link>
        <div className="abt">
        ABOUT ME
        </div>
        <img src={detailsAbtMe?detailsAbtMe.map((details)=>(URL.createObjectURL(details.image))):images} alt="" />
        <p>{detailsAbtMe?detailsAbtMe.map((details)=>((details.name))):"Edit your name"}</p>
        <p>{detailsAbtMe?detailsAbtMe.map((details)=>((details.abtyou))):"Edit your about yourself"}</p>
        <div>
        FOLLOW US
        </div>
        <div className="abtIcon">
        <FaFacebook className='topIcon'/>
        <FaInstagramSquare className='topIcon'/>
        <FaWhatsappSquare className='topIcon'/>
        <FaTwitterSquare className='topIcon'/>
        </div>
      
    </div>
    )
}

export default RealSideBar