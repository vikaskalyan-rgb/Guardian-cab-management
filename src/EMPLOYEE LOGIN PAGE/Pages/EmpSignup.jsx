import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { auth } from '../Config/Firebase'
import { UserState } from '../../LOGIN PAGE/Context/Context'
import video from '../Assest/video.mp4'
import {AiOutlineArrowLeft} from 'react-icons/ai'

function EmpSignup() {  
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const {setAlert} = UserState()
 const handleSignup=async () =>{
   if(name.length<2){
      setAlert({
        open:true,
        message:'Name must be at least 3 characters',
        type:'error'

      })
      return
    }
   if(password!==confirmPassword){
      setAlert({
        open:true,
        message:'Passwords do not match',
        type:'error'
      });
      return;   
    }
  
  try{
    const result = await createUserWithEmailAndPassword(auth,email,password)
    console.log(result)
    setAlert({
      open:true,
      message:`Signup Sucessfull ,Welcome to GCM ${result.user.email}`,
      type:'success'
    })
    navigate('/emplog')
  }catch(error){
    setAlert
    ({
      open:true,
      message:error.message,
      type:'error'
    })
   
  }
 }

  function handleLogin(){
    navigate('/')
  }
  
  return (
    <div className='half-s'>
      {/******* Signup Form *********** */}
        <div className='signupform-s'>
          <div>
            <video src={video} autoPlay loop video className='signup_video-s'/>
          </div>
          <div className='signup_container-s'>
          <h2>Employee Sign Up</h2><br/>
            <div className='signup_content-s'>
              <input className='signup_input-s' required value={name} onChange={(e)=>setName(e.target.value)}   type='text' placeholder='Name'  /><br/>
              <input className='signup_input-s' required value={email} onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='Email'/><br/>
              <input className='signup_input-s' required  type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
              <input className='signup_input-s' required  type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
              <button onClick={handleSignup} className='signup_btn-s'>Sign Up</button>
              <div className='loginsignup-s'>
                <h4 >Hit Back to Home</h4>
                <p  onClick={handleLogin}><AiOutlineArrowLeft/>    Back</p>
              </div>
            </div>
          </div>
        </div>
    <div className='quote1-s'>
           <h1>"Your Convenience</h1>
           <h3>Our Responsibility"</h3>
         </div>
        
    </div>

  )
}

export default EmpSignup