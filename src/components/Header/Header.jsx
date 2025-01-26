import React from 'react'
import {  NavLink, Link    } from 'react-router-dom'
import './Header.scss'
import { NAVLINKS } from '../../static/index'
import logo from '../../assets/Logo.png'
 
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <nav className="navbar">
                <div className="navbar__logo">
                  <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <ul className="navbar__list">
                   {
                    NAVLINKS.map((item)=>{
                      return(
                        <li key={item.id} className="navbar__item">
                          <NavLink to={item.path} className="navbar__link">{item.name}</NavLink>
                        </li>
                      )
                    })
                   }
                   <button className='navbar__btn'>Donate</button>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header