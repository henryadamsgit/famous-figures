import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.scss";

const placeholderImage = "https://example.com/placeholder-image.jpg";

const Card = ({ figure }) => {
  const imageUrl = figure.image || placeholderImage;

  return (
    <div className="cards">
      <NavLink to={`/figure/${figure.name}`} className="card__link">
        <div className="figure">
          <div className="figure__overlay">
            <p className="figure__overlay-text">More Info</p>
          </div>
          <h3 className="figure__name">{figure.name}</h3>
          <p className="figure__category">{figure.category}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
