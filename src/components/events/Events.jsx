import React from 'react'
import './Events.scss'
import { FaArrowRight } from "react-icons/fa6";

const Events = () => {
  return (
    <div className='events'>
        <div className="container">
          <div>
          <h1 className='events__title'>Our Events</h1>
            <div className='events__list'>
                <div className="events__item">
                    <h2 className='events__item-date'>23 <p>Sep</p></h2>
                    <div className='events__item-content'>
                        <h3 className='events__item-title'>Next Events <hr /></h3>
                        <p className='events__item-text'>Say no to plastic usage and save the planet</p>
                    </div>
                    <button className='events__item-btn{'><FaArrowRight /></button>
                </div>
                <div className="events__item">
                    <h2 className='events__item-date'>25 <p>Sep</p></h2>
                    <div className='events__item-content'>
                        <h3 className='events__item-title'>Next Events <hr /></h3>
                        <p className='events__item-text'>Weekly cleaning program</p>
                    </div>
                    <button className='events__item-btn{'><FaArrowRight /></button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Events