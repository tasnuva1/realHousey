import React from "react";

import Card from "../../Components/Card/Card";
import "./Cards.scss";

import bigIcon1 from "../../External/icons/big-icon.svg";
import bigIcon2 from "../../External/icons/big-icon2.svg";
import bigIcon3 from "../../External/icons/big-icon3.svg";

const Cards = () => {
  return (
    <div className="rap">
      <div className="card-1">
        <Card
          title="Property cost analysis"
          description="Use PropCalc to search any address
to get the weekly cost to own the property."
          location={bigIcon1}
        />
      </div>
      <div className="card-2">
        <Card
          title="We do the hard work"
          description="Our expert team undertake a strict due diligence process when selecting investment opportunities for our investors."
          location={bigIcon2}
        />
      </div>
      <div className="card-3">
        <Card
          title="Find an agent"
          description="Find your next agent, search by agency
or location and see their current listings."
          location={bigIcon3}
        />
      </div>
    </div>
  );
};

export default Cards;
