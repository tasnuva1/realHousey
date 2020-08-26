import React from "react";
import "./SmallCard.scss";

const SmallCard = ({ title, location }) => {
  return (
    <div className="whole-contenter">
      <div className="property-card">
        <img className="property-image" src={location} alt="React Logo" />
        <h5> {title} </h5>
      </div>
    </div>
  );
};

export default SmallCard;
