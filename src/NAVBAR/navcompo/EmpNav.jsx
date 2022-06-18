import React from 'react'
import './navbar.css'


function EmpNav() {
  
  return (
    <div className='emp-nav'>
        <div className='logo'>
            <img onClick={()=>window.scroll(0,0)} src="https://www.guardianlife.com/logo-dark.svg" alt="logo" />
        </div>
        <div className='nav-link'>
            <ul>
                <li><b><a href='/feedback'>  Feedback</a></b></li>
                <li><b><a href="/emplog">LogOut</a></b></li>
            </ul>
        </div>
    </div>
  )
}

export default EmpNav
