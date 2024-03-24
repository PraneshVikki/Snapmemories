import React from 'react'
import './sideBar.css'
import baby from '../images/emptyAvatar.jpg'
import { FaFacebook } from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaUserEdit} from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
function SideBar({handleAbtMe,editName,
  editAbtU,editImage,setEditImage,
  setEditName,
  setEditAbtU}) {
    console.log(editName);
  return (
    
    <form className='sidebar' onSubmit={handleAbtMe}>
      <div className="abt">
        ABOUT ME
      </div>
      <div className="sdimg">
        <img className='abtImg' style={{width:'140px',height:'170px'}} src={editImage?URL.createObjectURL(editImage):
        baby} alt="."  />
        <label htmlFor="uEdit"><FaUserEdit className='userEdit' /></label>
        <input type="file" id='uEdit'
     
        style={{ display: 'none' }}
        onChange={(e)=>setEditImage(e.target.files[0])}/>
      </div>
      <div className="abtName">
        <input type="text" className='aboutMe' placeholder='Enter your name' 
        onChange={(e)=>setEditName(e.target.value)}
        value={editName}
        required/>
      </div>
      <div className="abtSkil">
          <input type="text" className='dAbtSkil' placeholder='Enter about you'
          value={editAbtU}
          onChange={(e)=>setEditAbtU(e.target.value)}/>
          <label htmlFor="dAbtSkil">
          </label>
      </div>
      <button type='submit' onSubmit={handleAbtMe} >
      <CiSaveDown1 className='abtSubmit' />
      </button>

      <div className="fu">
        FOLLOW US
      </div>
      <div className="abtIcon">
        <FaFacebook className='topIcon'/>
        <FaInstagramSquare className='topIcon'/>
        <FaWhatsappSquare className='topIcon'/>
        <FaTwitterSquare className='topIcon'/>
      </div>
    </form>
  )
}

export default SideBar