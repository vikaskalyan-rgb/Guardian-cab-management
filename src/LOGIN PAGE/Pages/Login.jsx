import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { auth } from '../Config/Firebase'
import { UserState } from '../Context/Context'
import video from '../Assest/video.mp4'
import AdminNav from '../../NAVBAR/navcompo/AdminNav'
function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setAlert} =UserState()
  const navigate=useNavigate()
  const handleLogin=async () =>{
   try{
     const result = await signInWithEmailAndPassword(auth,email,password)
     console.log(result)
     setAlert({
       open:true,
       message:`Logged in ,Welcome to GCM ${result.user.email}`,
       type:'success'
     })
     navigate('/adminpage')
   }catch(error){
     setAlert
     ({
       open:true,
       message:error.message,
       type:'error'
     })
    
   }
  }
  function handleSignup(){
    navigate('/signup')
  }
  return (
    <>
      <div><AdminNav/></div>

    <div className='login-s'>
      <video src={video} autoPlay loop muted/>  
       
      
      {/******* Login Form *********** */}

        <div className='container-s'>
          <div className='content-s'>
            <div className='loginheading-s'>
              <h2>Admin Sign in</h2><br/>
              <h3 id='email'>Email</h3>
              <input required value={email} onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='Email'/><br/>
              <h3>Password</h3>
              <input required  type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
              <button className='button-s' onClick={handleLogin} >Signin</button>
            <div/>
            <br/>
            <h4>Create an account? <p className='signup-s' onClick={handleSignup}>Sign up!</p></h4>
          </div>
          <div className='fp-s'>
            <h4><a href='https://www.guardianlife.com/terms-conditions'>Terms and contions</a></h4>
          </div>
          </div>
        </div>

         <div className='quote-s'>
           <h1>"Your Convenience</h1>
           <h3>Our Responsibility"</h3>
         </div>
    </div>
    </>
  )
}

export default Login