import React from "react";
import "./ImageGallaryIcon.scss";
import photoIcon from "../../External/icons/photos.svg";
const ImageGallaryIcon = ({ onClick }) => {
  return (
    <div className="image-gallary-icon" onClick={onClick}>
      {/* <a href="https://twitter.com/Dave_Conner" className="btn btn-2">Hover</a>  */}
      <img
        src={photoIcon}
        className="btn-photo btn-photo-icon"
        alt="photoIcon"
      />
    </div>
  );
};

export default ImageGallaryIcon;
