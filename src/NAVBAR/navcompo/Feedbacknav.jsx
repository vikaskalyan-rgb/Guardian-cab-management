import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

function FeedNav() {
  const navigate=useNavigate()
  function Scroll(){
    navigate('/')
    window.scroll(0,0)
  }
  return (
    <div className='feed-nav'>
        <div className='logo'>
            <img onClick={Scroll} src="https://www.guardianlife.com/logo-dark.svg" alt="logo" />
        </div>
        <div className='nav-link'>
            <ul>
              <li><b><a href='/'>HOME</a></b></li>
                <li><b><a href="/emplog">LogOut</a></b></li>
            </ul>
        </div>
    </div>
  )
}

export default FeedNav
