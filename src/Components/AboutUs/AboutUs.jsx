import React from "react";
import "./AboutUs.style.scss";
import Heading from "../Heading/Heading";

const AboutUs = () => {
  return (
    <div className="whole-box" id="about">
      <div className="about-us-page">
        <div className="img-box">
          <img
            src={require("../../External/house-images/house12.jpg")}
            alt="Best Houses"
          />
        </div>
        <div className="content">
          <h2 className="heading-page">About Us</h2>
          <h2 className="heading-mainn">
            <Heading heading="headingv2">
              We Provide The Best <span></span> Property For You!
            </Heading>
          </h2>
          <p className="about-dis">
            A brand you can trust. Landlord tools built by industry experts and
            the brand that knows real estate. Fill vacancies and manage
            properties. <span className="line-height"></span>
            Landlording made simple, whether you have one rental or an entire
            portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
