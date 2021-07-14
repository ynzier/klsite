import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
const Portfolio = ({ data }) => {
  let projectImage = "images/portfolio/";

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="" src={projectImage + "02.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="" src={projectImage + "04.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="" src={projectImage + "06.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="" src={projectImage + "05.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="" src={projectImage + "01.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="" src={projectImage + "03.jpg"}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
