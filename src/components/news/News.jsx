import React from 'react'
import './News.scss'
import { NEWS } from '../../static'


const News = () => {
  return (
    <div className='news'>
        <div className="container">
            <h1>Read our Recent News</h1>
            <p className='news__text'>Edit this text to make it your own. To edit, simply click directly on the text to start We are served</p>

            <div className='news__list'>
                {
                    NEWS.map((item) => {
                        return(
                            <div className="news__item" key={item.id}>
                                <img src={item.img} alt="" />
                                <h3>{item.title}</h3>
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

export default News