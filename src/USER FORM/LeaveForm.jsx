import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  AiFillCalendar,
  AiFillClockCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import emailjs from "emailjs-com";
import { BiMessageAlt, BiPhoneCall } from "react-icons/bi";

import "./userform.css";
import leaveimg from "../assets/Leave.svg";
import { useNavigate } from "react-router-dom";
import EmpNav from "../NAVBAR/navcompo/EmpNav";
function LeaveForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3w2bbpe",
        "template_92souyr",
        e.target,
        "B6ozLV7mZthDZidcm",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    alert('Your request has been sent!')
  }
  const navigate = useNavigate();
  return (
    <>
    <EmpNav/>
    <div className="userformcontainer">
      <div className="forms-container">
        <div className="book-booking">
          <form onSubmit={sendEmail} className="leaving-form">
            <h2 className="title">Leave Form</h2>
            <div className="input-field">
              <BsFillPersonFill
                size="80%"
                color="gray"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input required type="text" name="name" placeholder="Name" />
            </div>
          
            <div className="input-field">
              <BiPhoneCall
                size="80%"
                color="gray"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input required
                className="phoneno"
                placeholder="Phone Number"
                type="number"
                name="phonenumber"
              />
            </div>
            <div className="input-field">
              <AiOutlineClockCircle
                size="80%"
                color="gray"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input  type="checkbox" name="day_checkbox" className="checkbox" />
              <span className="checkbox_text">Time 8 AM-5 PM</span>
            </div>
            <div className="input-field">
              <AiFillClockCircle
                size="80%"
                color="gray"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input 
                type="checkbox"
                name="night_checkbox"
                className="checkbox"
              />
              <span className="checkbox_text">Time 12 PM-9 PM</span>
            </div>
            <div className="input-field">
              <AiFillCalendar
                size="80%"
                color="gray"
                style={{ padding: "10px" }}
                className="input_icons"
              />

              <input required type="date" name="date" placeholder="Date" />
            </div>
            <div className="input-field">
              <BiMessageAlt
                size="80%"
                color="gray"
                style={{ padding: "10px" }}
                className="input_icons"
              />
              <input required
                type="text"
                name="any_messages"
                placeholder="Any messages"
              />
            </div>

            <button className="leaving_btn">LEAVE</button>
            <div className="alternate" >
              <p style={{ color: "gray" }}>For Booking!</p>
              <button className="booking_btn" onClick={() => navigate("/user")}>
                BOOK
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="heading">Book</h3>
            <p className="heading_text">
              Customer Service Contact us
              <br />
              +91-888-482-7342
            </p>
            <button
              className="btn_transparent"
              name="booking-btn"
              id="booking-btn"
              onClick={() => navigate("/user")}
            >
              Book
            </button>
          </div>
          <img src={leaveimg} alt="booking" className="userimg" />
        </div>
      </div>
    </div>
    </>
  );
}

export default LeaveForm;