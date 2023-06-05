import React from "react";
import "./Main.scss";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const Main = ({ filteredFigures }) => {
  return (
    <div className="main">
      {filteredFigures.map((figure) => (
        <div key={figure.id}>
          <NavLink
            to={`/figures/${figure.id}`}
            className="custom-link"
            activeClassName="active"
          >
            <Card data={figure} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Main;
