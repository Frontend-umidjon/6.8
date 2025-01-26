import React from "react";
import "./About.scss";
import { FaPlay } from "react-icons/fa";
import TeamHero from "../../assets/TeamHero.png";
import Supporters from "../../components/supporters/Supporters";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__pr">
            <h2 className="about__name">
              {" "}
              <hr />
              know About us
            </h2>
            <h1>We are a nonprofit team working worldwide</h1>
          </div>
          <div className="about__info">
            <h3>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim elementum tristique.
            </p>
          </div>
        </div>
        <div className="about__img">
          <div className="about__play">
            <FaPlay style={{ fontSize: "22px" }} />
          </div>
          <img src={TeamHero} alt="" />
        </div>
        <div className="about__bottom">
          <div className="about__mission">
            <h3>Our Mission</h3>
            <h2>We make the world we save our own environment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="about__vision">
            <h3>Our Vision</h3>
            <h2>Plant more trees to make world air pollution free</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
       
      </div>
      <Supporters />
    </div>
  );
};

export default About;
