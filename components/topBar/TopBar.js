import React, { useState } from 'react'
import './topBar.css'
import { FaFacebook } from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import images from '../images/emptyAvatar.jpg';
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SearchResult from '../../searchResult/SearchResult';

function TopBar({detailsAbtMe,search,setSearch,evPosts,isSearchActive, setIsSearchActive}) {
  console.log("top");
  console.log(search);
 

  const handleSearchIconClick = () => {
    setIsSearchActive(!isSearchActive);
  };
  return (
    <div>
      <div className="top">
        <div className="topLeft">
        <FaFacebook className='topIcon'/>
        <FaInstagramSquare className='topIcon'/>
        <FaWhatsappSquare className='topIcon'/>
        <FaTwitterSquare className='topIcon'/>
        </div>
        <div className="topCenter">
          <ul className='topList'>
            <li className='cenNav'>
            <Link to ="/">HOME</Link></li>
            <li className='cenNav'>
            <Link to ="/about">ABOUT</Link></li>
            <li className='cenNav'>
            <Link to ="/contact">CONTACT</Link></li>
            <li className='cenNav'>
              <Link to ="/NewPost">NEWPOST</Link></li>
          </ul>
        </div>
        <div className="topRight">
          <div className="inpSearch">
          <input type="text" className={isSearchActive?'searchItem active':'searchItem'} onChange={(e)=>setSearch(e.target.value)} value={search}/>
          {isSearchActive?<SearchResult setSearch={setSearch} search={search} evPosts={evPosts} />:''}
          
          </div>
          <Link to ='/editProfile'><img className='profile' src={detailsAbtMe?detailsAbtMe.map(details=>(URL.createObjectURL( details.image))): images}alt="Profile" /></Link>
          <label htmlFor="searchItem"></label><FaSearch className='searchIcon' onClick={handleSearchIconClick}/>
        </div>
      </div>
    </div>
  )
}
export default TopBar