import React from 'react';
import Hero from '../../components/hero/Hero';
import AboutUs from '../../components/aboutUs/AboutUs';
import Supporters from '../../components/supporters/Supporters';
import WhatWeDo from '../../components/whatWeDo/WhatWeDo';
import HaveDone from '../../components/haveDone/HaveDone';
import Diagramm from '../../components/diagramm/Diagramm';
import Contribute from '../../components/contribute/Contribute';
import News from '../../components/news/News';
import Events from '../../components/events/Events';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Supporters />
      <WhatWeDo />
      <HaveDone />
      <Diagramm />
      <Contribute />
      <News />
      <Events />
    </div>
  );
};

export default Home;