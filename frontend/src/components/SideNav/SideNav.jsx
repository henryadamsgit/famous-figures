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
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/home"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Home" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/all"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="All Figures" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/category"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="By Category" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/era"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="By Era" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/gender"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Gender" />
        </NavLink>

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/DeadOrAlive"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Dead/Alive" />
        </NavLink>
      </section>
    </>
  );
};

export default SideNav;
