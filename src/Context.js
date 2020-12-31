import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

const HouseContext = React.createContext();

// Client.getEntries({
//   content_type: "realHousey",
// }).then((response) => console.log(response.items));

// console.log(items);

export default class HouseProvider extends Component {
  state = {
    houses: [],
    sortedHouses: [],
    featuredHouses: [],
    loading: true,
    type: "all",
    usState: "all",
    priceNum: 0,
    minPriceNum: 0,
    maxPriceNum: 0,
    beds: 1,
    baths: 1,
    minSqftNum: 0,
    maxSqftNum: 0,
  };

  getDate;
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "realHousey",
        // order: "sys.createdAt",
        order: "fields.priceNum",
      });
      let houses = this.formatData(response.items);
      // console.log(houses);
      let featuredHouses = houses.filter((house) => house.featured === true);
      let maxPriceNum = Math.max(...houses.map((item) => item.priceNum));
      let maxSqftNum = Math.max(...houses.map((item) => item.sqftNum));

      this.setState({
        houses,
        featuredHouses,
        sortedHouses: houses,
        loading: false,
        priceNum: maxPriceNum,
        maxPriceNum,
        maxSqftNum,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();

    // // Commit
    // let houses = this.formatData(items);
    // console.log(houses);
    // let featuredHouses = houses.filter((house) => house.featured === true);
    // let maxPriceNum = Math.max(...houses.map((item) => item.priceNum));
    // let maxSqftNum = Math.max(...houses.map((item) => item.sqftNum));

    // this.setState({
    //   houses,
    //   featuredHouses,
    //   sortedHouses: houses,
    //   loading: false,
    //   priceNum: maxPriceNum,
    //   maxPriceNum,
    //   maxSqftNum,
    // });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let imagesURLs = item.fields.images.map((image) => image.fields.file.url);
      let imagesURLsGalary = item.fields.images.map(
        (image) => image.fields.file
      );
      // for imagesURLs and 4 other main.
      let imgR = item.fields.imgR.fields.file.url;
      let house = {
        ...item.fields,
        images,
        id,
        imgR,
        imagesURLs,
        imagesURLsGalary,
      };
      // console.log(house);
      return house;
    });
    return tempItems;
  }

  getHouse = (slug) => {
    let tempHouses = [...this.state.houses];
    const house = tempHouses.find((house) => house.slug === slug);
    return house;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterHouses
    );
  };

  filterHouses = () => {
    let {
      houses,
      type,
      usState,
      priceNum,
      beds,
      baths,
      minSqftNum,
      maxSqftNum,
    } = this.state;

    let tempHouses = [...houses];
    // Transform value
    beds = parseInt(beds);
    baths = parseInt(baths);
    priceNum = parseInt(priceNum);

    // filter by type
    if (type !== "all") {
      tempHouses = tempHouses.filter((house) => house.type === type);
    }

    // filter by usState
    if (usState !== "all") {
      tempHouses = tempHouses.filter((house) => house.usState === usState);
    }

    // filter by beds
    if (beds !== 1) {
      tempHouses = tempHouses.filter((house) => house.beds >= beds);
    }

    // filter by baths
    if (baths !== 1) {
      tempHouses = tempHouses.filter((house) => house.baths >= baths);
    }

    // filter by priceNum
    tempHouses = tempHouses.filter((house) => house.priceNum <= priceNum);

    // filter by sqftNum
    tempHouses = tempHouses.filter(
      (house) => house.sqftNum >= minSqftNum && house.sqftNum <= maxSqftNum
    );

    // Change State
    this.setState({
      sortedHouses: tempHouses,
    });
  };

  render() {
    return (
      <HouseContext.Provider
        value={{
          ...this.state,
          getHouse: this.getHouse,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}

const HouseConsumer = HouseContext.Consumer;

export { HouseProvider, HouseConsumer, HouseContext };

export function withHouseConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HouseConsumer>
        {(value) => <Component {...props} context={value} />}
      </HouseConsumer>
    );
  };
}
