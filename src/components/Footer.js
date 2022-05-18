import React from "react";

function Footer() {
  return (
    <div className="flex-row justify-center">
      <ul className="flex-row">
        <li className='mx-2'>
          <span className="socials">
            <a
              href="https://www.linkedin.com/in/lauren-rodenbusch-yoder-420b35224/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../assets/linkedin.png")}
                alt="LinkedIn icon"
              ></img>
            </a>
          </span>
        </li>
        <li className='mx-2'>
          <span className="socials">
            <a
              href="https://github.com/lrodenyoder"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className='socials'
                src={require("../assets/github.png")}
                alt="GitHub icon"
              ></img>
            </a>
          </span>
        </li>
        <li className='mx-2'>
          <span className="socials">
            <a
              href="https://stackoverflow.com/users/17332983/lauren-rodenbusch-yoder"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../assets/stackoverflow.png")}
                alt="Stack Overflow icon"
              ></img>
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
