import React from "react";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="cards">
      <div className="figure">
        <img className="figure__image" src={data.image} alt="figure-image" />
        <h3 className="figure__name">{data.name}</h3>
      </div>
    </div>
  );
};

export default Card;
