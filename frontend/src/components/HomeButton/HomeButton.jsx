import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate("/");
  };

  return (
    <button className="moreInfo__button" onClick={handleReturnClick}>
      Return Home
    </button>
  );
};

export default HomeButton;
