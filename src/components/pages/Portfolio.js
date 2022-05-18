import React from "react";

function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col my-1">
        <div className="card">
          <img
            src={require("../../assets/homebuddy-screenshot.jpg")}
            alt="Homebuddy screenshot"
            className="card-img"
          ></img>
          <div className="card-img-overlay">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
      <div className="col my-1">
        <div className="card">
          <img
            src={require("../../assets/run-buddy-screenshot.jpg")}
            alt="Homebuddy screenshot"
            className="card-img"
          ></img>
          <div className="card-img-overlay">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
      <div className="col my-1">
        <div className="card">
          <img
            src={require("../../assets/nutrigainz-screenshot.jpg")}
            alt="Homebuddy screenshot"
            className="card-img"
          ></img>
          <div className="card-img-overlay">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;