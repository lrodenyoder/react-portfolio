import React from "react";

function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col my-1">
        <div className="card hoverCard">
          <img
            src={require("../../assets/project-screenshots/homebuddy-screenshot.jpg")}
            alt="Homebuddy screenshot"
            className="card-img imgHover"
          ></img>
          <div className="card-img-overlay middleHover">
            <h5 className="card-title textHover">
              <a
                href="https://home-buddy-usa.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Homebuddy
              </a>
            </h5>
            <p className="card-text textHover">A home chore tracking app</p>
          </div>
        </div>
      </div>
      <div className="col my-1">
        <div className="card hoverCard">
          <img
            src={require("../../assets/project-screenshots/run-buddy-screenshot.jpg")}
            alt="Homebuddy screenshot"
            className="card-img imgHover"
          ></img>
          <div className="card-img-overlay middleHover">
            <a
              href="https://lrodenyoder.github.io/run-buddy/"
              target="_blank"
              rel="noreferrer"
            >
              Run Buddy
            </a>
            <p className="card-text textHover">HTML and CSS</p>
          </div>
        </div>
      </div>
      <div className="col my-1">
        <div className="card hoverCard">
          <img
            src={require("../../assets/project-screenshots/nutrigainz-screenshot.jpg")}
            alt="Homebuddy screenshot"
            className="card-img imgHover"
          ></img>
          <div className="card-img-overlay middleHover">
            <a
              href="https://jessoliva.github.io/nutrigainz/"
              target="_blank"
              rel="noreferrer"
            >
              Nutrigainz
            </a>
            <p className="card-text textHover">
              A fitness and recipe randomizer app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
