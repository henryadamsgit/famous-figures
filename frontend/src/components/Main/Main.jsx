import React from "react";
import "./Main.scss";
import Card from "../Card/Card";

const Main = ({ showFigures }) => {
  let cards = null;
  console.log(showFigures);

  if (showFigures && Array.isArray(showFigures)) {
    cards = showFigures.map((figure) => (
      <Card key={figure.id} figure={figure} />
    ));
  } else {
    // Handle the case when showFigures is not an array
    cards = <p>No figures to display</p>;
  }

  return <div className="main">{cards}</div>;
};

export default Main;
