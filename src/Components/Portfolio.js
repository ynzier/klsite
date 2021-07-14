import React from "react";
import Fade from "react-reveal";

let id = 0;
const Portfolio = () => {
  let projectImage = "images/portfolio/";

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>ผลิตภัณฑ์ของเรา</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div key={id++} className="columns">
                <div className="item-wrap">
                  <img alt="KLHealthCare" src={projectImage + "02.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <img alt="KLHealthCare" src={projectImage + "04.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <img alt="KLHealthCare" src={projectImage + "06.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <img alt="KLHealthCare" src={projectImage + "05.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item ">
                <div className="item-wrap">
                  <img alt="KLHealthCare" src={projectImage + "01.jpg"} />
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <img alt="KLHealthCare" src={projectImage + "03.jpg"} />
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
