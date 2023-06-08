import React from "react";
import "./CategoryPolitics.scss";
import Main from "../../components/Main/Main";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";

const CategoryPolitics = ({ handleInput, searchTerm, showFigures }) => {
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="container">
        <SearchBar
          label="Search for your favourite Famous Figure!"
          handleInput={handleInput}
        />
        <Main
          showFigures={showFigures}
          handleInput={handleInput}
          searchTerm={searchTerm}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPolitics;
