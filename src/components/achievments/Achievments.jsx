import React from 'react'
import './Achievments.scss'
import { ACHIEVMENTS } from '../../static'

const Achievments = () => {
  return (
    <div className='achievments'>
        <div className="container">
            <h1 className='achievments__title'>Awards & Recognitions</h1>
            <div className='achievments__list'>
               {
                ACHIEVMENTS.map((item) => {
                    return(
                        <div className="achievments__item" key={item.id}>
                            <img src={item.img} alt="" />
                            <h3>{item.year}</h3>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    )
                })
               }
            </div>
        </div>
    </div>
  )
}

export default Achievments