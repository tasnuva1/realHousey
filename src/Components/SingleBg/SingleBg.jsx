import React from "react";
import "./SingleBg.scss";
import ImageGallary from "../ImageGallary/ImageGallary";

import ParallaxCard from "../ParallaxCard/ParallaxCard";

const SingleBg = ({ house }) => {
  const { name, haffStartAddress, haffEndAddress, images } = house;

  return (
    <div className="nav-background-color-Container">
      <div className="nav-background-color"></div>
      <div className="parallaxx__imagee">
        <div
          style={{
            backgroundImage: `url(${images[0]})`,
            filter: "brightness(0.8)",
          }}
          className="parallaxx__image--container"
        ></div>
        <div className="parallaxx__inner--box">
          <h2>{name}</h2>
          <p className="parallaxx__box--address">{haffStartAddress}</p>
          <p>{haffEndAddress}</p>
        </div>
        <div className="parallaxx__box">
          <div className="parallaxx__card">
            <ImageGallary
              mainImage={images[0]}
              img1={images[1]}
              img2={images[2]}
              img3={images[3]}
              img4={images[4]}
              house={house}
            />
            <div className="parallaxx__card-2">
              <ParallaxCard house={house} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBg;
