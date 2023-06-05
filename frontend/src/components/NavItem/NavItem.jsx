import React from "react";
import "./NavItem.scss";

const NavItem = ({ name}) => {
  return (
    <div className="SideNavComponent">
      <h3>{name}</h3>
    </div>
  );
};

export default NavItem;
