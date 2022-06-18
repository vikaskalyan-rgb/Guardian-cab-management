import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>The Admin</h3>
            <h1>Use your credentials and login!</h1>
            <p>
              Login to check for the requirement of the employees and assigning cabs according to their conviniences.
            </p>
            <div className="about__btn">
              <Link to="/adminlogin" className="btn btn-smart" style={{color:"white",background:'black'}}>
                LOGIN
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://images.pexels.com/photos/2047910/pexels-photo-2047910.jpeg" alt="hhhh" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
