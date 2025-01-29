import React from "react";
import "./WhatDo.scss";
import whatWeDoHero from "../../assets/whatWeDoHero.png";
import { WHATWECANDO } from "../../static";
import HaveDone from "../../components/haveDone/HaveDone";
import Contribute from "../../components/contribute/Contribute";
import News from "../../components/news/News";
import Events from "../../components/events/Events";

const WhatDo = () => {
  return (
    <>
      <div className="whatDo">
        <div className="container">
          <div className="whatDo__content">
            <div className="whatDo__info">
              <h2 className="whatDo__name">
                <hr />
                What We Do
              </h2>
              <h1 className="whatDo__title">We are working worldwide</h1>
              <p className="whatDo__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div className="whatDo__img">
              <img src={whatWeDoHero} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="whatDo__cards">
        <div className="container">
          <h2>What we do for the environment</h2>
          <div className="whatDo__list">
            {WHATWECANDO.map((item) => {
              return (
                <div className="whatDo__item" key={item.id}>
                  <img src={item.img} alt="" />
                  <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <HaveDone />
          <Contribute />
      <News />
      <Events />
        </div>
      </div>
    </>
  );
};

export default WhatDo;
