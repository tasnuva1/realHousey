import React from "react";
import "./ListItemCard.scss";
import Heading from "../Heading/Heading";

const ListItemCard = ({ image, title, subTitle, price, bd, ba, sqft }) => {
  return (
    <div className="list-item_whole--container">
      <div className="list-item--container">
        <img src={image} alt="Propaties Images" />
        <div className="list-item-main--container">
          <div className="list-item--main">
            <Heading heading="heading3">
              <h3>{title}</h3>
            </Heading>
            <p>{subTitle}</p>
          </div>
          <div className="list-item--details--box">
            <p className="list-item-price">{price}</p>
            <div className="list-item--details">
              <p>{bd} bd</p>
              <p>{ba} ba</p>
              <p>{sqft} sqft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItemCard;
