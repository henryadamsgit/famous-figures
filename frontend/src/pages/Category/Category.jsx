import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./Category.scss";

const Category = ({ handleInput, searchTerm, showFigures }) => {
  return (
    <div className="layout">
      <TopNav />
      <SideNav />
      <div className="containerr">
        <div className="box sport">
          <NavLink to="/sport">Sport</NavLink>
        </div>
        <div className="box literature">
          <NavLink to="/literature">Literature</NavLink>
        </div>
        <div className="box science">
          <NavLink to="/science">Science</NavLink>
        </div>
        <div className="box politics">
          <NavLink to="/politics">Politics</NavLink>
        </div>
        <div className="box music">
          <NavLink to="/music">Music</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
