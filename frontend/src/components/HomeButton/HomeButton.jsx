import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate(-1);
  };

  return (
    <button className="returnHome__button" onClick={handleReturnClick}>
      Go Back
    </button>
  );
};

export default HomeButton;
