import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import TopBar from './components/topBar/TopBar';
import NewPost from './components/newPost/NewPost';
import Home from './home/Home';
import SideBar from './components/sideBar/SideBar';
import EditProfile from './editProfile/EditProfile';
import Post from './components/post/Post';

function App() {
  

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [editImage, setEditImage] = useState('');
  const [detailsAbtMe, setDetailsAbtMe] = useState('');
  const [editName, setEditName] = useState('');
  const [editAbtU, setEditAbtU] = useState('');
  const [evPosts, setEvPosts] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [NewPostCon, setNewPostCon] = useState('');
  const [newImage, setNewImage] = useState('');
  const [search,setSearch] = useState('');
  console.log(search)
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = evPosts ? evPosts[evPosts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM-dd-yyyy');
    const newPost = { id, dateTime, image: newImage, title: newPostTitle, content: NewPostCon };
    const allPost = [...evPosts, newPost];
    setEvPosts(allPost);
    setNewPostTitle('');
    setNewImage('');
    setNewPostCon('');
    navigate('/');
  };
  
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleAbtMe = (e) => {
    e.preventDefault();
    const newAbt = { image: editImage, name: editName, abtyou: editAbtU };
    setDetailsAbtMe([newAbt]);
    console.log(detailsAbtMe);
    setEditImage('');
    setEditName('');
    setEditAbtU('');
  };
  console.log("home")
  console.log(evPosts);

  return (
    <div className="App">
      <TopBar detailsAbtMe={detailsAbtMe} search = {search} setSearch={setSearch}  evPosts={evPosts} isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive}/>
      <Routes>
        <Route
          path="/"
          element={<Home evPosts={evPosts} editName={editName} editAbtU={editAbtU} editImage={editImage} detailsAbtMe={detailsAbtMe} />}
        />
        <Route
          path="/NewPost"
          element={<NewPost setNewPostTitle={setNewPostTitle} newPostTitle={newPostTitle} handleSubmit={handleSubmit} NewPostCon={NewPostCon} setNewPostCon={setNewPostCon} newImage={newImage} setNewImage={setNewImage} />}
        />
        <Route path="/sideBar" element={<SideBar handleAbtMe={handleAbtMe} editImage={editImage} editName={editName} editAbtU={editAbtU} setEditImage={setEditImage} setEditName={setEditName} setEditAbtU={setEditAbtU} />} />
        <Route path="/editProfile" element={<EditProfile detailsAbtMe={detailsAbtMe} />} />
        <Route path="posts/:id" element={<Post evPosts={evPosts} setSearch={setSearch}/>} />
      </Routes>
    </div>
  );
}

export default App;
