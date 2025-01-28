import React from 'react'
import './Contribute.scss'

const Contribute = () => {
  return (
    <div className='contribute'>
        <div className="container">
           <div className='contribute__bg'>
           <div className='contribute__content'>
               <h1 className='contribute__title'>You can contribute to make the environment greener!</h1>
               <div className='contribute__list'>
                    <button className='contribute__btn green'>Join as a volunteer</button>
                    <button className='contribute__btn white'>Donate</button>
               </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Contribute