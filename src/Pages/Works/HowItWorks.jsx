import React from "react";
import "./HowItWorks.scss";

import Content from "../../Components/Content-Container/Content";

const HowItWorks = () => {
  return (
    <div className="containerr">
      <Content
        heading1="Works"
        heading2="How It Works"
        para="
        Our to-the-minute database lets you search for your dream home. Then we’ll connect you to one of our top local agents who’ll help make your real estate dreams a reality."
      />
    </div>
  );
};

export default HowItWorks;
