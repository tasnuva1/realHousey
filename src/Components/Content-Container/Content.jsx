import React from "react";

import "./Content.style.scss";
import Heading from "../Heading/Heading";

const Content = ({ children, heading1, heading2, para, mTop, style }) => {
  return (
    <div style={style}>
      <div className={mTop}>
        <h2 className="heading-page">{heading1}</h2>
        <h2>
          <Heading heading="heading2">{heading2}</Heading>
        </h2>
        <p>{para}</p>
        {children}
      </div>
    </div>
  );
};

Content.defaultProps = {
  mTop: "container",
};

export default Content;
