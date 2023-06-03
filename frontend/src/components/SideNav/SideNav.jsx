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
        <div className="buttons__cat">
          <p>By Category </p>
          <Button />
        </div>
        <div className="buttons__timeline">
          <p>Scroll: Timeline</p>
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
