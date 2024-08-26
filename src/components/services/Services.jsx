import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What do I offer?</h5>
      <h2>What I offer</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Bootstrap 5</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
       I can create custom Bootstrap themes for any client or business
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can create clean UI designs for web applications or mobile apps.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can make a visually appealing landing pages for marketing campaigns.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can make an easy-to-use interface for online shopping.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
           I can offer maintenance services to clients enhancements to their apps.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Python</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
            I can make 2D and 3D models for both web development and applications. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I do audio processing tasks like speech recognition, music analysis, and sound synthesis with libraries like PyAudio.             
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can use a range of UI components and tools to build high-quality, user-friendly mobile apps.              
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can manipulate widely used scientific computing libraries like SciPy and AstroPy.              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I use libraries like PyTorch to build neural networks, analyze data, and create intelligent systems.              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can use NumPy to provide functionality for numerical integration and symbolic mathematics. 
                           </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can use frameworks like Django and Flask are used to build web applications.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Some Back-end experince</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can handle server-side logic.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can manage data using databases such as MySQL and PostgreSQL. 
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can build APIs that allow client-side applications to interact with the server-side.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Implement testing and debugging              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
             I also deploy and manage servers              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
