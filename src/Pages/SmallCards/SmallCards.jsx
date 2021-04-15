import React from "react";

import "./SmallCards.scss";
import SmallCard from "../../Components/SmallCard/SmallCard";
import icon1 from "../../External/icons/icon-1.svg";
import icon2 from "../../External/icons/icon-2.svg";
import icon3 from "../../External/icons/icon-3.svg";

const SmallCards = () => {
  return (
    <div className="cantenter">
      <div className="card1">
        <SmallCard title="Property Managers" location={icon1}></SmallCard>
      </div>
      <div className="card2">
        <SmallCard title="Home loan" location={icon2}></SmallCard>
      </div>
      <div className="card3">
        <SmallCard title="3D Home Tour" location={icon3}></SmallCard>
      </div>
    </div>
  );
};

export default SmallCards;
