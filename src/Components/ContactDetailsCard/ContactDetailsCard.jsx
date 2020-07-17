import React from "react";
import "./ContactDetailsCard.scss";

import Heading from "../Heading/Heading";
// import table from "../../External/icons/table.svg";

const ContactDetailsCard = ({
  name,
  mobileNum,
  licenseNum,
  email,
  description,
}) => {
  return (
    <div className="contact-details-card-boxx">
      <div className="contact-details-box">
        <div className="contact-details-heading">
          <Heading heading="heading4">Contact Details</Heading>
        </div>
        <div className="contact-details-title">
          <h3>REALTOR /Listing provided by</h3>
        </div>
        <div className="contact-details-name">
          <h3>{name}</h3>
        </div>
        <div className="contact-details-info">
          <p>Mobile: {mobileNum}</p>
          <p>License: {licenseNum}</p>
          <p>{email}</p>
        </div>
        <div className="contact-details-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsCard;
