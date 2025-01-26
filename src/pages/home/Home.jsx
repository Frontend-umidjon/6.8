import React from 'react';
import Hero from '../../components/hero/Hero';
import AboutUs from '../../components/aboutUs/AboutUs';
import Supporters from '../../components/supporters/Supporters';
import WhatWeDo from '../../components/whatWeDo/WhatWeDo';
import HaveDone from '../../components/haveDone/HaveDone';
import Diagramm from '../../components/diagramm/Diagramm';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Supporters />
      <WhatWeDo />
      <HaveDone />
      {/* <Diagramm /> */}
    </div>
  );
};

export default Home;