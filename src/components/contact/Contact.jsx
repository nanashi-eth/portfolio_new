import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Conecta conmigo</h5>
      <h2>Contáctame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Correo</h4>
            <h5>jose98_rbb@hotmail.com</h5>
            <a href="mailto:jose98_rbb@hotmail.com" target="_blank">Enviar mensaje</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="white"
                className="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
          </article>
          {/* <article className='contact__option'>
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>facebook.com</h5>
            <a href="https://facebook.com" target="_blank">Send a message</a>
          </article> */}
          <article className='contact__option'>
            <BsTelegram  className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>nanashi_wh</h5>
            <a href="https://t.me/nanashi_wh" target="_blank">Enviar mensaje</a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="white"
                className="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action='https://formsubmit.co/5d65aef9276eac8011da24344ef2c022' method='post' className='contact-form'>
          <input type='text' name='name' id='name' placeholder='Tu nombre completo' required />
          <input type='text' name='email' id='email' placeholder='Tu correo electrónico' required />
          <textarea name='message' id='message' rows='7' placeholder='Escribe tu mensaje aquí' required></textarea>
          <button type='submit' className='btn btn-primary' data-hover-text='Enviar mensaje'>
              <span>Enviar mensaje</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact