import React from "react";
import { useContext } from "react";

import "./HouseSearchFilter.scss";
import "./HouseSearchFilter.scss";
import { HouseContext } from "../../Context";
import Content from "../Content-Container/Content";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const HouseSearchFilter = ({ houses }) => {
  const context = useContext(HouseContext);
  const {
    handleChange,
    type,
    usState,
    priceNum,
    minPriceNum,
    maxPriceNum,
    beds,
    baths,
    minSqftNum,
    maxSqftNum,
  } = context;

  // get unique types
  let types = getUnique(houses, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get unique types
  let usStates = getUnique(houses, "usState");
  // add all
  usStates = ["all", ...usStates];
  // map to jsx
  usStates = usStates.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let cushan = getUnique(houses, "beds");
  // cushan = ["all", ...cushan];
  cushan = cushan.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let tol = getUnique(houses, "baths");

  tol = tol.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section>
      <Content heading1="Search" heading2="Search Houses" mTop="yes" />
      <form action="" className="search-box">
        <div action="" className="search-box-inner">
          <div className="house-search-filter-container">
            <label htmlFor="type">House Type</label>
            <div className="select">
              <select
                name="type"
                id="type slt-1"
                value={type}
                onChange={handleChange}
              >
                {types}
              </select>
            </div>
          </div>
          <div className="house-search-filter-container">
            <label htmlFor="usState">House State</label>
            <div className="select">
              <select
                name="usState"
                id="usState"
                value={usState}
                onChange={handleChange}
              >
                {usStates}
              </select>
            </div>
          </div>
            <div className="house-search-filter-container">
            <div className="beds-container">
              <label htmlFor="beds">House Beds</label>
              <div className="select">
                <select
                  name="beds"
                  id="beds"
                  value={beds}
                  onChange={handleChange}
                >
                  {cushan}
                </select>
              </div>
            </div>

          </div>
          <div className="house-search-filter-container">
            <label htmlFor="baths">House Baths</label>
            <div className="select">
              <select
                name="baths"
                id="baths"
                value={baths}
                onChange={handleChange}
              >
                {tol}
              </select>
            </div>
          </div>
          <div className="house-search-filter-container">
            <label htmlFor="priceNum">House Price ${priceNum}</label>
            <input
              type="range"
              name="priceNum"
              min={minPriceNum}
              max={maxPriceNum}
              id="priceNum"
              value={priceNum}
              onChange={handleChange}
              className="slider-range"
            />
          </div>

          <div className="house-search-filter-container">
            <label htmlFor="SqftNum">House Sqft</label>
            <div className="">
              <input
                type="number"
                name="minSqftNum"
                id="SqftNum"
                value={minSqftNum}
                onChange={handleChange}
                className="input-num-1"
              />
              <input
                type="number"
                name="maxSqftNum"
                id="SqftNum"
                value={maxSqftNum}
                onChange={handleChange}
                className=""
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HouseSearchFilter;
