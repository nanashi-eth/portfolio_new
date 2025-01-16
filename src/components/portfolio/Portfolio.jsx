import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.jpg";
import docker from "../../assets/docker.pdf";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Img1,
      title: "Portfolio desarrollado con React 18",
      github: "https://github.com/nanashi-eth/portfolio_new",
    },
    {
      id: 2,
      image: Img2,
      title: "Aplicación web desarrollada con Angular 17",
      github: "https://github.com/nanashi-eth/lichi-front.git",
    },
    {
      id: 3,
      image: Img3,
      title: " API RESTful desarrollada con Spring Boot",
      github: "https://github.com/nanashi-eth/lichi.git",
    },
    {
      id: 4,
      image: Img4,
      title: "Juego educativo desarrollado con Python",
      github: "https://github.com/nanashi-eth/Man-in-the-middle.git",
    },
    {
      id: 5,
      image: Img5,
      title: "Guía sobre cómo utilizar Docker de forma eficaz y segura",
      file: docker,
      github: "https://github.com/nanashi-eth/docker.git",
    },
    // {
    //   id: 6,
    //   image: Img6,
    //   title: "Github",
    //   github: "https://github.com/NTR64/Green-Tomato-Landing-Page",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>Mis Trabajos Recientes</h5>
      <h2>Proyectos</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, file }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="black"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </a>
                {file && (
                  <a
                    href={file}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar
                    <svg
                      fill="black"
                      width="14"
                      height="14"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="jam jam-download"
                    >
                      <path d="M232 64L280 64 280 214 277 270 300 242 356 189 388 221 256 353 124 221 156 189 212 242 235 270 232 214 232 64ZM64 400L448 400 448 448 64 448 64 400Z" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
