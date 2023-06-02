import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="layout">
      <div className="topNav">
        <h1>TopNav here</h1>
      </div>
      <div className="sideNav">
        <p>This is the SideNav</p>
      </div>
      <div className="container">
        <p>This will contain the main body </p>
      </div>
      <div className="footer">
        <p className="footer__heading">i am the footer</p>
      </div>
    </div>
  );
};

export default HomePage;
