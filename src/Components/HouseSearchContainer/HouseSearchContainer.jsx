import React from "react";
import HouseSearchFilter from "../HouseSearchFilter/HouseSearchFilter";
import HouseSearchList from "../HouseSearchList/HouseSearchList";
import { withHouseConsumer } from "../../Context";
import Loading from "../Loading/Loading";

const HouseContainer = ({ context }) => {
  const { loading, sortedHouses, houses } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <HouseSearchFilter houses={houses} />
      <HouseSearchList houses={sortedHouses} />
    </div>
  );
};

export default withHouseConsumer(HouseContainer);
