import React from 'react'
import './Media.scss'
import { MEDIA } from '../../static'
import News from '../../components/news/News'

const Media = () => {
  return (
   <>
    <div className='media'>
        <div className="container">
            <div className='media__content'>
                <div className='media__info'>
                    <h2 className='media__name'><hr />Top news</h2>
                    <h1 className='media__title'>Our goal is to make water available for everyone</h1>
                    <p className='media__text'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <button className='media__btn'>Read More</button>
                </div>
                <div className='media__side'>
                    {
                        MEDIA.map((item) => {
                            return(
                                <div className='media__item' key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div>
                                    <h3 className='media__item-title'>{item.title}</h3>
                                    <p className='media__item-text'>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    <News />
    </>
  )
}

export default Media