import React from 'react'
import Header from '../components/header/Header';
import Posts from '../components/posts/Posts';
import RealSideBar from '../components/realSideBar/RealSideBar';

import './home.css' 
function Home({evPosts,editName,editAbtU,editImage,detailsAbtMe}) {
  return (
    <div>
        <Header />
        <div className="home">
          <Posts evPosts={evPosts} />
          <RealSideBar 
          detailsAbtMe={detailsAbtMe}
          />
        </div>
    </div>
  )
}

export default Home