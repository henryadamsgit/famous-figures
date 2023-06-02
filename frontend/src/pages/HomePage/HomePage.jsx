import React from "react";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="layout">
      <div className="topNav">
        <SearchBar />
        <h1>TopNav here</h1>
      </div>
      <div className="sideNav">
        <p>This is the SideNav</p>
        <SideNav />
      </div>
      <div className="container">
        <p>This will contain the main body </p>
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
