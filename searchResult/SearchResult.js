import React from 'react';
import './searchResult.css';
import { Link } from 'react-router-dom';

function SearchResult({ setSearch, search, evPosts }) {
  console.log("evPosts");
  console.log(evPosts);
  console.log(search);

  const handleLinkClick = () => {
    setSearch('');
  };

  return (
    <div className='SearchResult'>
      {evPosts && search ?
        evPosts.filter((ev) => ev.title.trim().toLowerCase().includes(search.trim()))
          .map((filteredEv) => (
            <Link
              key={filteredEv.id}
              to={`/posts/${filteredEv.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={handleLinkClick}
            >
              <div className='filteredEvSer'>
                <img className='filteredEvImg' src={URL.createObjectURL(filteredEv.image)} alt="" />
                <p>{filteredEv.title}</p>
              </div>
            </Link>
          )) : ''}
    </div>
  );
}

export default SearchResult;
