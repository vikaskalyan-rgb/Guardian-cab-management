import React from 'react'
import './AboutUs.css'
import { IoIosPeople } from "react-icons/io";
import { FaPrayingHands,FaPeopleCarry,FaRegHandshake } from "react-icons/fa";
import Jinx from '../assets/dad.mp4'
import AboutusCard from './AboutUsCard';
import AboutNav from '../../NAVBAR/navcompo/AboutNav';

const AboutUs = () => {
    return (
        <>
        <AboutNav/>
        <div className='aboutus'>


            <div className="container">
            <h1 style={{color:"ghostwhite"}}>OUR VALUES SAY WHO WE ARE</h1>
            <div className='video'>
              <video src={Jinx} autoPlay loop muted id='video'>
                
            </video></div>
                
                
                <div className="card-container">
                    <div className="card">
                        <AboutusCard icon={<FaPrayingHands className='icon' />} heading='WE DO THE RIGHT THING' text='We deliver on our promises and we are fair as well as ethical and we act with honesty and compession. ' />
                      
                    </div>
                    <div className="card">
                        <AboutusCard  icon={<IoIosPeople className='icon' />} heading='WE BELIEVE PEOPLE COUNT' text='We treat people with care and respect and also we had created an environment of continous learning. ' />
                        
                    </div>
                    <div className="card">
                        <AboutusCard  icon={<FaPeopleCarry className='icon' />} heading='WE COURAGEOUSLY SHAPE OUR FUTURE TOGETHER' text='We openly challenge assumptions and we always move with a sense of urgency. ' />
                       
                    </div>
                    <div className="card">
                        <AboutusCard  icon={<FaRegHandshake className='icon' />} heading='WE GO ABOVE AND BEYOND FOR THE PEOPLE WE SERVE ' text='We are commited to understanding our consumers needs and dreams.  ' />
                       
                    </div>
                </div><br/>
                
                <a href="/" className="linker" style={{color:'ghostwhite'}}>Go Back</a>
            </div>
        </div>
        </>
    )
}

export default AboutUs