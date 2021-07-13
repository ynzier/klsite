import React from "react";
import Fade from "react-reveal";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">
              <li key="facebook">
                <a href="https://www.facebook.com/klhealthcare.thailand/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 KL Healthcare</li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
