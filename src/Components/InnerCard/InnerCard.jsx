import React from 'react';
import './InnerCard.scss';

import icon1 from '../../External/icons/bed.svg';
import icon2 from '../../External/icons/basin.svg';
import icon3 from '../../External/icons/angle.svg';

const InnerCard = ({ title, subTitle, beds, baths, sqft }) => {
  return (
    <div className='inner-card-boxx'>
      <div className='inner-card-box'>
        <div className='inner-card-box-inner'>
          <div className='inner-card-box_1'>
            <h2 className='inner-card-title'>{title}</h2>
            <h2 className='inner-card-subTitle'>{subTitle}</h2>
          </div>
          <div className='inner-card-icon-box'>
            <div className='inner-card-box1'>
              <img src={icon1} alt='' />
              <p>{beds} Beds</p>
            </div>
            <div className='inner-card-box2'>
              <img src={icon2} alt='' />
              <p>{baths}</p>
              <p>Baths</p>
            </div>
            <div className='inner-card-box3'>
              <img src={icon3} alt='' />
              <p>{sqft}</p>
              <p>Sqft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerCard;
