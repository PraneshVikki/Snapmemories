import React from 'react';
import './singlePost.css';
import emptyImg from './empty.jpg'
import { FaEdit } from "react-icons/fa";

function SinglePost() {
  return (
    <div>
        <div className="inpImg">      
          <label className='plus' htmlFor="postImg">+</label>
          <input type="file" id="postImg" style={{ display: 'none' }} />
        </div>
        <div className="disImg">
          <img src={emptyImg} alt="" />
        </div>
        <div className='inpTitle'>
          <input className='inputTitle' type="text" placeholder='Enter your title' />
        </div>
        <div className="content">
          <input className='inpContent' type="text" placeholder='Enter content' />
        </div>
        <div className="submit">
        <input className='inpSubmit' type="submit" />
        </div>
        
        
    </div>
  );
}

export default SinglePost;
