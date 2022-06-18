import React from "react";

const Count = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>120</h1>
              <p>Employees</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>50</h1>
              <p>Vehicles</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>25</h1>
              <p>Transport Cordinators</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>50</h1>
              <p>Drivers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
