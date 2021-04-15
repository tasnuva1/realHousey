import React, { Component } from "react";
import "./RecentListItem.scss";

import Content from "../../Components/Content-Container/Content";
import { HouseContext } from "../../Context";
import Loading from "../../Components/Loading/Loading";
import Houses from "../../Components/Houses/Houses";

class RecentListItem extends Component {
  static contextType = HouseContext;
  render() {
    let { loading, featuredHouses: houses } = this.context;
    houses = houses.map((house) => {
      return <Houses key={house.id} house={house} />;
    });

    return (
      <div className="recent-page">
        <div className="list-item--containerr">
          <Content
            heading1="Featured"
            heading2="Our Featured Properties"
            para="Our extensive network in the global real estate market allows us to locate the best properties for investment."
          />
        </div>
        <div className="list-item-boxx">
          <div className={loading ? "Loader-center" : "list-item--box"}>
            {loading ? <Loading /> : houses}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentListItem;
