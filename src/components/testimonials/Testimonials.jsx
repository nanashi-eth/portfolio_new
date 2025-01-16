import React from "react";
import "./testimonials.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import cert1 from "../../assets/1720681284438.pdf"
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avater: Avtr1,
      name: "API y servicios web",
      review:
        "Contenido formativo sobre microservicios, servicios web y tipos de API, así como mantener su seguridad e integridad durante todas las fases del desarrollo.",
      link: "https://www.linkedin.com/learning/certificates/3e5f52ee1e5640e6f2e7b02a107bac7505c74280312e5f579371c52089838e64",
    },
    {
      avater: Avtr2,
      name: "Fundamentos profesionales del desarrollo de software",
      review:
        "Descubre las habilidades necesarias para desarrollar una carrera en el desarrollo de software. Conoce los principales conceptos y la estructura de los lenguajes de programación y aprende cómo se aplican.",
      link: "https://www.linkedin.com/learning/certificates/3b1b171e788414c4091e6387d21d0fff65119c481f99711d0e0c9085fa7b6452",
    },
    {
      avater: Avtr2,
      name: "Fundamentos de la carrera de administración de sistemas",
      review:
        "Robert McMillen te ayuda a empezar proporcionándote una visión general de la función, las habilidades y las herramientas necesarias, y cómo iniciar y avanzar en su carrera. Aprende a gestionar implementaciones locales, en la nube, físicas y virtuales, así como la seguridad del almacenamiento y mucho más.",
      link: "https://www.linkedin.com/learning/certificates/b2df993068c663bbf6946f4190f7583a1454ee9592a5508a9a9d081eec6027c6",
    },
    {
      avater: Avtr3,
      name: "Especialista en Ciberseguridad",
      review:
        "Los ataques informáticos han dejado de ser un problema que afecta solo a grandes corporaciones y cada vez preocupan a más empresas y entidades de todo tipo. La demanda de expertos capaces de prevenir, detectar y resolver este tipo de ataques está creciendo y eso representa una gran oportunidad para los profesionales con perfil tecnológico.",
      link: cert1,
    },
  ];

  return (
    <section id="testimonials">
      <h5>Certificaciones</h5>
      <h2>Formación</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avater, name, review, link }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avater} alt="client image" />
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="client__name-link"
              >
                <h5 className="client__name">
                {name}
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
                </h5>
              </a>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
