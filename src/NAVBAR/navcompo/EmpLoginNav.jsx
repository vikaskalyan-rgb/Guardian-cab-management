import React from 'react'

export default function EmpLoginNav() {
  return (
    <>
    <div className='emp-nav'>
        <div className='logo'>
            <img onClick={()=>window.scroll(0,0)} src="https://www.guardianlife.com/logo-dark.svg" alt="logo" />
        </div>
        <div className='nav-link'>
            <ul>
                <li><b><a href="/">HOME</a></b></li>
            </ul>
        </div>
    </div>
    </>
  )
}
