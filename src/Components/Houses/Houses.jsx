import React from "react";
import PropTypes from "prop-types";

import ListItemCard from "../ListItemCard/ListItemCard";
import defaultImg from "../../External/house-images/house14.jpg";
import { Link } from "react-router-dom";

const Houses = ({ house }) => {
  const {
    name,
    images,
    price,
    haffEndAddress,
    slug,
    beds,
    baths,
    Sqft,
  } = house;
  return (
    <div className="featured-box">
      <Link to={`/houses/${slug}`}>
        <ListItemCard
          image={images[0] || defaultImg}
          title={name}
          subTitle={haffEndAddress}
          price={price}
          bd={beds}
          ba={baths}
          sqft={Sqft}
        />
      </Link>
    </div>
  );
};

Houses.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired,
    usState: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Houses;
