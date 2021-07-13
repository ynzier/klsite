import React from "react";
import Fade from "react-reveal";

const About = () => {
  const profilepic = "images/icon.png";
  const bio = "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.";

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Nordic Giant Profile Pic"
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
