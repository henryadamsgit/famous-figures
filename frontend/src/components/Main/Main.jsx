import React from "react";
import "./Main.scss";
import Card from "../Card/Card";

const Main = ({ showFigures, searchTerm }) => {
  let filteredFigures = [];

  if (showFigures && Array.isArray(showFigures)) {
    filteredFigures = showFigures.filter((figure) =>
      figure.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  let cards = null;

  if (filteredFigures.length > 0) {
    cards = filteredFigures.map((figure) => (
      <Card key={figure.id} figure={figure} />
    ));
  } else if (showFigures === undefined) {
    cards = <p>Loading...</p>;
  } else {
    cards = <p>No figures found.</p>;
  }

  return <div className="main">{cards}</div>;
};

export default Main;
