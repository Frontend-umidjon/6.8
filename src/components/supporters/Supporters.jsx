import React from 'react'
import './Supporters.scss'
import { SUPPORTERS } from '../../static'

const Supporters = () => {
  return (
    <div className='supporters'>
        <div className="container">
            <h1 className='supporters__title'>Our Supporters <hr /></h1>
            <div className='supporters__list'>
               {
                SUPPORTERS.map((item) => {
                    return(
                        <div className="supporters__item" key={item.id}>
                            <img src={item.thumbnail} alt="" />
                        </div>
                    )
                })
               } 
    
            </div>
        </div>
    </div>
  )
}

export default Supporters