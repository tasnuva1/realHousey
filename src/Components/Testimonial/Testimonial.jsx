import React from "react";
import "./Testimonial.scss";
import Heading from "../Heading/Heading";

const Testimonial = ({ img, description, title, subTitle, icon }) => {
  return (
    <div className="testimonial-box">
      <div className="testimonial-img">
        <img src={img} alt="Person" />
      </div>
      <div className="testimonial-content--box">
        <div className="testimonial-icon">
          <img src={icon} alt="icon" />
        </div>
        <p className="testimonial-description">{description}</p>
        <Heading heading="heading3">
          <h4>{title}</h4>
        </Heading>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Testimonial;
