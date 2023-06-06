import React from "react";
import "./HomePage.scss";
import Main from "../../components/Main/Main";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = ({ handleInput, searchTerm, showFigures }) => {
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="container">
        <SearchBar
          label="Search for your favourite Famous Figure!"
          value={searchTerm}
          handleInput={handleInput}
        />
        <Main showFigures={showFigures} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
