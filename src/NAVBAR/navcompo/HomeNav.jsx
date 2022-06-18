import React from 'react'
import '../navcompo/navbar.css'

function HomeNav() {
  return (
    <div className='home-nav'>
        <div className='logo'>
            <img onClick={()=>window.scroll(0,0)} src="https://www.guardianlife.com/logo-dark.svg" alt="logo" width="160" height="31"/>
        </div>
       
    </div>
  )
}
export default HomeNav