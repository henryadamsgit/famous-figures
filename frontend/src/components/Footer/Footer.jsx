import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__name">Designed By Henry &#169;</div>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="linkedin"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="github"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
