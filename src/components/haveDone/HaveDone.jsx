import React from 'react'
import './HaveDone.scss'
import {PROJECTS} from '../../static/index'

const HaveDone = () => {
  return (
    <div className='haveDone'>
      <div className="container">
        <div className='haveDone__content'>
          <h2 className='haveDone__name'><hr />What We Have Done</h2>
          <h1 className='haveDone__title'>We are Creating sustainable society, for everyone and forever.</h1>
          <div className='haveDone__list'>
            {
              PROJECTS.map((item) => {
                return(
                  <div className="haveDone__item" key={item.id} style={{background: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                   <div className='haveDone__item-bg'>
                    <div className='haveDone__item-content'>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <button>See More</button>
                    </div>
                   </div>
                  </div>
                )
              })
            }
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default HaveDone