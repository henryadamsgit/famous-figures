import React from "react";
import "./TopNav.scss";
import SearchBar from "../SearchBar/SearchBar";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="logo">
        <h2>FF</h2>
      </div>
      <h3 className="title">Welcome To Famous Figures</h3>
      <div className="menu">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <SearchBar />
    </div>
  );
};

export default TopNav;
