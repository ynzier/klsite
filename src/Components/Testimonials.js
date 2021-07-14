import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="six columns header-col">
            <h1>ความคิดเห็นจากลูกค้า</h1>
          </div>
          <div className="six columns flex-container">
            <ul className="slides">
              <li key="ผู้รับรอง">
                <blockquote>
                  <p>รีวิว</p>
                  <cite>ผู้รับรอง</cite>
                </blockquote>
              </li>
            </ul>
            <ul className="slides">
              <li key="ผู้รับรอง">
                <blockquote>
                  <p>รีวิว</p>
                  <cite>ผู้รับรอง</cite>
                </blockquote>
              </li>
            </ul>
            <ul className="slides">
              <li key="ผู้รับรอง">
                <blockquote>
                  <p>รีวิว</p>
                  <cite>ผู้รับรอง</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
