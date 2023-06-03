import React from "react";
import "./Card.scss";
import Ali from "../../assets/images/aliphoto.jpeg";

const Card = () => {
  return (
    <div className="cards">
      <div className="figure">
        <img className="figure__image" src={Ali} alt="figure-image" />
        <h3 className="figure__name">Muhammad Ali</h3>
      </div>
    </div>
  );
};

export default Card;
