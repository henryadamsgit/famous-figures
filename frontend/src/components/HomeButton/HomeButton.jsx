import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate("/all");
  };

  return (
    <button className="returnHome__button" onClick={handleReturnClick}>
      Back
    </button>
  );
};

export default HomeButton;
