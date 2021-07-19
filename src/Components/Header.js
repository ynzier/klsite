import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const Header = () => {
  const name = "KL Healthcare";
  const description = "บริการ E-Service ครบวงจร สำหรับลูกค้าที่สำคัญของเรา";
  let config = {
    num: [4, 10],
    rps: 0.15,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0.4],
    scale: [0.1, 0.4],
    position: "all",
    color: ["#ff0000", "#ff1919"],
    cross: "dead",
    // emitter: "follow",
    random: 15,
  };
  if (Math.random() > 0.95) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }

  const profilepic = "images/icon.png";

  return (
    <header id="home">
      <ParticlesBg type="custom" config={config} bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              หน้าแรก
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#policy">
              นโยบายการรับประกัน
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              ตรวจสอบประกันสินค้า
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              ติดต่อเรา
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <img className="profile-pic" src={profilepic} alt="KLHealthCare" />
          <Fade bottom>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href="#contact" className="button btn project-btn">
                ตรวจสอบประกันสินค้า
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
