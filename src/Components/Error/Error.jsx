import React from "react";
import { Link } from "react-router-dom";

import "./Error.style.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const Error = () => {
  return (
    <div className="error-box">
      <Heading>Oops! Page not found!</Heading>
      <Link to="/">
        <Button>Return Home</Button>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </Link>
    </div>
  );
};

export default Error;
