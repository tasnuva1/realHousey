import React from "react";
import "./Heading.style.scss";

const Heading = ({ children, heading, style }) => {
  return (
    <div className={heading} style={style}>
      {children}
    </div>
  );
};

Heading.defaultProps = {
  heading: "heading1",
};

export default Heading;
