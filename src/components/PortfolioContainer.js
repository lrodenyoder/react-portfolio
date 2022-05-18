import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <div className="flex-row px-1 space-between align-center jumbotron">
          <Header />
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {renderPage()}
      </div>
    );
}

export default PortfolioContainer;
