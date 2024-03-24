import React from 'react';
import './post.css';
import { useParams } from 'react-router-dom';

function Post({ evPosts,setSearch }) {
  const { id } = useParams();
  console.log("HI");
  console.log(typeof(id));
  console.log("HI");

  const singlePost = (evPosts) ? evPosts.find(p => p.id.toString() === id) : null;
  return (
    <div className='post'>
      {singlePost ? (
        <div className='fpost'>
          <img className='image' src={URL.createObjectURL(singlePost.image)} alt="" />
            <div className='postContent'>
              <h2 className='title'>{singlePost.title}</h2>
              <p className='dateTime'>{singlePost.dateTime}</p>
              <p className='postCon'>{singlePost.content}</p>
            </div>
          </div>
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  );
}

export default Post;
