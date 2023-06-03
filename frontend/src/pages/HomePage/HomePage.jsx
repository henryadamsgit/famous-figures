import React from "react";
import "./HomePage.scss";
import Card from "../../components/Card/Card";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="container">
        <SearchBar />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
