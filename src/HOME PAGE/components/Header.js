import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   
    <div className="banners">
      <div className="banners__content">
        <div className="container">
          <div className="banners__text">
          <br/> <br/> <br/>
            <h3>GUARDIAN</h3>
            <h1>Cab Management</h1>
            <p>
              Your conviniences Our Responsibility!
            </p>
            <div className="banners__btn">
              <Link to='/About' className="btn btn-smart" style={{color:"white",background:'black'}}>
                About Us
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
