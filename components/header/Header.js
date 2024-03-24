import React from 'react'
import './header.css'
import production from '../images/production.mp4'
function Header() {
  return (
    <div className='header'>
      <p className='snapmemories'>Snapmemories</p>
      <video className='nature' src={production} autoPlay loop muted></video>

    </div>
  )
}

export default Header