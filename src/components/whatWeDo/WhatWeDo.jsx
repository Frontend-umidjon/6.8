import React from 'react'
import './WhatWeDo.scss'
import { WHATWEDO } from '../../static'
import dogStock from '../../assets/dogStock.png'

const WhatWeDo = () => {
  return (
    <div className='whatWeDo'>
      <div className="container">
        <div className='whatWeDo__content'>
        <h2 className='whatWeDo__name'><hr />What We Do</h2>
        <h1 className='whatWeDo__title'>We care for earth, care for the coming birth</h1>
        <p className='whatWeDo__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
         <div className='whatWeDo__list'>
            {
              WHATWEDO?.map((item) => {
                return(
                  <div className="whatWeDo__item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div>
                    <h3 className='whatWeDo__item-title'>{item.title}</h3>
                    <p className='whatWeDo__item-text'>{item.text}</p>
                    </div>
                  </div>
                )
              })
            }
         </div>
        </div>
        <div className='whatWeDo__img'>
          <img src={dogStock} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo