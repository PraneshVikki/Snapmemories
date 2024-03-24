import React from 'react';
import './posts.css';
import Post from '../post/Post';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
function Posts({ evPosts }) {
  return (
    <div className='posts'>
      
      {evPosts ? (
        evPosts.map((post) => (
          <Link style={{ textDecoration: 'none',color: 'black' }} to={`/posts/${post.id}`}>
          <div className='monoPost' key={post.id}> 
            <img className='postImage' src={URL.createObjectURL(post.image)} alt="" />
            <p className='dateTime'>{post.dateTime}</p>
            <p className='postTitle'>{post.title}</p>
            <p className='postCon'>{post.content.length<75?post.content:`${post.content.slice(0,73)}...`}</p>
          </div>
          </Link>
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}

export default Posts;
