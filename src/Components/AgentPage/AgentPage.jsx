import React from "react";
import "./AgentPage.scss";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";

const AgentPage = ({ house }) => {
  const { nameR, imgR, mobileNum, licenseNum, email, description } = house;

  return (
    <div className="contactdetail-card">
      <ContactDetailsCard
        name={nameR}
        img={imgR}
        mobileNum={mobileNum}
        licenseNum={licenseNum}
        email={email}
        description={description}
      />
    </div>
  );
};

export default AgentPage;
