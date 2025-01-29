import React from 'react'
import './TeamMembers.scss'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { TEAMMEMBERS } from '../../static'
const TeamMembers = () => {
  return (
    <div className='teamMembers'>
        <div className="container">
            <h1 className='teamMembers__title'>Meet our team</h1>
            <p className='teamMembers__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className='teamMembers__list'>
                {
                    TEAMMEMBERS.map((item) => (
                        <div className="teamMembers__item" key={item.id}>
                            <img src={item.img} alt="" className='teamMembers__item-img' />
                            <div className="teamMembers__item-info">
                                <h2 className='teamMembers__item-name'>{item.name}</h2>
                                <p className='teamMembers__item-text'>{item.position}</p>
                                <div className="teamMembers__item-social">
                                    <FaFacebook className='teamMembers__item-icon' style={{ fontSize: '20px', color: '#1D2130',}} />
                                    <FaTwitter className='teamMembers__item-icon'  style={{ fontSize: '20px', color: '#1D2130', }}/>
                                    <FaLinkedin className='teamMembers__item-icon' style={{ fontSize: '20px', color: '#1D2130', }} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TeamMembers