import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Employee</h3>
            <h1> Use your credentials and log in!</h1>
            <p>
               Enter the necessary informations which are being asked and book your cab
            </p>
            <div className="about__btn">
              <Link to="/emplog" className="btn btn-smart" style={{color:"white",background:'black'}}>
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
