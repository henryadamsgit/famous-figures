import React from "react";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";

const HomePage = () => {
  return (
    <div className="layout">
      <div className="topNav">
        <SearchBar />
        <h1>TopNav here</h1>
      </div>
      <div className="sideNav">
        <p>This is the SideNav</p>
      </div>
      <div className="container">
        <p>This will contain the main body </p>
        <Card/>
      </div>
      <div className="footer">
        <p className="footer__heading">i am the footer</p>
      </div>
    </div>
  );
};

export default HomePage;
