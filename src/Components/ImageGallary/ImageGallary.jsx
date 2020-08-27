import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./ImageGallary.scss";

import SimpleImageSlider from "react-simple-image-slider";
import icon from "../../External/icons/close.svg";
import ImageGallaryIcon from "../ImageGallaryIcon/ImageGallaryIcon";

const ImageGallary = ({ mainImage, img1, img2, img3, img4, house }) => {
  const [openGallary, setopenGallary] = useState(false);

  const { imagesURLs } = house;

  const isTablet = useMediaQuery({ query: "(max-width: 794px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 424px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 333px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 206px)" });

  let width;
  let height;
  if (isTablet) {
    width = "130rem";
  } else if (isTabletOrMobile) {
    width = "100rem";
  } else if (isMobile) {
    width = "80rem";
  } else if (isSmallMobile) {
    width = "70rem";
  } else {
    width = "180rem";
  }

  const SmallBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  };

  return (
    <>
      <div className="image-gallary-container">
        <img className="image-gallary-main" src={mainImage} alt="main-image" />
        <div className="image-gallary-box--container">
          <div className="image-gallary-box1" style={{ SmallBox }}>
            <img src={img1} alt="image" />
            <img src={img2} alt="image" />
          </div>
          <div className="image-gallary-box2" style={{ SmallBox }}>
            <img src={img3} alt="image" />
            <img
              src={img4}
              alt="image"
              className="popup-button"
              onClick={() => setopenGallary(true)}
            />
          </div>
          <ImageGallaryIcon onClick={() => setopenGallary(true)} />
        </div>
      </div>
      {/* popup */}
      {openGallary && (
        <div className="popup-slider">
          <div className="image-popup-box">
            {isMobile ? (
              <SimpleImageSlider
                width={
                  (isMobile ? "80rem" : "100rem") &&
                  (isSmallMobile ? "70rem" : "80rem")
                }
                height={
                  (isTablet ? "70rem" : "80rem") &&
                  (isTabletOrMobile ? "50rem" : "70rem")
                }
                slideDuration={1.2}
                images={imagesURLs}
              />
            ) : (
              <SimpleImageSlider
                width={
                  (isTablet ? "130rem" : "150rem") &&
                  (isTabletOrMobile ? "100rem" : "130rem")
                }
                height={
                  (isTablet ? "70rem" : "80rem") &&
                  (isTabletOrMobile ? "50rem" : "70rem")
                }
                slideDuration={1.2}
                images={imagesURLs}
              />
            )}
            <img
              src={icon}
              alt="social link"
              onClick={() => setopenGallary(false)}
              className="close-gallary"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallary;
