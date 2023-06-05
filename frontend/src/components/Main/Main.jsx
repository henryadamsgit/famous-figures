import React from "react";
import "./Main.scss";
import Card from "../Card/Card";

const Main = ({ filteredFigures }) => {
  return (
    <div className="main">
      {filteredFigures.map((figure) => (
        <Card key={figure.id} data={figure} />
      ))}
    </div>
  );
};

export default Main;

