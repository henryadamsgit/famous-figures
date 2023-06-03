import React from "react";
import Button from "../Button/Button";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="buttons">
        <div className="buttons__home">
          <p>Home</p>
          <Button />
        </div>
        <div className="buttons__figures">
          <p>All Figures</p>
          <Button />
        </div>
        <div className="buttons__nat">
          <p>By Nationality </p>
          <Button />
        </div>
        <div className="buttons__era">
          <p>By Era </p>
          <Button />
        </div>
        <div className="buttons__gender">
          <p>Switch: Male/Female</p>
          <Button />
        </div>
        <div className="buttons__alive">
          <p>Switch: Alive/Dead</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
