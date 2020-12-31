import React, { Component } from "react";
import { HouseContext } from "../../Context";
import "./SingleHouse.scss";
import SingleBg from "../../Components/SingleBg/SingleBg";
import img1 from "../../External/house-images/house11.jpg";
import defaultBg from "../../External/house-images/house11.jpg";
import Error from "../../Components/Error/Error";

export default class SingleHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg,
    };
  }
  static contextType = HouseContext;
  render() {
    const { getHouse } = this.context;
    const house = getHouse(this.state.slug);
    if (!house) {
      return <Error />;
    }

    return (
      <div>
        {" "}
        <SingleBg img={img1} className="single-house-img" house={house} />
      </div>
    );
  }
}
