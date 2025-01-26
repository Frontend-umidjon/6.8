import React from 'react'
import './AboutUs.scss'
import { FaPlay } from "react-icons/fa";
import aboutBG from '../../assets/aboutBG.png'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className="container">
           <div className='aboutUs__content'>
           <h1 className='aboutUs__name'><hr />Know About Us</h1>
           <h2 className='aboutUs__title'>We help nature smile and survive everywhere</h2>
           <p className='aboutUs__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
           <p className='aboutUs__text'>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
           <button className='aboutUs__btn'>Learn More</button>
           </div>
           <div className='aboutUs__img'>
              <div className='aboutUs__play'>
                <FaPlay style={{ fontSize: '22px'}}/>
              </div>
              <img src={aboutBG} alt="" />
           </div>
        </div>
    </div>
  )
}

export default AboutUs