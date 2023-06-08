import { NavLink } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import "./SideNav.scss";
import Line from "../../assets/images/nav-line.svg";

const SideNav = () => {
  return (
    <>
      <section className="SideNav">
        <div className="logo-container"></div>
        <div className="menu"></div>

        <img className="SideNav--line" src={Line} id="line1" alt="line" />
        <img className="SideNav--line" src={Line} id="line1" alt="line" />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Home" />
        </NavLink>

        <img className="SideNav--line" src={Line} id="line1" alt="line" />
        <img className="SideNav--line" src={Line} id="line1" alt="line" />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/all"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="All Figures" />
        </NavLink>

        <img className="SideNav--line" src={Line} id="line1" alt="line" />
        <img className="SideNav--line" src={Line} id="line1" alt="line" />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/category/:category"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="By Category" />
        </NavLink>

        <img className="SideNav--line" src={Line} id="line1" alt="line" />
        <img className="SideNav--line" src={Line} id="line1" alt="line" />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/alive"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Alive" />
        </NavLink>

        <img className="SideNav--line" src={Line} id="line1" alt="line" />
        <img className="SideNav--line" src={Line} id="line1" alt="line" />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/dead"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Dead" />
        </NavLink>
        <img className="SideNav--line" src={Line} id="line1" alt="line" />
        <img className="SideNav--line" src={Line} id="line1" alt="line" />

        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/customise"
          style={{ textDecoration: "none" }}
        >
          <NavItem name="Customise" />
        </NavLink>

        <img className="SideNav--line" src={Line} id="line1" alt="line" />
        <img className="SideNav--line" src={Line} id="line1" alt="line" />
      </section>
    </>
  );
};

export default SideNav;
