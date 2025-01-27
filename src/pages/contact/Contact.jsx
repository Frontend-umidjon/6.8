import React from 'react';
import './Contact.scss';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='container'>
        <div className='contact__content'>
          <div className='contact__info'>
            <h2 className='contact__name'><hr />Contact Us</h2>
            <h1 className='contact__title'>We'd love to hear from you</h1>
            <p className='contact__text'>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
          </div>
          <div className='contact__details'>
            <div className='contact__item'>
              <h3 className='contact__item-title'>Let's talk!</h3>
              <div>
                <p className='contact__item-text'>+1 23 456 789</p>
                <p className='contact__item-text'>hello@finsweet.com</p>
              </div>
            </div>
            <div className='contact__item'>
              <h3 className='contact__item-title'>Headoffice</h3>
              <p className='contact__item-text'>8 Brewery Drive, Hudson, NH 03051 <br /> USA</p>
            </div>
            <div className='contact__item'>
              <h3 className='contact__item-title'>Branch Office</h3>
              <p className='contact__item-text'>178 Marconi St., Venice, 34293 <br /> Italy</p>
            </div>
            <div className='contact__social'>
              <FaFacebook className='contact__social-icon' style={{ fontSize: '20px', color: '#1D2130' }} />
              <FaTwitter className='contact__social-icon' style={{ fontSize: '20px', color: '#1D2130' }} />
              <FaLinkedin className='contact__social-icon' style={{ fontSize: '20px', color: '#1D2130' }} />
            </div>
          </div>
        </div>
        <div className='contact__form'>
        
        </div>
      </div>
      
    </div>
    <section className='section-form'>
    <div className='container'>
      <form className='form'>
        <div className='form__row'>
          <div className='form__group'>
            <label className='form__label'>First Name</label>
            <input type='text' placeholder='John' className='form__input' />
          </div>
          <div className='form__group'>
            <label className='form__label'>Last Name</label>
            <input type='text' placeholder='Doe' className='form__input' />
          </div>
        </div>
        <div className='form__row'>
          <div className='form__group'>
            <label className='form__label'>Email ID</label>
            <input type='email' placeholder='johndoe@gmail.com' className='form__input' />
          </div>
          <div className='form__group'>
            <label className='form__label'>Subject</label>
            <input type='text' placeholder='Subject' className='form__input' />
          </div>
        </div>
        <div className='form__message'>
          <label className='form__label'>Message</label>
          <textarea placeholder='Type your Message' className='form__textarea'></textarea>
        </div>
        <button type='submit' className='form__button'>Send Message</button>
      </form>
    </div>
  </section>
  
    </>
  )
}

export default Contact;
