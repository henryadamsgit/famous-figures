import React from "react";
import "./Card.scss";

const placeholderImage = "https://example.com/placeholder-image.jpg";

const Card = ({ figure }) => {
  const imageUrl = figure.image || placeholderImage;

  return (
    <div className="cards">
      <div className="figure">
        <img className="figure__image" src={imageUrl} alt="figure-image" />
        <h3 className="figure__name">{figure.name}</h3>
      </div>
    </div>
  );
};

export default Card;
