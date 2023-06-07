import React from "react";
import "./TopNav.scss";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="logo">
        <h2>FF</h2>
      </div>
      <h3 className="title">Welcome To Famous Figures</h3>
      <div className="menu">
        <p>Home</p>
        <NavLink>
          <p>Customise</p>
        </NavLink>
      </div>
    </div>
  );
};

export default TopNav;
