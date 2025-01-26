import React from 'react'
import './Hero.scss'
import { FaCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
       <h1 className='hero__title'>Save the environment today for a better tomorrow</h1>
       <div className='hero__actions'>
        <button className='hero__btn hovered'>What We Do</button>
        <button className='hero__btn'>{<FaCirclePlay style={{color: '#fff', fontSize: '24px'}}/>} Play Video</button>
       </div>
       <div className='hero__bottom'>
        <p>23,800 trees planted</p>
        <hr />
        <p>5840 donations collected</p>
       </div>
      </div>
    </div>
  )
}

export default Hero