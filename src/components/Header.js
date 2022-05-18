import React from 'react';

function Header() {

    return (
      <header className="flex-row px-1">
        <h1>
          <a href="./index.html">
            <span className="icon-padding">
              <i class="fas fa-laptop-code"></i>
            </span>
            Lauren Yoder
          </a>
        </h1>
      </header>
    );
};

export default Header;