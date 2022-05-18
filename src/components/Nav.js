import React, {useEffect} from "react";

function Nav({ currentPage, handlePageChange }) {
  useEffect(() => {
    document.title = currentPage
  });
  
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-1">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About"}
          >
            About Me
          </a>
        </li>
        <li className="mx-1">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio"}
          >
            Portfolio
          </a>
        </li>
        <li className="mx-1">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact"}
          >
            Contact
          </a>
        </li>
        <li className="mx-1">
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
