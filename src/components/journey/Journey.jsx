import React from 'react'
import './Journey.scss'
import teamJourney from '../../assets/teamJourney.png'

const Journey = () => {
  return (
    <div className='journey'>
        <div className="container">
            <div className="journey__content">
                <h1>Our Journey</h1>
                <h2>How we raised 34M</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</p>
                <div className="journey__list">
                    <div className="journey__item">
                        <h2 className='journey__item-title'>34M+</h2>
                        <p className='journey__item-text'>Donation Received</p>
                    </div>
                    <div className="journey__item">
                        <h2 className='journey__item-title'>400+</h2>
                        <p className='journey__item-text'>Volunters</p>
                    </div>
                    <div className="journey__item">
                        <h2 className='journey__item-title'>40K+</h2>
                        <p className='journey__item-text'>Trees planted</p>
                    </div>
                </div>
                </div>
           <div className="journey__img"><img src={teamJourney} alt="" /></div>
        </div>
    </div>
  )
}

export default Journey