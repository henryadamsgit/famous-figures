import React from "react";
import "./NavItem.scss";

const NavItem = ({ name }) => {
  return (
    <div className="navItem">
      <h3 className="navItem__font">{name}</h3>
    </div>
  );
};

export default NavItem;
