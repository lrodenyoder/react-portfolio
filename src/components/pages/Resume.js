import React from "react";

function Resume() {
  return (
    <div className="container">
      <div className="my-2">Front-End Proficiencies</div>
      <ul className="resume-list mx-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <div className="my-2">Back-End Proficiencies</div>
      <ul className="resume-list mx-2">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
      <h6 className="my-2">
        Download My <a className="resume" href={require('../../assets/resume.pdf')} download="Lauren Yoder Resume">Resume</a>
      </h6>
    </div>
  );
}

export default Resume;
