import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Hola mi nombre es Jose, pero puedes llamarme...</h5>
        <h1>Nanashi</h1>
        <h5 className="text__light">Desarrollador Full Stack</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="my image" />
        </div>

        <a href="#contact" className="scroll__down">
          Desplázate abajo
        </a>

      </div>
    </header>
  );
};

export default Header;
