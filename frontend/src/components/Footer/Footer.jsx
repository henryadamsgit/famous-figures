import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__name">Designed By Henry Adams &#169;</div>
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
    </div>
  );
};

export default Footer;

