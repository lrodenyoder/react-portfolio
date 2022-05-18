import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul className="flex-row">
        <li>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About"}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio"}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact"}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume"}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
