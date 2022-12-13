import React from "react";

import "../CSS/NavBarAndFooter.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <p>© 2022 Alwazebrand Design Agency.</p>
        </div>
        <div className="footer-right">
          <ul>
            <a href="https://www.instagram.com/alwazebrand/" target="_blank">
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/alwazebrand/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://twitter.com/alwazebrand" target="_blank">
              Twitter
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
