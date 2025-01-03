import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>exsample@gmail.com</h5>
            <a href="mailto:exsample@gmail.com" target="_blank">Send a message</a>
          </article>
          {/* <article className='contact__option'>
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>facebook.com</h5>
            <a href="https://facebook.com" target="_blank">Send a message</a>
          </article> */}
          <article className='contact__option'>
            <BsTelegram  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123-456-7890</h5>
            <a href="https://www.telegram.com" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action='https://formsubmit.co/5d65aef9276eac8011da24344ef2c022' method='post' className='contact-form'>
          <input type='text' name='name' id='name' placeholder='Your Full Name' required />
          <input type='text' name='email' id='email' placeholder='Your Email' required />
          <textarea name='message' id='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact