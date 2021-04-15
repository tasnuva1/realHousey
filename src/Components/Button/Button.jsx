import React from "react";
import "./Button.style.scss";

const Button = ({ children, btn }) => {
  return <button className={btn}>{children}</button>;
};

Button.defaultProps = {
  btn: "primary-btn",
};

export default Button;
