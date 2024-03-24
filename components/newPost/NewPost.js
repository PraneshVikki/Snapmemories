import React from 'react';
import './NewPost.css';
import emptyImg from './empty.jpg';

const NewPost = ({
  setNewPostTitle,
  newPostTitle,
  handleSubmit,
  NewPostCon,
  setNewPostCon,
  newImage,
  setNewImage  
  
}) => {
  console.log(newPostTitle);
  return (
    <form onSubmit={handleSubmit}>
      <div className="inpImg">
        <label className="plus" htmlFor="postImg">
          +
        </label>
        <input
          type="file"
          id="postImg"
          style={{ display: 'none' }}
          onChange={(e) => setNewImage(e.target.files[0])}
        />
      </div>
      <div className="disImg">
        <img src={newImage ? URL.createObjectURL(newImage) : emptyImg} alt="" />
      </div>
      <div className="inpTitle">
        <input
          className="inputTitle"
          type="text"
          placeholder="Enter your title"
          onChange={(e) => setNewPostTitle(e.target.value)}
          value={newPostTitle}
          required
        />
      </div>
      <div className="content">
        <textarea
          rows="3" cols="50"
          className="inpContent"
          type="text"
          placeholder="Enter content"
          onChange={(e) => setNewPostCon(e.target.value)}
          value={NewPostCon}
          required
        />
      </div>
      <div className="submit">
        <input className="inpSubmit" type="submit" />
      </div>
    </form>
  );
};

export default NewPost;
