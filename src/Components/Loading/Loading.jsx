import React from "react";
import Heading from "../Heading/Heading";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader-heading">
        <Heading heading="heading3">Houses Data Is Loading...</Heading>
      </div>
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
};

export default Loading;
