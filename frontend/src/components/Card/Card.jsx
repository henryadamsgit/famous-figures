import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="cards">
      <div className="figure">
        <h3 className="figure__name"></h3>
        <img className="figure__image" src={""} alt="figure-image" />
        <p className="figure__category"></p>
        <p className="figure__biography"></p>
        <p className="figure__birth"></p>
        <p className="figure__death"></p>
      </div>
    </div>
  );
};

export default Card;
