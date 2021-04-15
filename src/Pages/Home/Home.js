import React from 'react';
import './Home.style.scss';

import Main from '../../Components/Main/Main.Component';
import AboutUs from '../../Components/AboutUs/AboutUs';
import SmallCards from '../SmallCards/SmallCards';
import Works from '../Works/HowItWorks';
import Cards from '../Cards/Cards';
import RecentListItem from '../RecentListItem/RecentListItem';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div className='home-full-hight'>
      <div className='home-main-content'>
        <Main />
        <AboutUs />
        <SmallCards />
        <Works />
        <Cards />
        <RecentListItem />
        <Testimonials />
      </div>
      <div className='home-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
