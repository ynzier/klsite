import React from "react";
import Fade from "react-reveal";

const About = () => {
  const profilepic = "images/icon.png";
  const bio = "รอข้อมูล";

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="KLHealthCare"
            />
          </div>
          <div className="nine columns main-col">
            <h2>เกี่ยวกับเรา</h2>

            <p>{bio}</p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
