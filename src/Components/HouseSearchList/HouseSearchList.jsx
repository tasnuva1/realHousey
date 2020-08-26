import React from "react";
import "./HouseSearchList.scss";
import Heading from "../Heading/Heading";
import Houses from "../../Components/Houses/Houses";

const HouseSearchList = ({ houses }) => {
  if (houses.length === 0) {
    return (
      <div className="house-search-ability">
        <Heading heading="heading3">
          Unfortunately, No Houses Matched Your Search Results.
        </Heading>
      </div>
    );
  }

  return (
    <div className="list-item-boxx">
      <div className="list-item--box">
        {houses.map((item) => {
          return <Houses key={item.id} house={item} />;
        })}
      </div>
    </div>
  );
};

export default HouseSearchList;
