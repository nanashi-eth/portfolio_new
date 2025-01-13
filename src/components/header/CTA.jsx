import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn" data-hover-text='Descargar CV'>
        <span>Descargar CV</span>
      </a>
      <a href="#contact" className="btn btn-primary" data-hover-text='Contactemos'>
        <span>Contactemos</span>
      </a>
    </div>
  );
};

export default CTA;
