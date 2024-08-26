import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>I am Nicholas, but you can call me...</h5>
        <h1>Nick</h1>
        <h5 className="text__light">Front-End Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="my image" />
        </div>

        <a href="#contact" className="scroll__down">
          Let's talk
        </a>

      </div>
    </header>
  );
};

export default Header;
