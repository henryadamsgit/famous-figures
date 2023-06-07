import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

const Alive = ({ handleInput, searchTerm, showFigures }) => {
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="container">
        <SearchBar
          label="Search for your favourite Famous Figure!"
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <Main showFigures={showFigures} searchTerm={searchTerm} />
      </div>
      <Footer />
    </div>
  );
};

export default Alive;
