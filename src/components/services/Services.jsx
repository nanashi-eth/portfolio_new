import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>¿Qué ofrezco?</h5>
      <h2>Mis Habilidades</h2>
      <div className="container services__container">
        {/* Desarrollo de Aplicaciones Multiplataforma */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo de Aplicaciones Multiplataforma</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>He desarrollado aplicaciones nativas e híbridas utilizando Android y frameworks multiplataforma.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>He implementado APIs RESTful con mecanismos de autenticación segura como JWT.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Puedo trabajar con bases de datos como PostgreSQL y MySQL para una gestión robusta de datos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Aplico buenas prácticas de desarrollo para garantizar código limpio, escalable y mantenible.</p>
            </li>
          </ul>
        </article>

        {/* Desarrollo Web */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>He desarrollado aplicaciones web modernas utilizando frameworks como Angular.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>He implementado técnicas de optimización como lazy loading, paginación y carga asíncrona para mejorar el rendimiento web.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>He trabajado con frameworks de backend como Spring Boot y NodeJS para el desarrollo full-stack.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Gestiono el control de versiones utilizando Git y plataformas como GitHub.</p>
            </li>
          </ul>
        </article>

        {/* Administración de Servidores y Redes */}
        <article className="service">
          <div className="service__head">
            <h3>Administración de Servidores y Redes</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>He configurado y bastionado servidores web populares como Apache y Nginx.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>He utilizado certificados SSL/TLS con herramientas como Let's Encrypt para mejorar la seguridad.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>He diseñado topologías de red y configurado infraestructuras seguras.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Puedo manejar y configurar herramientas como ELK y Wireshark para monitorear y solucionar problemas de red.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>He implementado y gestionado aplicaciones contenedorizadas usando Docker.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
