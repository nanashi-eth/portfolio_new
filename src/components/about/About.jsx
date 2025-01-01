import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>¿Quién soy?</h5>
      <h2>Permíteme presentarme</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>Más de 3 años desarrollando proyectos</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Certificaciones</h5>
              <small>
                Cuento con certificaciones en Bootstrap 5, React y React Native
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>50+ completados con éxito</small>
            </article>
          </div>
          <p>
            Estoy disponible de lunes a viernes, entre las 10:00 y las 15:00. Me comprometo a responder lo antes posible.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contactemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
