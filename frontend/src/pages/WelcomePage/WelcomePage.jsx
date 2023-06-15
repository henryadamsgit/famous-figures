import React from "react";
import "./WelcomePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const WelcomePage = ({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
  handleSubmit,
  handleEnterSite,
}) => {
  return (
    <div className="welcome">
      <h1 className="welcome-heading">Welcome to Famous Figures</h1>
      <form className="welcome-form" onSubmit={handleSubmit}>
        <p className="welcome-request">Please enter your name to enter</p>
        <label className="welcome-label">
          First Name:
          <input
            className="welcome-input"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label className="welcome-label">
          Last Name:
          <input
            className="welcome-input"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <br />
        <NavLink to="/home">
          <button
            className="welcome-button"
            type="submit"
            onClick={() => handleEnterSite(firstName, lastName)}
          >
            Enter
          </button>
        </NavLink>
      </form>
      <footer className="welcome-footer">
        <div className="welcome-name">Designed By Henry Adams &#169;</div>
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/henry-bruce-adams/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
          </a>
          <a
            href="https://github.com/henryadamsgit?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="footer__icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
