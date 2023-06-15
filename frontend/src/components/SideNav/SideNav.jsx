import { NavLink } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import "./SideNav.scss";

const SideNav = () => {
  return (
    <>
      <section className="SideNav">
        <div className="logo-container"></div>
        <div className="menu"></div>

        <NavLink
          activeClassName="active"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/home"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Home" />
          <div className="SideNav--Line"></div>
        </NavLink>

        <NavLink
          activeClassName="active"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/all"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="All Figures" />
          <div className="SideNav--Line"></div>
        </NavLink>

        <NavLink
          activeClassName="active"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/category/:category"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="By Category" />
          <div className="SideNav--Line"></div>
        </NavLink>

        <NavLink
          activeClassName="active"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/alive"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Alive" />
          <div className="SideNav--Line"></div>
        </NavLink>

        <NavLink
          activeClassName="active"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/dead"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Dead" />
          <div className="SideNav--Line"></div>
        </NavLink>

        <NavLink
          activeClassName="active"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/customise"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Customise" />
          <div className="SideNav--Line"></div>
        </NavLink>
      </section>
    </>
  );
};

export default SideNav;
