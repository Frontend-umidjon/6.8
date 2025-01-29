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
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29810.409286028742!2d-89.70953283317355!3d20.940417600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56730deacd8237%3A0x9bdf66c054968829!2sDISTRIBUIDOR%20OMNILIFE%20%26%20SEYTU%20COSM%C3%89TICA!5e0!3m2!1sru!2s!4v1738135925491!5m2!1sru!2s"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </>
  )
}

export default Contact;
