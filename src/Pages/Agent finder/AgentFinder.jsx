import React from "react";
import "./AgentFinder.style.scss";
import { withHouseConsumer } from "../../Context";

import AgentPage from "../../Components/AgentPage/AgentPage";
import Loading from "../../Components/Loading/Loading";
import Content from "../../Components/Content-Container/Content";
import Footer from "../../Components/Footer/Footer";

const AgentFinder = ({ context }) => {
  const { loading, houses } = context;
  if (loading) {
    return <Loading />;
  }
  let agentwidth = {
    width: "90%",
    zIndex: "-1",
    paddingBottom: "10rem",
  };

  return (
    <div id="agent-finder-hight">
      <div className="agent-finder-content">
        <Content
          heading1="Agents"
          heading2="All Of Our Agents"
          para="All The Agents Are In The Current Listing Data Of The Last Update"
        />
      </div>
      <div className="list-item-boxx">
        <div className="list-item--box" style={agentwidth}>
          {houses.map((item) => {
            return <AgentPage key={item.id} house={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withHouseConsumer(AgentFinder);
