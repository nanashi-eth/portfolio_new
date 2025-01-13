import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";

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
      github: "https://github.com",
    },
    {
      id: 3,
      image: Img3,
      title: "Lichi back springboot",
      github: "https://github.com",
    },
    {
      id: 4,
      image: Img4,
      title: "Man in the middle python",
      github: "https://github.com",
    },
    {
      id: 5,
      image: Img5,
      title: "Docker",
      github: "https://github.com",
    },
    {
      id: 6,
      image: Img6,
      title: "Github",
      github: "https://github.com/NTR64/Green-Tomato-Landing-Page",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Mis Trabajos Recientes</h5>
      <h2>Proyectos</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="black"
                    class="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
