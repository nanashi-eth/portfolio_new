import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Logo</a>
      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
        <li><a href="#testimonials">Certificaciones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
       <a href="https://instagram.com"><FiInstagram/></a>
       <a href="https://twitter.com"><IoLogoTwitter/></a>
       <a href="https://www.linkedin.com/in/nanashi-eth/"><BsLinkedin/></a>
       <a href="https://github.com/nanashi-eth"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nanashi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer