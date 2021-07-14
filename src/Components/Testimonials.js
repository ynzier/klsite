import React from "react";

const Testimonials = ({ data }) => {
  if (!data) return null;

  const testimonials = data.test.map(function (testimonials) {
    return (
      <li key={testimonials.user}>
        <blockquote>
          <p>{testimonials.text}</p>
          <cite>{testimonials.user}</cite>
        </blockquote>
      </li>
    );
  });

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="four columns header-col">
            <h1>ความคิดเห็นจากลูกค้า</h1>
          </div>
          <div className="eight columns flex-container">
            <ul className="slides">
              <li key={testimonials.user}>
                <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
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
