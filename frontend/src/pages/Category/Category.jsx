import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./Category.scss";

const Category = () => {
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="containerr">
        <div className="box sport">
          <NavLink to="/category/sport">Sport🏅</NavLink>
        </div>
        <div className="box literature">
          <NavLink to="/category/literature">Writing📚</NavLink>
        </div>
        <div className="box science">
          <NavLink to="/category/science">Science🧪</NavLink>
        </div>
        <div className="box politics">
          <NavLink to="/category/politics">Politics🗳️</NavLink>
        </div>
        <div className="box music">
          <NavLink to="/category/music">Music🎵</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
