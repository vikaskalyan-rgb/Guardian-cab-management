import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
    AiFillCalendar,
  AiFillClockCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {MdPlace} from 'react-icons/md'
import { BiMessageAlt, BiPhoneCall } from "react-icons/bi";

import emailjs from 'emailjs-com'

import "./userform.css";
import userformimg from '../assets/UserBooking.svg';
import { useNavigate } from "react-router-dom";
import EmpNav from "../NAVBAR/navcompo/EmpNav";
function UserForm() {
    function sendEmail (e) {
        e.preventDefault();
    
        emailjs.sendForm('service_3w2bbpe', 'template_92souyr', e.target, 'B6ozLV7mZthDZidcm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          e.target.reset();
          alert('Cab Booked Successfully')
        }
    const navigate=useNavigate('/')
  return (
    <>
    <EmpNav/>
    <div className="userformcontainer">
      <div className="forms-container">
        <div className="book-booking">
          <form onSubmit={sendEmail} className="booking-form">
            <h2 className="title">Booking</h2>
            <div className="input-field">
              <BsFillPersonFill
                size="80%"
                color="#0d3f5e"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input required type="text" name="name" placeholder="Name" />
            </div>
           
            <div className="input-field">
              <BiPhoneCall
                size="80%"
                color="#0d3f5e"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input required className="phoneno" placeholder="Phone Number" type='number' name='phonenumber'/>
            </div>
            <div className="input-field">
              <MdPlace
                size="80%"
                color="#0d3f5e"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input required className="place" placeholder="Destination Place" type='text' name='place'/>
            </div>
            <div className="input-field">
              <AiOutlineClockCircle
                size="80%"
                color="#0d3f5e"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input  type="checkbox" name="day_checkbox" className="checkbox" />
              <span className="checkbox_text">Time 8 AM-5 PM</span>
            </div>
            <div className="input-field">
              <AiFillClockCircle
                size="80%"
                color="#0d3f5e"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input type="checkbox" name="night_checkbox" className="checkbox" />
              <span className="checkbox_text">Time 12 PM-9 PM</span>
            </div>
            <div className="input-field">
              <AiFillCalendar
                size="80%"
                color="#0d3f5e"
                style={{ padding: "10px" }}
                className="input_icons"
              />

              <input required type="date" name='date' placeholder="Date" />
            </div>
            <div className="input-field">
              <BiMessageAlt
                size="80%"
                color="#0d3f5e"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input required type="text" name="any_messages" placeholder="Any messages" />
            </div>
           

            <button className="booking_btn">BOOK</button>
            <div className="alternate">
            <p style={{color:'#0d3f5e'}}>For Leave!</p>
            <button className='booking_btn' onClick={()=>navigate('/leaveform')}>Leave</button>
            </div>
          </form>

         
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
            <div className="content">
            
                <h3 className="heading">Leave</h3>
                <p className="heading_text">You wanna cancel Cab?Please fill the leave form!</p> 
                <button class="btn_transparent" name="leaving-btn" id='leaving-btn' onClick={()=>navigate('/leaveform')}>Leave</button>
                
            </div>
            <img src={userformimg} alt="booking" className="userimg" />
        </div>
      </div>
      
    </div>
    </>
  );
}

export default UserForm;