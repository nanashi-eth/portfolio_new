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
      title: "Portfolio React",
      github: "https://github.com/nanashi-eth/portfolio_new",
    },
    {
      id: 2,
      image: Img2,
      title: "Lichi front angular",
      github: "https://github.com/nanashi-eth/lichi-front.git",
    },
    {
      id: 3,
      image: Img3,
      title: "Lichi back springboot",
      github: "https://github.com/nanashi-eth/lichi.git",
    },
    {
      id: 4,
      image: Img4,
      title: "Man in the middle python",
      github: "https://github.com/nanashi-eth/Man-in-the-middle.git",
    },
    {
      id: 5,
      image: Img5,
      title: "Docker",
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
              <div className="protfolio__item-image">
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
                      viewBox="-5 -7 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      class="jam jam-download"
                    >
                      <path d="M8 6.641l1.121-1.12a1 1 0 0 1 1.415 1.413L7.707 9.763a.997.997 0 0 1-1.414 0L3.464 6.934A1 1 0 1 1 4.88 5.52L6 6.641V1a1 1 0 1 1 2 0v5.641zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z" />
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
