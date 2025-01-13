import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Logo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre Mi</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#services">Habilidades</a>
        </li>
        <li>
          <a href="#portfolio">Proyectos</a>
        </li>
        <li>
          <a href="#testimonials">Formación</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/josebenitez_98/">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/nanashi-eth/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/nanashi-eth">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nanashi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
